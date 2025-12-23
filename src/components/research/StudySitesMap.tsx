import { useEffect, useRef, useState } from 'react';

interface StudySite {
  id: string;
  name: string;
  location: string;
  ecosystem: string;
  coordinates: [number, number]; // [latitude, longitude]
  image: string;
  questions: string[];
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
    coordinates: [-17.5388, -149.8366], // lat, lng
    image: '/images/cauliflower-coral-damselfish-reef.jpeg',
    questions: [
      'How do coral-associated fishes and crabs benefit coral health?',
      'What role do disturbance legacies play in reef recovery?',
      'How do predator-prey interactions structure reef communities?',
    ],
    researchLink: '/research/coral-reefs',
    color: '#f97316', // orange
    description: 'Long-term coral reef research at the MCR LTER site, studying mutualist communities, disturbance recovery, and reef resilience.',
  },
  {
    id: 'santa-barbara',
    name: 'Santa Barbara Channel',
    location: 'California, USA',
    ecosystem: 'Kelp Forests',
    coordinates: [34.2439, -119.8489], // lat, lng
    image: '/images/giant-kelp-sunlight-underwater.jpeg',
    questions: [
      'How does lobster body size affect predator-prey interactions?',
      'What prevents urchins from overgrazing kelp forests?',
      'How do marine protected areas benefit adjacent fisheries?',
    ],
    researchLink: '/research/kelp-forests',
    color: '#38bdf8', // sky blue
    description: 'Kelp forest ecology at the SBC LTER site, studying predator-prey dynamics, fisheries spillover, and ecosystem stability.',
  },
];

