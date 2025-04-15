import React from 'react';

interface ConsentSectionProps {
  handleConsentAnalytics: () => void;
  handleConsentAds: () => void;
  handlePageView: () => void;
}

export const ConsentSection = ({
  handleConsentAnalytics,
  handleConsentAds,
  handlePageView
}: ConsentSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        🔒 Consent Management
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={handleConsentAnalytics}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
        >
          Update Analytics Consent
        </button>
        <button
          onClick={handleConsentAds}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
        >
          Update Ads Consent
        </button>
        <button
          onClick={handlePageView}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
        >
          Trigger Page View
        </button>
      </div>
    </div>
  );
};