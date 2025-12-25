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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSiteSelect = (site: StudySite) => {
    if (site.id !== selectedSite.id) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedSite(site);
        setIsAnimating(false);
      }, 150);
    }
  };

  return (
    <div
      style={{
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(56, 189, 248, 0.15)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Site Selector Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1.5rem',
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
        }}
      >
        {studySites.map((site) => (
          <button
            key={site.id}
            onClick={() => handleSiteSelect(site)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              background: selectedSite.id === site.id
                ? `rgba(${site.id === 'moorea' ? '249, 115, 22' : '56, 189, 248'}, 0.15)`
                : 'rgba(0, 0, 0, 0.2)',
              border: selectedSite.id === site.id
                ? `1px solid ${site.color}`
                : '1px solid transparent',
              borderRadius: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <span
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: site.color,
                boxShadow: selectedSite.id === site.id ? `0 0 12px ${site.color}` : 'none',
              }}
            />
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#f1f5f9',
              }}
            >
              {site.ecosystem}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(241, 245, 249, 0.5)',
              }}
            >
              {site.name}
            </span>
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 0,
        }}
      >
        {/* Image */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 10',
            overflow: 'hidden',
            minHeight: '280px',
          }}
        >
          <img
            src={selectedSite.image}
            alt={`${selectedSite.ecosystem} in ${selectedSite.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease, opacity 0.3s ease',
              opacity: isAnimating ? 0.7 : 1,
              transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.5) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              background: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '2rem',
              color: '#f1f5f9',
              fontSize: '0.8125rem',
              fontWeight: 600,
            }}
          >
            <svg
              fill="none"
              stroke={selectedSite.color}
              viewBox="0 0 24 24"
              style={{ width: '14px', height: '14px' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {selectedSite.name}, {selectedSite.location}
          </div>
        </div>

        {/* Info panel */}
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: selectedSite.color,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: selectedSite.color,
                }}
              />
              {selectedSite.ecosystem}
            </span>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#f1f5f9',
                margin: 0,
                letterSpacing: '-0.02em',
                transition: 'opacity 0.15s ease',
                opacity: isAnimating ? 0.5 : 1,
              }}
            >
              {selectedSite.name} Research
            </h3>
          </div>

          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(241, 245, 249, 0.7)',
              margin: 0,
              transition: 'opacity 0.15s ease',
              opacity: isAnimating ? 0.5 : 1,
            }}
          >
            {selectedSite.description}
          </p>

          {/* Failure mode box */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.75rem',
              padding: '1rem',
              transition: 'opacity 0.15s ease',
              opacity: isAnimating ? 0.5 : 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
              }}
            >
              <svg
                fill="none"
                stroke={selectedSite.color}
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(241, 245, 249, 0.5)',
                }}
              >
                Failure Mode
              </span>
            </div>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#f1f5f9',
                margin: '0 0 0.75rem',
              }}
            >
              {selectedSite.failureMode}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedSite.signals.map((signal, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.625rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    color: 'rgba(241, 245, 249, 0.8)',
                  }}
                >
                  <svg
                    fill="none"
                    stroke={selectedSite.color}
                    viewBox="0 0 24 24"
                    style={{ width: '12px', height: '12px' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <a
            href={selectedSite.researchLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              background: selectedSite.color,
              borderRadius: '0.5rem',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              alignSelf: 'flex-start',
            }}
          >
            Explore {selectedSite.ecosystem.toLowerCase()} research
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: '16px', height: '16px' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
