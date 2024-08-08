import React, { useEffect, useRef } from 'react';

const TradingViewTimelineWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear any existing content in the container to prevent multiple widgets
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: 400,
      height: 550,
      colorTheme: 'light',
      locale: 'en'
    });
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function to remove the script on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ width: '400px', height: '400px' }}>
      <div className="tradingview-widget-container__widget" style={{ width: '100%', height: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewTimelineWidget;
