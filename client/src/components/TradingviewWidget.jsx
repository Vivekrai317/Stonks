import React, { useEffect, useRef, memo } from 'react';
import "../App.css"
function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Clear any existing content in the container to prevent multiple charts
    if (container.current) {
      container.current.innerHTML = '';
    }

    // Check if the script already exists to prevent adding multiple scripts
    const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "500",
          "padding": "24px",
          "symbol": "BSE:SENSEX",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "allow_symbol_change": true,
          "watchlist": [
            ""
          ],
          "details": true,
          "hotlist": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    } else {
      // If the script exists, re-initialize the widget
      window.TradingView.onready(() => {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BSE:SENSEX",
          interval: "D",
          timezone: "Asia/Kolkata",
          theme: "light",
          style: "1",
          locale: "en",
          withdateranges: true,
          allow_symbol_change: true,
          // watchlist: ["NSE:INFY"],
          details: true,
          // hotlist: true,
          calendar: false,
          container_id: container.current.children[0].id
        });
      });
    }
  }, []);

  return (
    <div className="" ref={container}>
      <div className=" left-6" id="tradingview-widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
