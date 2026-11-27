#!/usr/bin/env Rscript
# Render pencil texture in place: no geometric simplification or coordinate jitter.
helper <- path.expand("~/.codex/skills/map-pipeline/scripts/map_helpers.R")
if (file.exists(helper)) source(helper)
suppressPackageStartupMessages({ library(sf); library(terra); library(jsonlite); library(digest) })
library(png)
sf_use_s2(FALSE)
set.seed(27112026)
options(timeout = 300)

out <- "assets/artwork-studies/geographic-maps"
cache <- "/tmp/ocean-recoveries-terrain-tiles"
dir.create(out, recursive = TRUE, showWarnings = FALSE)
dir.create(cache, recursive = TRUE, showWarnings = FALSE)
material_path <- file.path(out, "pencil-pigment-material.png")
material_image <- readPNG(material_path)
material_luma <- material_image[, , 1] * 0.2126 + material_image[, , 2] * 0.7152 + material_image[, , 3] * 0.0722
material_grid <- rast(material_luma)
material_smooth <- as.matrix(focal(material_grid, w = 31, fun = "mean", na.rm = TRUE), wide = TRUE)
# Discard broad light/dark forms: this asset supplies surface marks, not relief.
material_detail <- material_luma - material_smooth
material_detail[!is.finite(material_detail)] <- 0
material_rank <- pnorm(material_detail / sd(as.numeric(material_detail)))
shore_zip <- "/tmp/ocean-recoveries-gshhg-2.3.7.zip"
shore_url <- "https://www.soest.hawaii.edu/pwessel/gshhg/gshhg-shp-2.3.7.zip"
shore_dir <- "/tmp/ocean-recoveries-gshhg-full"
if (!file.exists(shore_zip)) download.file(shore_url, shore_zip, mode = "wb")
if (!dir.exists(shore_dir)) {
  members <- unzip(shore_zip, list = TRUE)$Name
  unzip(shore_zip, files = members[grepl("GSHHS_f_L1\\.(shp|shx|dbf|prj)$", members)], exdir = shore_dir)
}
shore_file <- list.files(shore_dir, pattern = "GSHHS_f_L1.shp$", recursive = TRUE, full.names = TRUE)
stopifnot(length(shore_file) == 1)
unzip(shore_zip, files = c("LICENSE.TXT", "COPYING.LESSERv3"), exdir = out)
shom_url <- "https://services.data.shom.fr/INSPIRE/telechargement/prepackageGroup/MNT_COTIER_MOOREA_20m_PACK_DL/prepackage/MNT_COTIER_MOOREA_METEO-FRANCE_NM/file/MNT_COTIER_MOOREA_METEO-FRANCE_NM.7z"
shom_zip <- "/tmp/moorea-shom-msl.7z"
shom_grid <- "/tmp/moorea-shom-msl/MNT_COTIER_MOOREA_METEO-FRANCE_NM/DONNEES/MNT_MOO20m_METEO-FRANCE_WGS84_NM_ZNEG.asc"
if (!file.exists(shom_grid)) {
  if (!file.exists(shom_zip)) download.file(shom_url, shom_zip, mode = "wb")
  stopifnot(nzchar(Sys.which("7zz")))
  stopifnot(system2("7zz", c("x", shom_zip, "-o/tmp/moorea-shom-msl", "-y")) == 0)
}

regions <- list(
  moorea = list(bounds = c(-149.94, -17.615, -149.74, -17.455), epsg = 32706, zoom = 12L, resolution = 20, scale = 5000, contour = 100),
  santa_barbara_channel = list(bounds = c(-120.6, 33.85, -119.12, 34.65), epsg = 32611, zoom = 10L, resolution = 100, scale = 20000, contour = 200)
)
tile_xy <- function(lon, lat, z) c((lon + 180) / 360 * 2^z, (1 - asinh(tan(lat * pi / 180)) / pi) / 2 * 2^z)