export default function StudySitesMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedSite, setSelectedSite] = useState<StudySite | null>(null);
  const [, setMapLoaded] = useState(false);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    // Dynamically import Leaflet
    const initMap = async () => {
      const L = (await import('leaflet')).default;

      // Create map
      const map = L.map(mapRef.current!, {
        center: [10, -135], // Center between both sites
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      // Add zoom control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      // Custom dark ocean tiles - using Stadia Maps dark theme
      L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
      }).addTo(map);

      leafletMapRef.current = map;

      // Create custom markers for each site
      studySites.forEach((site) => {
        // Custom HTML marker
        const markerHtml = `
          <div class="study-site-marker" style="--site-color: ${site.color}">
            <div class="marker-pulse"></div>
            <div class="marker-dot"></div>
            <div class="marker-label">${site.name}</div>
          </div>
        `;

        const icon = L.divIcon({
          html: markerHtml,
          className: 'study-site-marker-wrapper',
          iconSize: [120, 40],
          iconAnchor: [20, 20],
        });

        const marker = L.marker(site.coordinates, { icon }).addTo(map);

        marker.on('click', () => {
          setSelectedSite(site);
          map.flyTo(site.coordinates, 5, { duration: 1.5 });
        });

        markersRef.current.push(marker);
      });

      setMapLoaded(true);

      // Fit bounds to show both sites
      const bounds = L.latLngBounds(studySites.map(s => s.coordinates));
      map.fitBounds(bounds, { padding: [80, 80] });
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const handleSiteClick = (site: StudySite) => {
    setSelectedSite(site);
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo(site.coordinates, 5, { duration: 1.5 });
    }
  };

  const handleClose = () => {
    setSelectedSite(null);
    if (leafletMapRef.current) {
      const L = (window as any).L;
      if (L) {
        const bounds = L.latLngBounds(studySites.map(s => s.coordinates));
        leafletMapRef.current.flyToBounds(bounds, { padding: [80, 80], duration: 1 });
      }
    }
  };

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <div className="study-sites-map-container">
        <style>{`
          .study-sites-map-container {
            position: relative;
            width: 100%;
            border-radius: 1.5rem;
            overflow: hidden;
            background: #0f172a;
            border: 1px solid rgba(56, 189, 248, 0.2);
          }

          .map-wrapper {
            position: relative;
            height: 450px;
          }

          @media (min-width: 768px) {
            .map-wrapper {
              height: 500px;
            }
          }

          .map-element {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0c1929 0%, #1a365d 50%, #0c1929 100%);
          }

          /* Custom Leaflet marker styles */
          .study-site-marker-wrapper {
            background: transparent !important;
            border: none !important;
          }

          .study-site-marker {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .marker-pulse {
            position: absolute;
            width: 40px;
            height: 40px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            background: var(--site-color);
            opacity: 0.3;
            animation: marker-pulse-anim 2s ease-out infinite;
          }

          .marker-dot {
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--site-color);
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            z-index: 1;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .study-site-marker:hover .marker-dot {
            transform: scale(1.2);
          }

          .marker-label {
            background: rgba(15, 23, 42, 0.95);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            border: 1px solid var(--site-color);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }

          @keyframes marker-pulse-anim {
            0% {
              transform: translateY(-50%) scale(0.5);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-50%) scale(1.5);
              opacity: 0;
            }
          }

          /* Site buttons below map */
          .site-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(15, 23, 42, 0.8);
            border-top: 1px solid rgba(56, 189, 248, 0.1);
          }

          .site-button {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1rem;
            background: rgba(30, 41, 59, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.75rem;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }

          .site-button:hover {
            background: rgba(56, 189, 248, 0.1);
            border-color: rgba(56, 189, 248, 0.3);
            transform: translateY(-2px);
          }

          .site-button.active {
            background: rgba(56, 189, 248, 0.15);
            border-color: rgba(56, 189, 248, 0.5);
          }

          .site-button-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            flex-shrink: 0;
            border: 2px solid rgba(255, 255, 255, 0.5);
          }

          .site-button-info h4 {
            color: white;
            font-size: 0.9375rem;
            font-weight: 700;
            margin: 0 0 2px 0;
          }

          .site-button-info span {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.8125rem;
          }

          /* Site detail panel */
          .site-detail-panel {
            position: absolute;
            top: 1rem;
            left: 1rem;
            right: 1rem;
            max-width: 400px;
            background: rgba(15, 23, 42, 0.98);
            border-radius: 1rem;
            border: 1px solid rgba(56, 189, 248, 0.3);
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
          }

          @media (min-width: 768px) {
            .site-detail-panel {
              top: 1.5rem;
              left: 1.5rem;
              right: auto;
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .panel-image {
            position: relative;
            width: 100%;
            height: 140px;
            overflow: hidden;
          }

          .panel-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .panel-image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(15, 23, 42, 1) 0%, transparent 100%);
          }

          .panel-close {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: white;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 1;
          }

          .panel-close:hover {
            background: rgba(56, 189, 248, 0.3);
            border-color: rgba(56, 189, 248, 0.5);
          }

          .ecosystem-badge {
            position: absolute;
            bottom: -12px;
            left: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: rgba(15, 23, 42, 0.95);
            border: 1px solid var(--badge-color, #38bdf8);
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--badge-color, #38bdf8);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .ecosystem-badge-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--badge-color, #38bdf8);
          }

          .panel-content {
            padding: 1.5rem;
            padding-top: 1.25rem;
          }

          .panel-header {
            margin-bottom: 1rem;
          }

          .panel-title {
            color: white;
            font-size: 1.375rem;
            font-weight: 800;
            margin: 0 0 4px 0;
          }

          .panel-location {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.875rem;
          }

          .panel-description {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.875rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .panel-section-title {
            color: #38bdf8;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.625rem;
          }

          .panel-questions {
            list-style: none;
            padding: 0;
            margin: 0 0 1.25rem 0;
          }

          .panel-questions li {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.8125rem;
            line-height: 1.5;
            padding: 0.375rem 0;
          }

          .panel-questions li svg {
            width: 14px;
            height: 14px;
            color: #2dd4bf;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .panel-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #38bdf8;
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            transition: gap 0.2s ease;
          }

          .panel-link:hover {
            gap: 0.75rem;
          }

          .panel-link svg {
            width: 16px;
            height: 16px;
            transition: transform 0.2s ease;
          }

          .panel-link:hover svg {
            transform: translateX(2px);
          }

          /* Legend */
          .map-legend {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            display: flex;
            gap: 1rem;
            background: rgba(15, 23, 42, 0.9);
            padding: 0.625rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 500;
          }

          .legend-item {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.7);
          }

          .legend-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.5);
          }

          /* Hide Leaflet attribution */
          .leaflet-control-attribution {
            display: none !important;
          }

          /* Custom zoom controls */
          .leaflet-control-zoom {
            border: none !important;
            box-shadow: none !important;
          }

          .leaflet-control-zoom a {
            background: rgba(15, 23, 42, 0.9) !important;
            color: white !important;
            border: 1px solid rgba(56, 189, 248, 0.3) !important;
            width: 32px !important;
            height: 32px !important;
            line-height: 30px !important;
            font-size: 16px !important;
          }

          .leaflet-control-zoom a:hover {
            background: rgba(56, 189, 248, 0.2) !important;
          }

          .leaflet-control-zoom-in {
            border-radius: 6px 6px 0 0 !important;
          }

          .leaflet-control-zoom-out {
            border-radius: 0 0 6px 6px !important;
          }
        `}</style>

        <div className="map-wrapper">
          <div ref={mapRef} className="map-element" />

          {/* Legend */}
          <div className="map-legend">
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#f97316' }} />
              <span>Coral Reefs</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#38bdf8' }} />
              <span>Kelp Forests</span>
            </div>
          </div>

          {/* Site Detail Panel */}
          {selectedSite && (
            <div className="site-detail-panel">
              <div className="panel-image">
                <img src={selectedSite.image} alt={selectedSite.name} />
                <div className="panel-image-overlay" />
                <button className="panel-close" onClick={handleClose}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <div
                  className="ecosystem-badge"
                  style={{ '--badge-color': selectedSite.color } as React.CSSProperties}
                >
                  <span className="ecosystem-badge-dot" />
                  {selectedSite.ecosystem}
                </div>
              </div>

              <div className="panel-content">
                <div className="panel-header">
                  <h3 className="panel-title">{selectedSite.name}</h3>
                  <span className="panel-location">{selectedSite.location}</span>
                </div>

                <p className="panel-description">{selectedSite.description}</p>

                <h4 className="panel-section-title">Key Research Questions</h4>
                <ul className="panel-questions">
                  {selectedSite.questions.map((question, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                      {question}
                    </li>
                  ))}
                </ul>

                <a href={selectedSite.researchLink} className="panel-link">
                  Explore {selectedSite.ecosystem.toLowerCase()} research
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Site selection buttons */}
        <div className="site-buttons">
          {studySites.map((site) => (
            <button
              key={site.id}
              className={`site-button ${selectedSite?.id === site.id ? 'active' : ''}`}
              onClick={() => handleSiteClick(site)}
            >
              <span
                className="site-button-dot"
                style={{ background: site.color }}
              />
              <div className="site-button-info">
                <h4>{site.name}</h4>
                <span>{site.ecosystem}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
