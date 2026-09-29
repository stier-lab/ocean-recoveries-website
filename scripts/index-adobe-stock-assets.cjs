#!/usr/bin/env node

const crypto = require("crypto");
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const assetsDir = path.join(repoRoot, "assets");
const dataDir = path.join(repoRoot, "data");
const jsonPath = path.join(dataDir, "adobe-stock-assets.json");
const csvPath = path.join(dataDir, "adobe-stock-assets.csv");

const imageExt = /\.(jpe?g|png|webp)$/i;
const vectorExt = /\.(ai|eps|svg)$/i;
const videoExt = /\.(mov|m4v|mp4)$/i;
const mediaExt = /\.(jpe?g|png|webp|ai|eps|svg|mov|m4v|mp4)$/i;

const defaultExternalDirs = [
  path.join(process.env.HOME || "", "Downloads"),
  path.join(process.env.HOME || "", "Desktop", "palmata-rse-assets"),
].filter(Boolean);

const externalDirs = (process.env.ADOBE_STOCK_EXTERNAL_DIRS || "")
  .split(path.delimiter)
  .map((dir) => dir.trim())
  .filter(Boolean);

const searchDirs = (externalDirs.length ? externalDirs : defaultExternalDirs)
  .map((dir) => path.resolve(dir))
  .filter((dir) => fs.existsSync(dir));

