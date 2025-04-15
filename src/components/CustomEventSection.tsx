import React from 'react';

interface CustomEventSectionProps {
  customEventName: string;
  setCustomEventName: (name: string) => void;
  handleCustomEvent: () => void;
}

export const CustomEventSection = ({
  customEventName,
  setCustomEventName,
  handleCustomEvent
}: CustomEventSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        🎯 Custom Event
      </h2>
      <div className="flex gap-4">
        <input
          type="text"
          value={customEventName}
          onChange={(e) => setCustomEventName(e.target.value)}
          placeholder="Enter event name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
        />
        <button
          onClick={handleCustomEvent}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Push Event
        </button>
      </div>
    </div>
  );
};