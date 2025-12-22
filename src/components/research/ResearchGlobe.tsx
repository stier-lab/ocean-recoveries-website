import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { geoMercator, geoPath, geoGraticule } from 'd3-geo';
import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';

interface FieldSite {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: 'coral' | 'kelp';
  description: string;
  features: string[];
}

const fieldSites: FieldSite[] = [
  {
    id: 'moorea',
    name: 'Moorea',
    location: 'French Polynesia',
    coordinates: [-149.8366, -17.5388],
    type: 'coral',
    description: 'Our primary coral reef field site, home to long-term experiments on reef recovery, mutualist communities, and restoration approaches.',
    features: ['15+ years of monitoring data', 'Coral restoration experiments', 'Moorea Coral Reef LTER'],
  },
  {
    id: 'santa-barbara',
    name: 'Santa Barbara Channel',
    location: 'California, USA',
    coordinates: [-119.8489, 34.2439],
    type: 'kelp',
    description: 'Giant kelp forests along the California coast where we study predator-prey dynamics, fisheries interactions, and ecosystem resilience.',
    features: ['Marine protected area research', 'Lobster-urchin-kelp dynamics', 'Santa Barbara Coastal LTER'],
  },
  {
    id: 'dominican-republic',
    name: 'Dominican Republic',
    location: 'Caribbean',
    coordinates: [-69.9312, 18.7357],
    type: 'coral',
    description: 'Caribbean coral reef sites for comparative reef research and understanding regional ecosystem dynamics.',
    features: ['Caribbean reef ecosystems', 'Multi-region coral comparisons', 'Reef restoration studies'],
  },
];

