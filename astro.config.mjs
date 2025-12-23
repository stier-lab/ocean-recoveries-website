import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.oceanrecoveries.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      // Include all important pages
      filter: (page) => !page.includes('/api/'),
      // Set change frequency and priority
      changefreq: 'weekly',
      priority: 0.7,
      // Custom serialization for specific pages
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://www.oceanrecoveries.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Research pages are important
        if (item.url.includes('/research/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Publications page
        if (item.url.includes('/publications')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // People page
        if (item.url.includes('/people')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // News articles
        if (item.url.includes('/news/')) {
          item.priority = 0.6;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});