function listFiles(dir, matcher, maxDepth = 1, depth = 0) {
  if (!fs.existsSync(dir) || depth > maxDepth) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath, matcher, maxDepth, depth + 1));
    } else if (entry.isFile() && matcher(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function exif(files) {
  if (files.length === 0) return [];

  const args = [
    "-json",
    "-fast",
    "-FileName",
    "-Directory",
    "-FileType",
    "-ImageWidth",
    "-ImageHeight",
    "-Duration",
    "-Title",
    "-Credit",
    "-Source",
    "-Subject",
    "-Keywords",
    "-Creator",
    "-Copyright",
    "-Rights",
    ...files,
  ];

  return JSON.parse(execFileSync("exiftool", args, { maxBuffer: 50 * 1024 * 1024 }));
}

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function arrayValue(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return String(value)
    .split(/,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function adobeStockId(item) {
  if (item.Source && /^\d+$/.test(String(item.Source))) return String(item.Source);

  const match = String(item.FileName || "").match(/^AdobeStock_(\d+)/i);
  if (match) return match[1];

  const renamedMatch = String(item.FileName || "").match(/[-_](\d{6,})(?=\.[^.]+$)/);
  return renamedMatch ? renamedMatch[1] : null;
}

function isAdobeStockLike(item) {
  return Boolean(
    adobeStockId(item) ||
      /stock\.adobe/i.test(String(item.Credit || "")) ||
      /^AdobeStock_/i.test(String(item.FileName || "")),
  );
}

function categoryFor(item) {
  const text = [
    item.FileName,
    item.Title,
    item.Credit,
    ...arrayValue(item.Subject),
    ...arrayValue(item.Keywords),
  ]
    .join(" ")
    .toLowerCase();

  const checks = [
    ["coral restoration", /(nursery|restoration|farmed|fragment|aquaculture|mariculture)/],
    ["coral reef", /(coral reef|reef|acropora|elkhorn|pocillopora|stylophora|montipora|coral)/],
    ["reef fish", /(fish|grunts|damselfish|chromis|grouper|parrotfish|wrasse|sheephead|garibaldi|lionfish|herring|forage)/],
    ["shark", /shark/],
    ["kelp forest", /kelp|macrocystis/],
    ["invertebrate", /(crab|lobster|urchin|starfish|seastar|barnacle|shrimp)/],
    ["fieldwork", /(diver|diving|scuba|snorkel|researcher|team)/],
    ["coast", /(coast|shore|beach|island|lagoon|harbor|marina)/],
    ["climate", /(hurricane|bleach|bleached|wind farm|climate)/],
  ];

  const match = checks.find(([, regex]) => regex.test(text));
  return match ? match[0] : "general";
}

function cleanRelative(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

function displayPath(filePath) {
  const home = process.env.HOME;
  if (home && filePath.startsWith(`${home}${path.sep}`)) {
    return `~/${path.relative(home, filePath).split(path.sep).join("/")}`;
  }

  return filePath.split(path.sep).join("/");
}

function makeAssetRecord(item) {
  const fullPath = path.join(item.Directory, item.FileName);
  const keywords = arrayValue(item.Keywords || item.Subject);

  return {
    stockId: adobeStockId(item),
    filename: item.FileName,
    path: cleanRelative(fullPath),
    mediaType: mediaTypeFor(item.FileName),
    fileType: item.FileType || null,
    width: item.ImageWidth || null,
    height: item.ImageHeight || null,
    duration: item.Duration || null,
    title: item.Title || null,
    credit: item.Credit || null,
    creator: item.Creator || null,
    copyright: item.Copyright || null,
    rights: item.Rights || null,
    category: categoryFor(item),
    keywords,
    sha256: sha256(fullPath),
  };
}

function makeExternalRecord(item, representedBy) {
  const fullPath = path.join(item.Directory, item.FileName);
  const isRepresented = representedBy.length > 0;

  return {
    stockId: adobeStockId(item),
    filename: item.FileName,
    path: displayPath(fullPath),
    mediaType: mediaTypeFor(item.FileName),
    fileType: item.FileType || null,
    width: item.ImageWidth || null,
    height: item.ImageHeight || null,
    duration: item.Duration || null,
    title: item.Title || null,
    credit: item.Credit || null,
    category: categoryFor(item),
    representedBy,
    notCopiedReason: isRepresented
      ? "Already represented in repo assets."
      : "External Adobe Stock media found outside repo; videos are catalogued but not copied into the website assets by default.",
    sha256: sha256(fullPath),
  };
}

function mediaTypeFor(fileName) {
  if (imageExt.test(fileName)) return "photo";
  if (vectorExt.test(fileName)) return "vector";
  if (videoExt.test(fileName)) return "video";
  return "media";
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const string = Array.isArray(value) ? value.join("; ") : String(value);
  return `"${string.replace(/"/g, '""')}"`;
}

function duplicateGroups(records, key) {
  const groups = new Map();
  for (const record of records) {
    const value = record[key];
    if (!value) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(record.path);
  }

  return Array.from(groups.entries())
    .filter(([, paths]) => paths.length > 1)
    .map(([value, paths]) => ({ [key]: value, paths }));
}

const assetFiles = listFiles(assetsDir, (name) => mediaExt.test(name), 0);
const assetMetadata = exif(assetFiles).filter(isAdobeStockLike);
const assets = assetMetadata.map(makeAssetRecord).sort((a, b) => {
  const idCompare = String(a.stockId || "").localeCompare(String(b.stockId || ""));
  return idCompare || a.filename.localeCompare(b.filename);
});

const byHash = new Map(assets.map((asset) => [asset.sha256, asset.path]));
const byStockId = new Map();
for (const asset of assets) {
  if (!asset.stockId) continue;
  if (!byStockId.has(asset.stockId)) byStockId.set(asset.stockId, []);
  byStockId.get(asset.stockId).push(asset.path);
}

const externalFiles = searchDirs.flatMap((dir) =>
  listFiles(dir, (name) => /^AdobeStock_/i.test(name) && mediaExt.test(name), 2),
);
const externalMetadata = exif(externalFiles).filter(isAdobeStockLike);
const externalMedia = externalMetadata
  .map((item) => {
    const fullPath = path.join(item.Directory, item.FileName);
    const hashMatch = byHash.get(sha256(fullPath));
    const stockMatches = adobeStockId(item) ? byStockId.get(adobeStockId(item)) || [] : [];
    const representedBy = hashMatch ? [hashMatch] : stockMatches;
    return makeExternalRecord(item, representedBy);
  })
  .filter((record) => record.mediaType === "video" || record.representedBy.length === 0)
  .sort((a, b) => a.filename.localeCompare(b.filename));

const externalAdobeStockMediaNotCopied = externalMedia.filter(
  (record) => record.representedBy.length === 0,
).length;

const manifest = {
  generatedAt: new Date().toISOString(),
  note: "Generated from local EXIF metadata. Adobe Stock license history still needs account sign-in for authoritative reconciliation.",
  sourceChecks: {
    assetsDir: cleanRelative(assetsDir),
    externalSearchDirs: searchDirs.map(displayPath),
    adobeStockLicenseHistory: "Blocked at Adobe sign-in in Codex in-app browser.",
  },
  summary: {
    adobeStockAssetsInRepo: assets.length,
    photosInRepo: assets.filter((asset) => asset.mediaType === "photo").length,
    vectorsInRepo: assets.filter((asset) => asset.mediaType === "vector").length,
    videosInRepo: assets.filter((asset) => asset.mediaType === "video").length,
    externalAdobeStockMediaNotCopied,
  },
  duplicateStockIds: duplicateGroups(assets, "stockId"),
  duplicateHashes: duplicateGroups(assets, "sha256"),
  assets,
  externalMedia,
};

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(jsonPath, `${JSON.stringify(manifest, null, 2)}\n`);

const rows = [
  [
    "stockId",
    "filename",
    "path",
    "mediaType",
    "category",
    "credit",
    "title",
    "width",
    "height",
    "duration",
  ],
  ...assets.map((asset) => [
    asset.stockId,
    asset.filename,
    asset.path,
    asset.mediaType,
    asset.category,
    asset.credit,
    asset.title,
    asset.width,
    asset.height,
    asset.duration,
  ]),
];

fs.writeFileSync(csvPath, `${rows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`);

console.log(`Indexed ${assets.length} Adobe Stock-like repo assets`);
console.log(`Wrote ${cleanRelative(jsonPath)}`);
console.log(`Wrote ${cleanRelative(csvPath)}`);
if (externalAdobeStockMediaNotCopied) {
  console.log(
    `Catalogued ${externalAdobeStockMediaNotCopied} external Adobe Stock media files not copied into assets`,
  );
}