for (name in names(regions)) {
  message("Preparing ", name)
  spec <- regions[[name]]
  folder <- file.path(out, name)
  dir.create(folder, showWarnings = FALSE)
  b <- spec$bounds
  box <- st_as_sfc(st_bbox(c(xmin = b[1], ymin = b[2], xmax = b[3], ymax = b[4]), crs = st_crs(4326)))
  coast_path <- file.path(folder, "coastline.geojson")
  if (!file.exists(coast_path)) {
    shore <- st_read(shore_file, wkt_filter = st_as_text(box), quiet = TRUE)
    shore <- suppressWarnings(st_intersection(st_make_valid(shore), box))
    stopifnot(nrow(shore) > 0)
    st_write(shore, coast_path, quiet = TRUE)
  }
  coast <- st_read(coast_path, quiet = TRUE)
  coast_utm <- st_transform(coast, spec$epsg)
  # Remove only the artificial straight edges introduced by regional cropping.
  shoreline <- suppressWarnings(st_difference(st_boundary(st_geometry(coast)), st_boundary(box)))
  shoreline_utm <- st_transform(shoreline, spec$epsg)
  coast_before <- digest(st_as_binary(st_geometry(coast_utm)), algo = "sha256")
  dem_path <- file.path(folder, if (name == "moorea") "elevation-shom-utm.tif" else "elevation-utm.tif")
  tiles <- list()
  a <- floor(tile_xy(b[1], b[4], spec$zoom))
  z <- floor(tile_xy(b[3], b[2], spec$zoom))
  if (name != "moorea") {
  for (x in a[1]:z[1]) for (y in a[2]:z[2]) {
    url <- sprintf("https://s3.amazonaws.com/elevation-tiles-prod/geotiff/%d/%d/%d.tif", spec$zoom, x, y)
    path <- file.path(cache, sprintf("%d-%d-%d.tif", spec$zoom, x, y))
    if (!file.exists(path)) {
      ok <- FALSE
      for (attempt in 1:3) {
        result <- try(download.file(url, path, quiet = TRUE, method = "libcurl"), silent = TRUE)
        if (!inherits(result, "try-error") && result == 0) { ok <- TRUE; break }
      }
      if (!ok) stop("Unable to download terrain tile: ", url)
    }
    tiles[[length(tiles) + 1]] <- list(url = url, file = path, sha256 = digest(path, file = TRUE, algo = "sha256"))
  }
  }
  if (!file.exists(dem_path)) {
    dem <- if (name == "moorea") rast(shom_grid) else do.call(merge, lapply(tiles, function(t) rast(t$file)))
    bb <- st_bbox(st_transform(box, spec$epsg))
    template <- rast(xmin = bb[1], xmax = bb[3], ymin = bb[2], ymax = bb[4], resolution = spec$resolution, crs = paste0("EPSG:", spec$epsg))
    dem <- project(dem, template, method = "bilinear")
    writeRaster(dem, dem_path, overwrite = TRUE, gdal = "COMPRESS=DEFLATE")
  }
  dem <- rast(dem_path)
  land <- rasterize(vect(coast_utm), dem, field = 1, background = NA, touches = FALSE)
  elev <- mask(dem, land)
  # The same DEM, raster grid, and coastline objects feed both render variants.
  slope <- terrain(dem, "slope", unit = "radians")
  aspect <- terrain(dem, "aspect", unit = "radians")
  shade_grid <- shade(slope, aspect, angle = 45, direction = 315)
  e <- values(elev, mat = FALSE)
  elevation_before <- digest(e, algo = "sha256")
  valid <- is.finite(e)
  stopifnot(sum(valid) > 1000, all(is.finite(values(dem, mat = FALSE)[valid])))
  light <- pmax(0, pmin(1, values(shade_grid, mat = FALSE)))
  light[!is.finite(light)] <- 1
  stops <- if (name == "moorea") c(0, 25, 150, 500, 800, 1200) else c(0, 100, 500, 1200, 2300)
  palette <- if (name == "moorea") c("#ddd8ac", "#b4c295", "#8aa374", "#718b63", "#9ba083", "#c6bfae") else c("#e0d2ac", "#bac199", "#c6ae7b", "#a29b7c", "#c7bca7")
  ramp <- colorRamp(palette)
  colors <- ramp(approx(stops, seq(0, 1, length.out = length(stops)), ifelse(valid, e, 0), rule = 2)$y) / 255
  colors <- pmin(1, colors * (0.44 + 0.65 * light))
  dim(colors) <- c(length(e), 3)
  colors <- 0.87 * colors + 0.13
  colors[!valid, ] <- rep(c(0.965, 0.983, 0.989), each = sum(!valid))
  rows <- rep(seq_len(nrow(dem)), each = ncol(dem))
  cols <- rep(seq_len(ncol(dem)), times = nrow(dem))
  grain <- rnorm(ncell(dem), sd = 0.022)
  hatch <- (sin((cols + rows * 0.8) * 1.8) > 0.7) * (1 - light) * 0.15
  pencil <- colors
  pencil[] <- pmax(0, pmin(1, colors + grain - hatch))
  # Water texture is surface grain only, not invented bathymetry or reef habitat.
  pencil[!valid, ] <- pmax(0, pmin(1, colors[!valid, ] + grain[!valid] * 0.25))
  texture_a <- material_rank[cbind((rows - 1L) %% nrow(material_rank) + 1L, (cols - 1L) %% ncol(material_rank) + 1L)]
  pencil_palette <- if (name == "moorea") c("#d1c58d", "#abbf7c", "#86a15c", "#708c4e", "#9caa78", "#bcb4a0") else c("#d4bc87", "#a7b282", "#b99c65", "#938864", "#c8b898")
  pigment <- colorRamp(pencil_palette)(approx(stops, seq(0, 1, length.out = length(stops)), ifelse(valid, e, 0), rule = 2)$y) / 255
  # Pigment coverage follows the existing hillshade; no feature positions move.
  pigment_shading <- pigment * (0.5 + 0.48 * light)
  pencil_v2 <- 1 - (1 - pigment_shading) * (0.84 + 0.20 * (texture_a - 0.5))
  pencil_v2[] <- pmax(0, pmin(1, pencil_v2))
  water_pressure <- pmin(1, pmax(0, (0.34 - texture_a) * 3.5 + 0.5))
  shoreline_halo <- exp(-values(distance(land), mat = FALSE) / if (name == "moorea") 650 else 3000)
  for (channel in 1:3) pencil_v2[!valid, channel] <- 1 - c(0.12, 0.045, 0.018)[channel] * water_pressure[!valid] * shoreline_halo[!valid]
  rgb_raster <- function(v) as.raster(matrix(rgb(v[, 1], v[, 2], v[, 3]), nrow = nrow(dem), byrow = TRUE))
  contour_grid <- mask(clamp(dem, lower = 1, values = FALSE), land)
  contours <- as.contour(contour_grid, levels = seq(spec$contour, max(e, na.rm = TRUE), by = spec$contour))
  ex <- as.vector(ext(dem))
  width <- 1800L
  height <- as.integer(round(width * (ex[4] - ex[3]) / (ex[2] - ex[1])))
  for (variant in c("reference", "pencil", "pencil-v2")) {
    png(file.path(folder, paste0(variant, ".png")), width = width, height = height, res = 180, type = "cairo", bg = "white")
    par(mar = rep(0.7, 4), xaxs = "i", yaxs = "i")
    plot.new()
    plot.window(xlim = ex[1:2], ylim = ex[3:4], asp = 1)
    rasterImage(rgb_raster(switch(variant, reference = colors, pencil = pencil, `pencil-v2` = pencil_v2)), ex[1], ex[3], ex[2], ex[4], interpolate = FALSE)
    if (variant == "pencil-v2") {
      candidates <- sample(which(valid), min(45000L, as.integer(sum(valid) / 6)))
      xy <- xyFromCell(dem, candidates)
      xy <- xy + matrix(runif(length(xy), -0.4, 0.4) * spec$resolution, ncol = 2)
      length_m <- spec$resolution * runif(length(candidates), 1.5, 4.2)
      angle <- pi / 2 - values(aspect, mat = FALSE)[candidates] + rnorm(length(candidates), 0, 0.2)
      angle[!is.finite(angle)] <- pi / 4
      dx <- cos(angle) * length_m / 2
      dy <- sin(angle) * length_m / 2
      starts <- cbind(xy[, 1] - dx, xy[, 2] - dy)
      ends <- cbind(xy[, 1] + dx, xy[, 2] + dy)
      inside <- is.finite(extract(land, starts)[, 1]) & is.finite(extract(land, ends)[, 1])
      alpha <- (0.06 + (1 - light[candidates]) * 0.2) * runif(length(candidates), 0.55, 1.15)
      ink <- pigment[candidates, ] * (0.32 + 0.34 * light[candidates])
      stroke_colors <- rgb(ink[inside, 1], ink[inside, 2], ink[inside, 3], alpha = pmin(0.85, alpha[inside]))
      bends <- runif(length(candidates), -0.025, 0.025) * length_m
      mid <- xy + cbind(-sin(angle) * bends, cos(angle) * bends)
      strokes <- st_sf(ink = stroke_colors, width = runif(sum(inside), 0.28, 0.62), geometry = st_sfc(lapply(which(inside), function(i) st_linestring(rbind(starts[i, ], mid[i, ], ends[i, ]))), crs = spec$epsg))
      strokes <- suppressWarnings(st_intersection(strokes, st_union(st_geometry(coast_utm))))
      plot(st_geometry(strokes), add = TRUE, col = strokes$ink, lwd = strokes$width)
    }
    if (variant == "pencil") plot(contours, add = TRUE, col = "#3e514c22", lwd = 0.28)
    plot(shoreline_utm, add = TRUE, col = if (variant == "pencil-v2") "#4c594c80" else "#40594e", lwd = if (variant == "pencil-v2") 0.45 else 0.6)
    # Scale is in projected metres; true-north direction comes from a meridian.
    span <- ex[2] - ex[1]
    bottom <- ex[3] + 0.055 * (ex[4] - ex[3])
    left <- ex[1] + 0.045 * span
    segments(left, bottom, left + spec$scale, bottom, lwd = 1.2, col = "#30443e")
    segments(c(left, left + spec$scale), bottom - span * 0.003, c(left, left + spec$scale), bottom + span * 0.003, col = "#30443e")
    text(left + spec$scale / 2, bottom + span * 0.024, paste0(spec$scale / 1000, " km"), cex = 1.9, col = "#30443e")
    north_points <- st_transform(st_sfc(st_point(c(mean(b[c(1,3)]), mean(b[c(2,4)]))), st_point(c(mean(b[c(1,3)]), mean(b[c(2,4)]) + 0.01)), crs = 4326), spec$epsg)
    north <- diff(st_coordinates(north_points))
    north <- north / sqrt(sum(north^2)) * span * 0.045
    nx <- if (name == "santa_barbara_channel") ex[1] + span * 0.07 else ex[2] - span * 0.065
    ny <- if (name == "santa_barbara_channel") ex[3] + (ex[4] - ex[3]) * 0.55 else ex[4] - (ex[4] - ex[3]) * 0.13
    arrows(nx, ny, nx + north[1], ny + north[2], length = 0.055, lwd = 0.9, col = "#30443e")
    text(nx + north[1], ny + north[2] + span * 0.025, "N", cex = 1.9, col = "#30443e")
    dev.off()
  }
  stopifnot(identical(coast_before, digest(st_as_binary(st_geometry(coast_utm)), algo = "sha256")), identical(elevation_before, digest(values(elev, mat = FALSE), algo = "sha256")))
  manifest <- list(
    region = name, bounds_wgs84 = b, projected_epsg = spec$epsg,
    coast_source = shore_url, coast_dataset = "GSHHG 2.3.7 full-resolution L1, LGPL",
    coastline_sha256 = digest(coast_path, file = TRUE, algo = "sha256"), coastline_vertices = nrow(st_coordinates(coast)),
    dem_source = if (name == "moorea") "Shom 2023, MNT topo-bathymetrique cotier de Moorea, edition 2.0, 0.0002 degrees, mean sea level, negative-down convention" else "AWS Terrain Tiles / Tilezen: USGS SRTM, GMTED2010 and 3DEP source mosaic",
    dem_attribution = if (name == "moorea") "https://doi.org/10.17183/MNT_COTIER_MOOREA_METEO-FRANCE_20m_WGS84" else "https://github.com/tilezen/joerd/blob/master/docs/attribution.md",
    shom_source = if (name == "moorea") list(url = shom_url, archive_sha256 = digest(shom_zip, file = TRUE, algo = "sha256"), grid_sha256 = digest(shom_grid, file = TRUE, algo = "sha256")) else NULL,
    tile_zoom = spec$zoom, tiles = lapply(tiles, function(t) t[c("url", "sha256")]),
    dem_sha256 = digest(dem_path, file = TRUE, algo = "sha256"), output_grid_metres = res(dem),
    pencil_v2_material = list(file = "../pencil-pigment-material.png", sha256 = digest(material_path, file = TRUE, algo = "sha256"), use = "Only high-pass luminance surface grain. No generated geographic features. Pencil strokes follow DEM aspect and hillshade, clipped to unchanged coastline polygons; no contour overlay.", strokes = nrow(strokes)),
    elevation_range_land_metres = range(e, na.rm = TRUE), land_cells = sum(valid),
    geometry_checks = list(coastline_hash_unchanged_after_styling = TRUE, elevation_hash_unchanged_after_styling = TRUE, same_coastline_object_for_both_variants = TRUE, coastline_simplification = FALSE, coordinate_jitter = FALSE, generative_redraw = FALSE, same_dem_for_both_variants = TRUE, missing_land_elevations = sum(is.finite(values(land, mat = FALSE)) & !valid), coastal_negative_elevation_cells = sum(e < 0, na.rm = TRUE)),
    rendering = "North-up UTM, bilinear DEM reprojection, 315-degree hillshade at 45-degree sun altitude. Color, fine grain and hatching only; contour lines from elevation. No vertical perspective or invented terrain/habitat."
  )
  write_json(manifest, file.path(folder, "provenance.json"), pretty = TRUE, auto_unbox = TRUE)
  message(name, ": ", nrow(st_coordinates(coast)), " coastline vertices; land elevation ", paste(round(range(e, na.rm = TRUE)), collapse = " to "), " m; ", length(tiles), " tiles")
}
