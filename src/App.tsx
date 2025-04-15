import React, { useRef, useState, useCallback, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { Navigation } from './components/Navigation';
import { CustomEventSection } from './components/CustomEventSection';
import { EcommerceSection } from './components/EcommerceSection';
import { PromotionalBanners } from './components/PromotionalBanners';
import { ConsoleLog } from './components/ConsoleLog';
import { formatJSON } from './utils/dataLayer';
import { useDataLayer } from './hooks/useDataLayer';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const consoleRef = useRef<HTMLPreElement>(null);
  const [customEventName, setCustomEventName] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        logToConsole('User logged in:', { displayName: currentUser.displayName, email: currentUser.email });
      } else {
        setUser(null);
        logToConsole('User logged out');
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => { logToConsole('Google Sign-in Error:', error)});
  };

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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign in with Google
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          handleLogoClick={dataLayerHandlers.handleLogoClick}
          handleTelClick={dataLayerHandlers.handleTelClick}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-end mb-4">
            <button onClick={() => signOut(auth)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Out</button>
          </div>
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
}

export default App;