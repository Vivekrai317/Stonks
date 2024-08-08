import React, { useEffect, useRef, memo } from 'react';

const Heatmap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to create and append the script element
    const loadWidget = () => {
      // Clear any existing content in the container to prevent multiple widgets
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        exchanges: [],
        dataSource: 'SENSEX',
        grouping: 'sector',
        blockSize: 'market_cap_basic',
        blockColor: 'change',
        locale: 'en',
        symbolUrl: '',
        colorTheme: 'light',
        hasTopBar: false,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        isMonoSize: false,
        width: 1125,
        height: 500
      });

      if (containerRef.current) {
        containerRef.current.appendChild(script);
      }
    };

    // Load the widget
    loadWidget();

    // Cleanup function to remove the script on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ width: '500px', height: '500px' }}>
      <div className="tradingview-widget-container__widget" style={{ width: '100%', height: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(Heatmap);
