import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Publication } from '@data/publications';

interface Props {
  publications: Publication[];
  themes: string[];
}

const ITEMS_PER_PAGE = 20;

export default function PublicationList({ publications, themes }: Props) {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc'>('year-desc');
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter and sort publications
  const filteredPubs = useMemo(() => {
    let result = [...publications];

    // Filter by themes
    if (selectedThemes.length > 0) {
      result = result.filter((pub) =>
        selectedThemes.some((theme) => pub.themes.includes(theme))
      );
    }

    // Filter by open access
    if (openAccessOnly) {
      result = result.filter((pub) => pub.openAccess);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.toLowerCase().includes(query) ||
          pub.journal.toLowerCase().includes(query)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      return a.year - b.year;
    });

    return result;
  }, [publications, selectedThemes, searchQuery, sortBy, openAccessOnly]);

  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const clearFilters = () => {
    setSelectedThemes([]);
    setSearchQuery('');
    setOpenAccessOnly(false);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const hasFilters = selectedThemes.length > 0 || searchQuery || openAccessOnly;

  // Paginated publications
  const visiblePubs = useMemo(() => {
    return filteredPubs.slice(0, visibleCount);
  }, [filteredPubs, visibleCount]);

  const hasMore = visibleCount < filteredPubs.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredPubs.length));
  };

  const showAll = () => {
    setVisibleCount(filteredPubs.length);
  };

  // Highlight author name (Stier)
  const highlightAuthor = (authors: string) => {
    return authors.replace(
      /(Stier\s*AC?)/gi,
      '<strong class="text-ink">$1</strong>'
    );
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="sticky top-16 md:top-20 z-40 -mx-4 px-4 py-4 bg-surface/95 backdrop-blur-sm border-b border-line mb-8">
        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line bg-surface-card text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2.5 rounded-xl border border-line bg-surface-card text-ink text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
            </select>

            {/* Open Access Toggle */}
            <button
              onClick={() => setOpenAccessOnly(!openAccessOnly)}
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                openAccessOnly
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface-card border-line text-ink'
              }`}
            >
              Open Access
            </button>
          </div>
        </div>

        {/* Theme chips */}
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => toggleTheme(theme)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedThemes.includes(theme)
                  ? 'bg-accent text-white'
                  : 'bg-surface-card border border-line text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {theme}
            </button>
          ))}

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-accent hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted">
          Showing <strong className="text-ink">{visiblePubs.length}</strong> of{' '}
          {filteredPubs.length} publications
          {hasFilters && ` (${publications.length} total)`}
        </p>
        {hasMore && (
          <button
            onClick={showAll}
            className="text-sm font-medium text-accent hover:underline"
          >
            Show all {filteredPubs.length}
          </button>
        )}
      </div>

      {/* Publications list */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {visiblePubs.map((pub) => (
            <motion.article
              key={pub.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-card border border-line rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {pub.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase">
                    Featured
                  </span>
                )}
                {pub.openAccess && (
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase">
                    Open Access
                  </span>
                )}
                {pub.dataAvailable && (
                  <span className="px-2 py-0.5 rounded-full bg-accent-2/10 text-accent-2 text-xs font-bold uppercase">
                    Data
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-ink mb-2 leading-tight">
                {pub.title}
              </h3>

              {/* Authors */}
              <p
                className="text-sm text-muted mb-2"
                dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
              />

              {/* Journal & Year */}
              <p className="text-sm text-muted-2 mb-3">
                <em>{pub.journal}</em> ({pub.year})
              </p>

              {/* Themes */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {pub.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-line/50 text-muted"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* Expandable abstract */}
              {pub.abstract && (
                <div>
                  <button
                    onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                    className="text-sm font-semibold text-accent hover:underline mb-2"
                  >
                    {expandedId === pub.id ? 'Hide abstract' : 'Show abstract'}
                  </button>

                  <AnimatePresence>
                    {expandedId === pub.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted leading-relaxed py-2 border-t border-line">
                          {pub.abstract}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-line">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    title="View Article"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Article
                  </a>
                )}
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    title="Download PDF"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v6m0 0l-2-2m2 2l2-2" />
                    </svg>
                    PDF
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    title="View Code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Empty state */}
        {filteredPubs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted text-lg mb-4">
              No publications match your filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load more button */}
        {hasMore && filteredPubs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-8"
          >
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Load More ({filteredPubs.length - visibleCount} remaining)
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
