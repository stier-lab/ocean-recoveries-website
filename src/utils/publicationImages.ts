/**
 * Maps publications to news post images and slugs via DOI matching
 */
import type { Publication } from '@data/publications';
import type { BlogPost } from '@data/posts';

export interface PublicationWithImage extends Publication {
  image?: string;
  newsSlug?: string;
  newsTitle?: string;
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

interface PostMapping {
  image?: string;
  slug: string;
  title: string;
}

/**
 * Creates a mapping from publication DOI to news post data (image, slug, title)
 */
export function createPublicationPostMap(posts: BlogPost[]): Map<string, PostMapping> {
  const postMap = new Map<string, PostMapping>();

  for (const post of posts) {
    if (post.doiUrl) {
      const doi = extractDoi(post.doiUrl);
      if (doi) {
        postMap.set(doi, {
          image: post.featuredImage,
          slug: post.slug,
          title: post.title,
        });
      }
    }
  }

  return postMap;
}

/**
 * Creates a mapping from publication DOI to news post featured image
 * @deprecated Use createPublicationPostMap instead
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
 * Enriches publications with images and news links from matching news posts
 */
export function enrichPublicationsWithImages(
  publications: Publication[],
  posts: BlogPost[]
): PublicationWithImage[] {
  const postMap = createPublicationPostMap(posts);

  return publications.map(pub => {
    const pubDoi = extractDoi(pub.doi);
    const postData = pubDoi ? postMap.get(pubDoi) : undefined;

    return {
      ...pub,
      image: postData?.image,
      newsSlug: postData?.slug,
      newsTitle: postData?.title,
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
