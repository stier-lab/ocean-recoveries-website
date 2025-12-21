const fs = require("fs");
const path = require("path");

const analyzedDir = "publications/analyzed";
const imagesDir = "public/images";

// Load all publications
const publications = [];
fs.readdirSync(analyzedDir).filter(f => f.endsWith("-analysis.json")).forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(analyzedDir, f)));
  publications.push({
    id: parseInt(data.publicationId),
    title: data.title,
    authors: data.authors,
    year: data.year,
    journal: data.journal,
    doi: data.doi,
    species: data.analysis?.species || "",
    location: data.analysis?.location || "",
    themes: data.analysis?.themes || [],
    newsHeadline: data.analysis?.newsHeadline || "",
    featuredImage: data.featuredImage || null
  });
});

// Sort by ID
publications.sort((a, b) => a.id - b.id);

// Get all images
const allImages = fs.readdirSync(imagesDir).filter(f =>
  f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".JPG") ||
  f.endsWith(".png") || f.endsWith(".gif") || f.endsWith(".tif")
);

// Find used and unused images
const usedImages = new Set(publications.map(p => p.featuredImage ? path.basename(p.featuredImage) : null).filter(Boolean));
const unusedImages = allImages.filter(img => !usedImages.has(img));

// Create comprehensive database
const database = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalPublications: publications.length,
    totalImages: allImages.length,
    usedImages: usedImages.size,
    unusedImages: unusedImages.length
  },
  publications: publications.map(p => ({
    id: p.id,
    title: p.title,
    authors: p.authors,
    year: p.year,
    journal: p.journal,
    doi: p.doi,
    species: p.species,
    location: p.location,
    themes: p.themes,
    newsHeadline: p.newsHeadline,
    featuredImage: p.featuredImage,
    imageFile: p.featuredImage ? path.basename(p.featuredImage) : null
  })),
  imageAssignments: publications.map(p => ({
    publicationId: p.id,
    title: p.title.substring(0, 60),
    image: p.featuredImage ? path.basename(p.featuredImage) : "NONE"
  })),
  unusedImages: unusedImages.sort()
};

// Make sure data directory exists
if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

// Write JSON database
fs.writeFileSync("data/publication-image-database.json", JSON.stringify(database, null, 2));
console.log("Created: data/publication-image-database.json");

// Create CSV for easy viewing
let csv = "ID,Title,Year,Journal,Species,Image\n";
publications.forEach(p => {
  const species = Array.isArray(p.species) ? p.species.join("; ") : p.species;
  const title = p.title.replace(/"/g, '""');
  const speciesClean = (species || "").replace(/"/g, '""');
  const image = p.featuredImage ? path.basename(p.featuredImage) : "";
  csv += `${p.id},"${title}",${p.year},"${p.journal}","${speciesClean}","${image}"\n`;
});
fs.writeFileSync("data/publication-image-database.csv", csv);
console.log("Created: data/publication-image-database.csv");

// Print summary
console.log("\n" + "=".repeat(60));
console.log("DATABASE SUMMARY");
console.log("=".repeat(60));
console.log("Total publications: " + publications.length);
console.log("Total images: " + allImages.length);
console.log("Used images: " + usedImages.size);
console.log("Unused images: " + unusedImages.length);
console.log("\nUnused images:");
unusedImages.slice(0, 20).forEach(img => console.log("  - " + img));
if (unusedImages.length > 20) {
  console.log("  ... and " + (unusedImages.length - 20) + " more");
}
