# Geographic pencil map previews

November 27, 2026. Adrian approved V2 for integration and publishing. Selected `pencil-v2.png` originals are retained here; web JPEGs appear on the Research overview and corresponding Coral Reefs / Kelp Forests pages. Earlier map variants are not used on the website. Reference images support comparison; other variants can be regenerated locally.

## Sources

- Shorelines: GSHHG 2.3.7, **full-resolution L1**, Wessel and Smith, University of Hawai‘i / NOAA. https://www.soest.hawaii.edu/pwessel/gshhg/ . Clipped regional polygons are retained in each folder as `coastline.geojson`. License files from the distribution accompany these subsets. These are source-derived regional maps, not surveyed boundaries or navigation charts.
- Mo‘orea elevation: **Shom, 2023. MNT topo-bathymétrique côtier de Moorea (Projet Météo-France)**, edition 2.0, mean-sea-level version, 0.0002° grid (approximately 20 m). https://doi.org/10.17183/MNT_COTIER_MOOREA_METEO-FRANCE_20m_WGS84 . Licence Ouverte 2.0; source attribution required. Negative values are below mean sea level. Metadata: https://services.data.shom.fr/geonetwork/web/api/records/MNT_COTIER_MOOREA_20m_WGS84.xml . This supersedes the initially tested AWS mosaic, which contained severe negative-height artifacts; that initial elevation cache is not used in the final Mo‘orea render.
- Santa Barbara Channel elevation: AWS Terrain Tiles / Tilezen, zoom10 GeoTIFF tiles, from the USGS 3DEP / SRTM / GMTED2010 source mosaic. https://registry.opendata.aws/terrain-tiles/ . Attribution: United States 3DEP (formerly NED) and global GMTED2010 and SRTM terrain data courtesy of the U.S. Geological Survey. https://github.com/tilezen/joerd/blob/master/docs/attribution.md . Exact tiles and SHA256 hashes recorded in `provenance.json`.

## What Is Preserved

The untextured `reference.png`, first textured `pencil.png`, and revised `pencil-v2.png` use the same coastline geometry, projected DEM, extent, scale, and north direction. Coastlines are not simplified, offset, or redrawn. Actual terrain supplies hillshade; the first version also draws DEM contours. Only the rendering differs. No image-generation model redraws geography. The renderer asserts that geometry and elevation hashes are unchanged after styling.

Version2 replaces the contour-overlay finish with layered pigment, exposed paper grain, and irregular pencil strokes that follow DEM aspect and hillshade. Stroke paths are clipped to the unchanged source land polygons. `pencil-pigment-material.png` is a generated non-geographic pigment swatch, informed by the existing field-experiment and field-kit pencil illustrations (output6562190f-7ea9-4df5-b7e7-5d5aa9ff4515). Only its high-pass luminance supplies surface marks; broad forms and its original colors are discarded. It cannot supply coastlines, mountains, or elevation values. A faint blue pencil halo is a cartographic water treatment, not mapped reef habitat or depth.

Mo‘orea uses UTM6S (EPSG32706),20m output cells; Santa Barbara Channel uses UTM11N (EPSG32611),100m output cells. These are rendering grids, not claims of native survey resolution. Reprojection uses bilinear interpolation. Coloring represents elevation, not measured vegetation or habitat. Marine blue is illustrative paper tint, not bathymetry or reef distribution. True-north direction is calculated from a projected meridian; scales use projected metres. Artificial straight edges introduced by regional polygon clipping are not outlined as coastlines.

The source coastline and elevation products have different dates and resolutions. Some DEM cells inside the shoreline polygons are below sea level; counts and raw ranges are retained in the provenance files rather than silently replacing values. Source geography is preserved, not certified as exact contemporary ground truth. No private field coordinates or sampling-site markers are included.

## Rebuild

Run `Rscript scripts/render-geographic-pencil-maps.R` from the website repository. Requires R with sf,terra,jsonlite,digest,ggplot2,png and the installed map-pipeline helper; `7zz` extracts the Shom distribution. Retain the pigment swatch beside this note. Source downloads are cached under `/tmp`, and clipped projected DEMs are retained here. Existing cached rasters are reused. To change extent/resolution, use a new cache filename or explicitly regenerate the relevant raster; changing only the configuration does not invalidate existing files automatically.

## Review

V2 review November27: pigment material and several stroke passes tested. Final V2 retains terrain shading beneath finer, irregular slope-oriented strokes, without the first version's contour overlay. Both1200px inspection images and390px phone previews inspected. PNG dimensions match the source reference; source coastline/DEM file hashes verified against provenance; before/after-styling geometry/elevation assertions passed; zero missing land elevations. No src/public changes, website integration or push.

Verified November 27, 2026: renderer completed for both regions. Mo‘orea contains507 retained source coastline vertices; Channel contains2982. Geometry and masked-elevation hashes passed exact before/after-styling equality checks. Both land masks have zero missing elevation cells. Reference and pencil PNG dimensions match:1800×1509 and1800×1201 respectively. Pixel checks passed nonblank/texture-difference tests. Inspected full render iterations and390px-wide previews; enlarged scale/north labels for phone readability and moved Channel north arrow into open water. No website build run for these standalone assets; no website source files changed in this map-only task.

Inspect `reference.png` beside `pencil.png`. The former is a plain elevation/hillshade rendering; the latter adds fine grain, hatching, and elevation-derived contour lines. Geography must remain identical between them. Both earlier generative place studies and the flat Natural Earth locators remain rejected; neither should be substituted for these source-based previews.
