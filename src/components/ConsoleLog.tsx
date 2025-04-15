import React from 'react';

interface ConsoleLogProps {
  consoleRef: React.RefObject<HTMLPreElement>;
}

export const ConsoleLog = ({ consoleRef }: ConsoleLogProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        📋 Console Log
      </h2>
      <pre 
        ref={consoleRef} 
        className="bg-gray-900 text-gray-200 p-6 rounded-lg font-mono text-sm overflow-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
      />
    </div>
  );
};