export default function ResearchMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedSite, setSelectedSite] = useState<FieldSite | null>(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 500 });
  const landDataRef = useRef<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);

  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        const width = Math.min(container.clientWidth, 1000);
        const height = Math.round(width * 0.55); // Slightly taller for better Pacific/Caribbean view
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const { width, height } = dimensions;

    // Clear previous content
    svg.selectAll('*').remove();

    // Set up projection - Pacific & Caribbean focused
    // Center on the middle of our research area (between Moorea and Caribbean)
    const projection = geoMercator()
      .scale(width / 3.2)
      .center([-120, 8]) // Center on Eastern Pacific
      .translate([width / 2, height / 2]);

    const path = geoPath().projection(projection);
    const graticule = geoGraticule().step([15, 15]); // Finer grid for zoomed view

    // Create defs for gradients and filters
    const defs = svg.append('defs');

    // Ocean gradient - tropical ocean colors
    const oceanGradient = defs.append('radialGradient')
      .attr('id', 'oceanGradient')
      .attr('cx', '30%')
      .attr('cy', '50%')
      .attr('r', '70%');

    oceanGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#0c4a6e'); // Deep tropical blue center
    oceanGradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#0f172a');
    oceanGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#1e293b');

    // Glow filter for markers
    const glow = defs.append('filter')
      .attr('id', 'markerGlow')
      .attr('x', '-100%')
      .attr('y', '-100%')
      .attr('width', '300%')
      .attr('height', '300%');

    glow.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'coloredBlur');

    const feMerge = glow.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Map group
    const map = svg.append('g').attr('class', 'map');

    // Ocean background
    map.append('rect')
      .attr('class', 'ocean')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#oceanGradient)');

    // Graticule (grid lines)
    map.append('path')
      .attr('class', 'graticule')
      .datum(graticule())
      .attr('d', path as unknown as string)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(56, 189, 248, 0.1)')
      .attr('stroke-width', 0.5);

    // Countries path
    const countriesPath = map.append('path')
      .attr('class', 'countries')
      .attr('fill', 'rgba(30, 41, 59, 0.95)')
      .attr('stroke', 'rgba(56, 189, 248, 0.25)')
      .attr('stroke-width', 0.5);

    // Ocean region labels
    const labelsGroup = map.append('g').attr('class', 'ocean-labels');

    // Site markers group
    const markersGroup = map.append('g').attr('class', 'markers');

    // Connection lines group (drawn under markers)
    const connectionsGroup = map.append('g').attr('class', 'connections');

    // Add ocean region labels
    const renderOceanLabels = () => {
      labelsGroup.selectAll('*').remove();

      const oceanRegions = [
        { name: 'Pacific Ocean', coordinates: [-150, -5] as [number, number] },
        { name: 'Caribbean Sea', coordinates: [-75, 15] as [number, number] },
      ];

      oceanRegions.forEach(region => {
        const coords = projection(region.coordinates);
        if (!coords) return;

        labelsGroup.append('text')
          .attr('x', coords[0])
          .attr('y', coords[1])
          .attr('fill', 'rgba(56, 189, 248, 0.25)')
          .attr('font-size', '16px')
          .attr('font-weight', '600')
          .attr('font-family', 'Inter, system-ui, sans-serif')
          .attr('text-anchor', 'middle')
          .attr('letter-spacing', '3px')
          .text(region.name.toUpperCase());
      });
    };

    // Load world topology data
    const loadWorldData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const world = await response.json();
        const topojson = await import('topojson-client');
        const countries = topojson.feature(world, world.objects.countries) as unknown as FeatureCollection<Geometry, GeoJsonProperties>;
        landDataRef.current = countries;
        countriesPath.datum(countries).attr('d', path as unknown as string);
        renderOceanLabels();
        renderMarkers();
      } catch (error) {
        console.error('Failed to load world data:', error);
        // Still render markers even if map fails
        renderOceanLabels();
        renderMarkers();
      }
    };

    // Draw connection lines between sites
    const drawConnections = () => {
      connectionsGroup.selectAll('*').remove();

      // Draw curved lines between sites
      const siteCoords = fieldSites.map(site => projection(site.coordinates)).filter(Boolean) as [number, number][];

      if (siteCoords.length < 2) return;

      // Create curved paths between consecutive sites
      for (let i = 0; i < siteCoords.length - 1; i++) {
        const start = siteCoords[i];
        const end = siteCoords[i + 1];
        const midX = (start[0] + end[0]) / 2;
        const midY = Math.min(start[1], end[1]) - 30; // Curve upward

        connectionsGroup.append('path')
          .attr('d', `M ${start[0]} ${start[1]} Q ${midX} ${midY} ${end[0]} ${end[1]}`)
          .attr('fill', 'none')
          .attr('stroke', 'rgba(56, 189, 248, 0.3)')
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '6 4')
          .style('animation', 'dash 30s linear infinite');
      }
    };

    // Render site markers
    const renderMarkers = () => {
      markersGroup.selectAll('*').remove();
      drawConnections();

      fieldSites.forEach((site, index) => {
        const coords = projection(site.coordinates);
        if (!coords) return;

        const markerGroup = markersGroup.append('g')
          .attr('class', 'site-marker-group')
          .attr('transform', `translate(${coords[0]}, ${coords[1]})`)
          .style('cursor', 'pointer')
          .style('opacity', 0)
          .style('animation', `fadeInMarker 0.5s ease-out ${index * 0.15}s forwards`);

        // Outer pulse ring
        markerGroup.append('circle')
          .attr('class', 'pulse-ring')
          .attr('r', 20)
          .attr('fill', 'none')
          .attr('stroke', site.type === 'coral' ? '#f97316' : '#38bdf8')
          .attr('stroke-width', 2)
          .attr('opacity', 0.4)
          .style('animation', 'pulse 2.5s ease-out infinite');

        // Inner glow circle
        markerGroup.append('circle')
          .attr('r', 12)
          .attr('fill', site.type === 'coral' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(56, 189, 248, 0.3)')
          .style('filter', 'url(#markerGlow)');

        // Main marker
        markerGroup.append('circle')
          .attr('class', 'marker-main')
          .attr('r', 8)
          .attr('fill', site.type === 'coral' ? '#f97316' : '#38bdf8')
          .attr('stroke', '#fff')
          .attr('stroke-width', 2.5);

        // Inner dot
        markerGroup.append('circle')
          .attr('r', 3)
          .attr('fill', '#fff');

        // Label
        const labelGroup = markerGroup.append('g')
          .attr('class', 'label-group')
          .attr('transform', 'translate(16, 0)');

        // Label background
        const labelText = site.name;
        const textWidth = labelText.length * 7 + 16;

        labelGroup.append('rect')
          .attr('x', 0)
          .attr('y', -12)
          .attr('width', textWidth)
          .attr('height', 24)
          .attr('rx', 12)
          .attr('fill', 'rgba(15, 23, 42, 0.9)')
          .attr('stroke', site.type === 'coral' ? 'rgba(249, 115, 22, 0.5)' : 'rgba(56, 189, 248, 0.5)')
          .attr('stroke-width', 1);

        labelGroup.append('text')
          .attr('x', 8)
          .attr('y', 4)
          .attr('fill', '#fff')
          .attr('font-size', '12px')
          .attr('font-weight', '600')
          .attr('font-family', 'Inter, system-ui, sans-serif')
          .text(labelText);

        // Interaction
        markerGroup
          .on('click', () => setSelectedSite(site))
          .on('mouseenter', function() {
            d3.select(this).select('.marker-main')
              .transition()
              .duration(200)
              .attr('r', 11);
            d3.select(this).select('.label-group')
              .transition()
              .duration(200)
              .attr('transform', 'translate(20, 0)');
          })
          .on('mouseleave', function() {
            d3.select(this).select('.marker-main')
              .transition()
              .duration(200)
              .attr('r', 8);
            d3.select(this).select('.label-group')
              .transition()
              .duration(200)
              .attr('transform', 'translate(16, 0)');
          });
      });
    };

    loadWorldData();

  }, [dimensions]);

  return (
    <div className="map-container">
      <style>{`
        .map-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .map-container {
            flex-direction: row;
            align-items: flex-start;
            gap: 2rem;
          }
        }

        .map-wrapper {
          flex: 1;
          min-width: 0;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(56, 189, 248, 0.2);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 95, 0.95) 100%);
        }

        .map-svg {
          display: block;
          width: 100%;
          height: auto;
        }

        @keyframes pulse {
          0% {
            r: 12;
            opacity: 0.6;
          }
          100% {
            r: 28;
            opacity: 0;
          }
        }

        @keyframes fadeInMarker {
          from {
            opacity: 0;
            transform: translate(var(--x), var(--y)) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translate(var(--x), var(--y)) scale(1);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .sites-panel {
          width: 100%;
          max-width: 100%;
        }

        @media (min-width: 1024px) {
          .sites-panel {
            width: 320px;
            flex-shrink: 0;
          }
        }

        .legend {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
          margin-bottom: 0.5rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .legend-dot.coral {
          background: #f97316;
        }

        .legend-dot.kelp {
          background: #38bdf8;
        }

        .sites-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .site-btn {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 1rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
        }

        .site-btn:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.3);
          transform: translateX(4px);
        }

        .site-btn.selected {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.5);
        }

        .site-indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 3px;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .site-indicator.coral {
          background: #f97316;
        }

        .site-indicator.kelp {
          background: #38bdf8;
        }

        .site-info h4 {
          color: white;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .site-info .location {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }

        .site-details {
          margin-top: 1.5rem;
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .site-details h3 {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .site-details .location {
          color: #38bdf8;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .site-details p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .site-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .site-details li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          padding: 0.5rem 0;
        }

        .site-details li svg {
          color: #2dd4bf;
          flex-shrink: 0;
        }
      `}</style>

      <div className="map-wrapper">
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot coral" />
            <span>Coral Reef Sites</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot kelp" />
            <span>Kelp Forest Sites</span>
          </div>
        </div>

        <svg
          ref={svgRef}
          className="map-svg"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMid meet"
        />
      </div>

      <div className="sites-panel">
        <div className="sites-list">
          {fieldSites.map((site) => (
            <button
              key={site.id}
              className={`site-btn ${selectedSite?.id === site.id ? 'selected' : ''}`}
              onClick={() => setSelectedSite(site)}
            >
              <span className={`site-indicator ${site.type}`} />
              <div className="site-info">
                <h4>{site.name}</h4>
                <span className="location">{site.location}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedSite && (
          <div className="site-details">
            <h3>{selectedSite.name}</h3>
            <div className="location">{selectedSite.location}</div>
            <p>{selectedSite.description}</p>
            <ul>
              {selectedSite.features.map((feature, i) => (
                <li key={i}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
