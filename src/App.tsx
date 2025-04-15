import React, { useRef, useState, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { CustomEventSection } from './components/CustomEventSection';
import { EcommerceSection } from './components/EcommerceSection';
import { PromotionalBanners } from './components/PromotionalBanners';
import { ConsoleLog } from './components/ConsoleLog';
import { formatJSON } from './utils/dataLayer';
import { useDataLayer } from './hooks/useDataLayer';

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

function App() {
  const consoleRef = useRef<HTMLPreElement>(null);
  const [customEventName, setCustomEventName] = useState('');

  // Function to log to console with improved formatting
  const logToConsole = useCallback((message: string, data?: any) => {
    if (!consoleRef.current) return;

    const entry = document.createElement('div');
    entry.className = 'console-entry';

    const timestamp = document.createElement('div');
    timestamp.className = 'console-timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    entry.appendChild(timestamp);

    const messageEl = document.createElement('div');
    messageEl.className = 'console-message';
    messageEl.textContent = message;
    entry.appendChild(messageEl);

    if (data) {
      const jsonEl = document.createElement('div');
      jsonEl.className = 'console-json';
      jsonEl.innerHTML = formatJSON(data);
      entry.appendChild(jsonEl);
    }

    consoleRef.current.insertBefore(entry, consoleRef.current.firstChild);
  }, []);

  // Custom DataLayer push function
  const handleCustomEvent = useCallback(() => {
    if (!customEventName.trim()) {
      logToConsole('Error: Event name cannot be empty');
      return;
    }

    const customEventData = {
      event: customEventName,
      custom_event: 'manual',
      timestamp: new Date().toISOString(),
    };

    window.dataLayer.push(customEventData);
    logToConsole(`DataLayer Push - Custom Event: ${customEventName}`, customEventData);
    setCustomEventName('');
  }, [customEventName, logToConsole]);

  const dataLayerHandlers = useDataLayer(logToConsole);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        handleLogoClick={dataLayerHandlers.handleLogoClick}
        handleTelClick={dataLayerHandlers.handleTelClick}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CustomEventSection
          customEventName={customEventName}
          setCustomEventName={setCustomEventName}
          handleCustomEvent={handleCustomEvent}
        />

        <div className="grid grid-cols-1 gap-6">
          <EcommerceSection {...dataLayerHandlers} />
        </div>

        <PromotionalBanners handleBannerClick={dataLayerHandlers.handleBannerClick} />
        <ConsoleLog consoleRef={consoleRef} />
      </main>
    </div>
  );
}

export default App;