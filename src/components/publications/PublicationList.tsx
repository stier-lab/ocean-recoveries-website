import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Publication } from '@data/publications';

interface PublicationWithImage extends Publication {
  image?: string;
}

interface Props {
  publications: PublicationWithImage[];
  themes: string[];
}

const ITEMS_PER_PAGE = 20;

// Debounce hook for search
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export default function PublicationList({ publications, themes }: Props) {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'citations'>('year-desc');
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isScrolled, setIsScrolled] = useState(false);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Debounce search for performance
  const debouncedSearch = useDebounce(searchQuery, 200);

  // Track scroll for sticky bar shadow
  useEffect(() => {
    const handleScroll = () => {
      if (filterBarRef.current) {
        const rect = filterBarRef.current.getBoundingClientRect();
        setIsScrolled(rect.top <= 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Count publications per theme
  const themeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    themes.forEach(theme => {
      counts[theme] = publications.filter(pub => pub.themes.includes(theme)).length;
    });
    return counts;
  }, [publications, themes]);

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

    // Filter by search query (use debounced value for performance)
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase();
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
      if (sortBy === 'year-asc') return a.year - b.year;
      // Sort by citations (highest first)
      return (b.citationCount || 0) - (a.citationCount || 0);
    });

    return result;
  }, [publications, selectedThemes, debouncedSearch, sortBy, openAccessOnly]);

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

  const hasFilters = selectedThemes.length > 0 || debouncedSearch || openAccessOnly;

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

  // Calculate active filter count
  const activeFilterCount = selectedThemes.length + (openAccessOnly ? 1 : 0) + (searchQuery ? 1 : 0);

  return (
    <div>
      {/* Filter Bar */}
      <div
        ref={filterBarRef}
        className={`sticky top-16 md:top-20 z-40 -mx-4 px-4 py-4 bg-surface/95 backdrop-blur-sm border-b border-line mb-8 transition-shadow duration-200 ${
          isScrolled ? 'shadow-lg shadow-navy-deep/20' : ''
        }`}
      >
        {/* Search + Controls Row */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
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
              ref={searchInputRef}
              type="text"
              placeholder="Search by title, author, or journal... (press /)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-line bg-surface-card text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-line/50 text-muted hover:text-ink transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-line bg-surface-card text-ink text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              aria-label="Sort publications"
            >
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
              <option value="citations">Most Cited</option>
            </select>

            {/* Open Access Toggle */}
            <button
              onClick={() => setOpenAccessOnly(!openAccessOnly)}
              className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 ${
                openAccessOnly
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface-card border-line text-ink hover:border-accent hover:text-accent'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Open Access</span>
            </button>
          </div>
        </div>

        {/* Theme chips with counts */}
        <div className="flex flex-wrap gap-2 items-center">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => toggleTheme(theme)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedThemes.includes(theme)
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-surface-card border border-line text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {theme}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedThemes.includes(theme)
                  ? 'bg-white/20'
                  : 'bg-line/50'
              }`}>
                {themeCounts[theme]}
              </span>
            </button>
          ))}

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="ml-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-accent-warm/10 text-accent-warm hover:bg-accent-warm/20 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''}
            </button>
          )}
        </div>
      </div>

      {/* Results count - improved visual hierarchy */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ink">{filteredPubs.length}</span>
            <span className="text-sm text-muted">
              publication{filteredPubs.length !== 1 ? 's' : ''}
              {hasFilters && (
                <span className="text-muted-2"> of {publications.length}</span>
              )}
            </span>
          </div>
          {visiblePubs.length < filteredPubs.length && (
            <span className="text-xs px-2 py-1 rounded-full bg-line/50 text-muted">
              showing {visiblePubs.length}
            </span>
          )}
        </div>
        {hasMore && (
          <button
            onClick={showAll}
            className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
          >
            Show all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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
              className={`group bg-surface-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                pub.featured
                  ? 'border-accent-warm/30 ring-1 ring-accent-warm/10'
                  : 'border-line hover:border-accent/30'
              } ${pub.image ? 'flex flex-col md:flex-row' : ''}`}
            >
              {/* Image (if available) */}
              {pub.image && (
                <div className="md:w-52 md:min-w-[13rem] flex-shrink-0 relative">
                  <div className="relative h-44 md:h-full w-full overflow-hidden">
                    <img
                      src={pub.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent md:bg-gradient-to-r" />
                  </div>
                  {/* Year overlay on image */}
                  <div className="absolute bottom-3 left-3 md:bottom-auto md:top-3 md:left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-navy-deep/80 backdrop-blur-sm text-white text-sm font-bold">
                      {pub.year}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Top row: Year (if no image) + Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {!pub.image && (
                    <span className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-sm font-bold">
                      {pub.year}
                    </span>
                  )}
                  {pub.featured && (
                    <span className="px-2.5 py-1 rounded-lg bg-accent-warm/15 text-accent-warm text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  )}
                  {pub.openAccess && (
                    <span className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      Open Access
                    </span>
                  )}
                  {pub.dataAvailable && (
                    <span className="px-2.5 py-1 rounded-lg bg-accent-2/10 text-accent-2 text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      Data
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-ink mb-2 leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p
                  className="text-sm text-muted mb-1.5 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
                />

                {/* Journal + Citations */}
                <div className="flex items-center gap-3 text-sm text-muted-2 mb-auto">
                  <span><em>{pub.journal}</em></span>
                  {pub.citationCount !== undefined && pub.citationCount > 0 && (
                    <span className="flex items-center gap-1 text-xs text-muted px-2 py-0.5 rounded-full bg-line/30" title="Citation count">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {pub.citationCount.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Bottom section: Abstract toggle + Links */}
                <div className="mt-4 pt-4 border-t border-line">
                  {/* Expandable abstract */}
                  {pub.abstract && (
                    <div className="mb-3">
                      <button
                        onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                        className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${expandedId === pub.id ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {expandedId === pub.id ? 'Hide abstract' : 'Read abstract'}
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
                            <p className="text-sm text-muted leading-relaxed mt-3 p-3 rounded-lg bg-surface/50">
                              {pub.abstract}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Links - improved button styling */}
                  <div className="flex flex-wrap gap-2">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Article
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-line/50 text-ink text-sm font-semibold hover:bg-accent hover:text-white transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-line/50 text-ink text-sm font-semibold hover:bg-accent hover:text-white transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Empty state - improved with suggestions */}
        {filteredPubs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">No publications found</h3>
              <p className="text-muted mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}". Try different keywords or check spelling.`
                  : 'No publications match your current filters.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  Clear All Filters
                </button>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-5 py-2.5 rounded-xl border border-line text-ink font-semibold hover:border-accent hover:text-accent transition-colors"
                  >
                    Clear Search Only
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Load more button - improved */}
        {hasMore && filteredPubs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-10"
          >
            <button
              onClick={loadMore}
              className="group px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:shadow-lg inline-flex items-center gap-2"
            >
              Load More Publications
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-sm">
                {filteredPubs.length - visibleCount}
              </span>
            </button>
            <p className="text-xs text-muted mt-3">
              or{' '}
              <button onClick={showAll} className="text-accent hover:underline">
                show all {filteredPubs.length} at once
              </button>
            </p>
          </motion.div>
        )}
      </div>

      {/* Back to top button - appears after scrolling */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all z-50"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
