/**
 * Maps publications to news post images via DOI matching
 */
import type { Publication } from '@data/publications';
import type { BlogPost } from '@data/posts';

export interface PublicationWithImage extends Publication {
  image?: string;
}

/**
 * Extract the DOI path from a full DOI URL (e.g., "https://doi.org/10.1007/s00338-025-02647-4" -> "10.1007/s00338-025-02647-4")
 * Also handles malformed URLs like "https://doi.org/https://doi.org/10.xxx"
 */
function extractDoi(doiUrlOrDoi: string | undefined): string | undefined {
  if (!doiUrlOrDoi) return undefined;

  // If it's already just a DOI (starts with 10.), return as-is
  if (doiUrlOrDoi.startsWith('10.')) {
    return doiUrlOrDoi.toLowerCase();
  }

  // Find the actual DOI (starts with 10.) in the string
  const doiMatch = doiUrlOrDoi.match(/(10\.[^\s]+)/i);
  return doiMatch ? doiMatch[1].toLowerCase() : undefined;
}

/**
 * Creates a mapping from publication DOI to news post featured image
 */
export function createPublicationImageMap(posts: BlogPost[]): Map<string, string> {
  const imageMap = new Map<string, string>();

  for (const post of posts) {
    if (post.doiUrl && post.featuredImage) {
      const doi = extractDoi(post.doiUrl);
      if (doi) {
        imageMap.set(doi, post.featuredImage);
      }
    }
  }

  return imageMap;
}

/**
 * Enriches publications with images from matching news posts
 */
export function enrichPublicationsWithImages(
  publications: Publication[],
  posts: BlogPost[]
): PublicationWithImage[] {
  const imageMap = createPublicationImageMap(posts);

  return publications.map(pub => {
    const pubDoi = extractDoi(pub.doi);
    const image = pubDoi ? imageMap.get(pubDoi) : undefined;

    return {
      ...pub,
      image,
    };
  });
}

/**
 * Get count of publications that have matching images
 */
export function countPublicationsWithImages(
  publications: Publication[],
  posts: BlogPost[]
): { total: number; withImages: number } {
  const enriched = enrichPublicationsWithImages(publications, posts);
  return {
    total: publications.length,
    withImages: enriched.filter(p => p.image).length,
  };
}
