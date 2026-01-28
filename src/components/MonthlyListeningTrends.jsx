import React, { useMemo, useState, useRef } from 'react';
import { useSpotifyData } from '../contexts/SpotifyDataContext';
import './MonthlyListeningTrends.css';

const MonthlyListeningTrends = () => {
  const { monthlyTrend } = useSpotifyData();
  const [hoveredData, setHoveredData] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Calculate basic stats for footer
  const currentMonth = monthlyTrend[monthlyTrend.length - 1];
  const previousMonth = monthlyTrend[monthlyTrend.length - 2];
  const totalMinutes = monthlyTrend.reduce((acc, curr) => acc + curr.minutes, 0);
  const averageMinutes = Math.round(totalMinutes / monthlyTrend.length);
  
  const minutesChange = currentMonth.minutes - previousMonth.minutes;
  const percentChange = ((minutesChange / previousMonth.minutes) * 100).toFixed(1);
  const isPositive = minutesChange >= 0;

  // Chart Config
  const height = 220;
  const width = 1000; // Internal SVG coordinate width
  const padding = 20;

  // Scales
  const maxMinutes = Math.max(...monthlyTrend.map(d => d.minutes)) * 1.15;
  const minMinutes = Math.min(...monthlyTrend.map(d => d.minutes)) * 0.85;

  // Map data to points
  const points = useMemo(() => {
    const widthPerPoint = width / (monthlyTrend.length - 1);
    
    return monthlyTrend.map((data, index) => {
      const x = index * widthPerPoint;
      const normalizedY = (data.minutes - minMinutes) / (maxMinutes - minMinutes);
      const y = height - (normalizedY * (height - padding * 2)) - padding;
      return { x, y, data };
    });
  }, [monthlyTrend, maxMinutes, minMinutes]);

  // Cubic Bezier Smoothing Function
  const getSmoothPath = (points) => {
    if (points.length === 0) return '';
    
    // Helper to calculate control points
    const getControlPoint = (current, prev, next, reverse) => {
      const p = prev || current;
      const n = next || current;
      const smoothing = 0.15; // Smoothness factor (0-1)
      
      const lineX = n.x - p.x;
      const lineY = n.y - p.y;
      
      const length = Math.sqrt(Math.pow(lineX, 2) + Math.pow(lineY, 2));
      const angle = Math.atan2(lineY, lineX) + (reverse ? Math.PI : 0);
      
      const controlLength = length * smoothing;
      const x = current.x + Math.cos(angle) * controlLength;
      const y = current.y + Math.sin(angle) * controlLength;
      
      return { x, y };
    };

    return points.reduce((acc, point, i, a) => {
      if (i === 0) return `M ${point.x},${point.y}`;
      
      const cps = getControlPoint(a[i-1], a[i-2], point, false);
      const cpe = getControlPoint(point, a[i-1], a[i+1], true);
      
      return `${acc} C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`;
    }, '');
  };

  const linePath = useMemo(() => getSmoothPath(points), [points]);
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;

  // Interaction Handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const svgX = (x / rect.width) * width;
    
    // Find closest point
    let closestDist = Infinity;
    let closestPoint = null;
    
    points.forEach(point => {
      const dist = Math.abs(point.x - svgX);
      if (dist < closestDist) {
        closestDist = dist;
        closestPoint = point;
      }
    });

    if (closestPoint && closestDist < (width / monthlyTrend.length / 1.5)) {
      setHoveredData(closestPoint);
      setHoverPosition({ 
        x: (closestPoint.x / width) * rect.width, 
        y: (closestPoint.y / height) * rect.height // Approximate
      });
    } else {
      setHoveredData(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div className="monthly-trends-container">
      <div className="chart-summary">
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-label">Total Minutes</span>
            <span className="stat-value">{totalMinutes.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg / Month</span>
            <span className="stat-value">{averageMinutes.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Trend</span>
            <span className={`stat-trend ${isPositive ? 'positive' : 'negative'}`}>
              {isPositive ? '+' : ''}{percentChange}%
            </span>
          </div>
        </div>
        <p className="summary-description">
          Your listening activity has increased steadily over the last 6 months. 
          You peaked in {currentMonth.month} with {currentMonth.minutes.toLocaleString()} minutes streamed, 
          showing a strong preference for weekend listening sessions.
        </p>
      </div>

      {/* Chart Area */}
      <div className="chart-wrapper">
        {hoveredData && (
          <div 
            className="chart-tooltip" 
            style={{ 
              left: hoverPosition.x, 
              top: (hoveredData.y / height) * 220 // Scale height 
            }}
          >
            <span className="tooltip-date">{hoveredData.data.month} 2024</span>
            <span className="tooltip-value">{hoveredData.data.minutes.toLocaleString()} min</span>
          </div>
        )}

        <div 
          className="chart-container" 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg 
            className="trend-chart-svg" 
            viewBox={`0 0 ${width} ${height}`} 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="neonGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4"/>
                <stop offset="80%" stopColor="#4ade80" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Vertical Grid Lines */}
            {points.map((p, i) => (
              <line 
                key={i} 
                x1={p.x} y1="0" 
                x2={p.x} y2={height} 
                className="grid-line-vertical"
                opacity="0.2"
              />
            ))}

            {/* Area Fill */}
            <path d={areaPath} className="chart-path-area" />

            {/* Main Line */}
            <path d={linePath} className="chart-path-line" />

            {/* Hover Effects */}
            {hoveredData && (
              <>
                <line 
                  x1={hoveredData.x} y1="0" 
                  x2={hoveredData.x} y2={height} 
                  className="cursor-line visible"
                />
                <circle 
                  cx={hoveredData.x} 
                  cy={hoveredData.y} 
                  className="cursor-point visible"
                />
              </>
            )}
          </svg>
        </div>
        
        <div className="x-axis-labels">
          {monthlyTrend.map((d, i) => (
            <span key={i} className="x-axis-label">{d.month}</span>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="chart-controls">
        <div className="toggle-group">
          <button className="toggle-btn">Week</button>
          <button className="toggle-btn">Month</button>
          <button className="toggle-btn active">Max</button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyListeningTrends;
