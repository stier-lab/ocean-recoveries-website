import { useState } from 'react';

interface StudySite {
  id: string;
  name: string;
  location: string;
  ecosystem: string;
  image: string;
  failureMode: string;
  signals: string[];
  researchLink: string;
  color: string;
  description: string;
}

const studySites: StudySite[] = [
  {
    id: 'moorea',
    name: "Mo'orea",
    location: 'French Polynesia',
    ecosystem: 'Coral Reefs',
    image: '/images/cauliflower-coral-damselfish-reef.jpeg',
    failureMode: 'Slow, chronic decline',
    signals: ['Bleaching & heat stress', 'Crown-of-thorns predation', 'Algal overgrowth'],
    researchLink: '/research/coral-reefs',
    color: '#f97316',
    description: 'Coral fate hinges on wound healing at the colony level. We study how individual capacities aggregate into population recovery.',
  },
  {
    id: 'santa-barbara',
    name: 'Santa Barbara',
    location: 'California',
    ecosystem: 'Kelp Forests',
    image: '/images/giant-kelp-sunlight-underwater.jpeg',
    failureMode: 'Fast, nonlinear collapse',
    signals: ['Urchin barrens', 'Predator loss', 'Detrital starvation'],
    researchLink: '/research/kelp-forests',
    color: '#38bdf8',
    description: 'Consumer feedbacks can flip forests to barrens in months. We study what governs the tipping point—and what breaks the lock.',
  },
];

export default function StudySitesMap() {
  const [selectedSite, setSelectedSite] = useState<StudySite>(studySites[0]);

  const handleSiteSelect = (site: StudySite) => {
    setSelectedSite(site);
  };

  return (
    <>
      <style>{`
        .sites-container {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.15);
          border-radius: 1rem;
          overflow: hidden;
        }

        /* Site selector tabs */
        .site-tabs {
          display: flex;
          border-bottom: 1px solid rgba(56, 189, 248, 0.1);
        }

        .site-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .site-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .site-tab:hover {
          background: rgba(56, 189, 248, 0.05);
        }

        .site-tab.active {
          background: rgba(56, 189, 248, 0.08);
        }

        .site-tab.active::after {
          background: var(--tab-color);
        }

        .site-tab.active .tab-dot {
          box-shadow: 0 0 12px var(--tab-color);
        }

        .tab-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--tab-color);
          transition: box-shadow 0.3s ease;
        }

        .tab-label {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .tab-ecosystem {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        .tab-location {
          font-size: 0.75rem;
          color: rgba(241, 245, 249, 0.5);
        }

        /* Content area */
        .site-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        @media (min-width: 768px) {
          .site-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Image panel */
        .site-image {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .site-image {
            aspect-ratio: auto;
            min-height: 320px;
          }
        }

        .site-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .sites-container:hover .site-image img {
          transform: scale(1.03);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.3) 0%,
            rgba(15, 23, 42, 0.1) 50%,
            rgba(15, 23, 42, 0.5) 100%
          );
        }

        .location-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.875rem;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          color: #f1f5f9;
          font-size: 0.8125rem;
          font-weight: 600;
        }

        .location-badge svg {
          width: 14px;
          height: 14px;
          color: var(--site-color);
        }

        /* Info panel */
        .site-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .site-info {
            padding: 2rem;
          }
        }

        .info-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ecosystem-label {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--site-color);
        }

        .ecosystem-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--site-color);
        }

        .site-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .site-title {
            font-size: 1.75rem;
          }
        }

        .site-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(241, 245, 249, 0.7);
          margin: 0;
        }

        /* Failure mode box */
        .failure-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 1rem;
        }

        .failure-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .failure-icon {
          width: 20px;
          height: 20px;
          color: var(--site-color);
        }

        .failure-label {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(241, 245, 249, 0.5);
        }

        .failure-mode {
          font-size: 1rem;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 0.75rem;
        }

        .failure-signals {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .signal-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.625rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.375rem;
          font-size: 0.75rem;
          color: rgba(241, 245, 249, 0.8);
        }

        .signal-tag svg {
          width: 12px;
          height: 12px;
          color: var(--site-color);
        }

        /* CTA link */
        .site-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--site-color);
          border-radius: 0.5rem;
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .site-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .site-cta svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .site-cta:hover svg {
          transform: translateX(3px);
        }

        /* Instruction text */
        .map-instruction {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(56, 189, 248, 0.1);
          font-size: 0.75rem;
          color: rgba(241, 245, 249, 0.4);
        }

        .map-instruction svg {
          width: 14px;
          height: 14px;
        }
      `}</style>

      <div className="sites-container">
        {/* Tab selector */}
        <div className="site-tabs" role="tablist">
          {studySites.map((site) => (
            <button
              key={site.id}
              role="tab"
              aria-selected={selectedSite.id === site.id}
              className={`site-tab ${selectedSite.id === site.id ? 'active' : ''}`}
              style={{ '--tab-color': site.color } as React.CSSProperties}
              onClick={() => handleSiteSelect(site)}
            >
              <span className="tab-dot" />
              <span className="tab-label">
                <span className="tab-ecosystem">{site.ecosystem}</span>
                <span className="tab-location">{site.name}, {site.location}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="site-content">
          {/* Image */}
          <div className="site-image">
            <img
              src={selectedSite.image}
              alt={`${selectedSite.ecosystem} in ${selectedSite.name}`}
            />
            <div className="image-overlay" />
            <div
              className="location-badge"
              style={{ '--site-color': selectedSite.color } as React.CSSProperties}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {selectedSite.name}, {selectedSite.location}
            </div>
          </div>

          {/* Info panel */}
          <div
            className="site-info"
            style={{ '--site-color': selectedSite.color } as React.CSSProperties}
          >
            <div className="info-header">
              <span className="ecosystem-label">
                <span className="ecosystem-label-dot" />
                {selectedSite.ecosystem}
              </span>
              <h3 className="site-title">{selectedSite.name} Research</h3>
            </div>

            <p className="site-desc">{selectedSite.description}</p>

            {/* Failure mode box */}
            <div className="failure-box">
              <div className="failure-header">
                <svg className="failure-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="failure-label">Failure Mode</span>
              </div>
              <p className="failure-mode">{selectedSite.failureMode}</p>
              <div className="failure-signals">
                {selectedSite.signals.map((signal, i) => (
                  <span key={i} className="signal-tag">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <a href={selectedSite.researchLink} className="site-cta">
              Explore {selectedSite.ecosystem.toLowerCase()} research
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Instruction */}
        <div className="map-instruction">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Select a system above to compare failure modes
        </div>
      </div>
    </>
  );
}
