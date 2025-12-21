const { posts } = require("../src/data/posts.ts");
const { publications } = require("../src/data/publications.ts");

function extractDoi(doiUrlOrDoi) {
  if (!doiUrlOrDoi) return undefined;
  if (doiUrlOrDoi.startsWith("10.")) {
    return doiUrlOrDoi.toLowerCase();
  }
  const doiMatch = doiUrlOrDoi.match(/(10\.[^\s]+)/i);
  return doiMatch ? doiMatch[1].toLowerCase() : undefined;
}

// Build image map
const imageMap = new Map();
for (const post of posts) {
  if (post.doiUrl && post.featuredImage) {
    const doi = extractDoi(post.doiUrl);
    if (doi) {
      imageMap.set(doi, post.featuredImage);
    }
  }
}

// Test specific publications
const testDois = [
  "10.1038/s41598-022-13671-7",
  "10.1111/gcb.15904",
  "10.1007/s00338-021-02132-8"
];

console.log("Image map entries:", imageMap.size);
console.log("");
for (const doi of testDois) {
  const image = imageMap.get(doi.toLowerCase());
  console.log(doi, "->", image);
}

// Check first 10 publications with their expected images
console.log("\nFirst 10 publications:");
for (let i = 0; i < 10 && i < publications.length; i++) {
  const pub = publications[i];
  const pubDoi = extractDoi(pub.doi);
  const image = pubDoi ? imageMap.get(pubDoi) : undefined;
  console.log(`${pub.id}. ${pub.doi} -> ${image || "NO IMAGE"}`);
}

// Count how many have images
let withImages = 0;
for (const pub of publications) {
  const pubDoi = extractDoi(pub.doi);
  if (pubDoi && imageMap.get(pubDoi)) {
    withImages++;
  }
}
console.log(`\n${withImages} of ${publications.length} publications have matching images`);
