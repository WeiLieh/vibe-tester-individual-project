import React, { useState } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';

export const ScamAlert: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="bg-yellow-50 text-[11px] py-1 px-4 text-center text-yellow-800 border-b border-yellow-200 flex items-center justify-center space-x-2">
        <ShieldAlert className="w-3.5 h-3.5 text-yellow-700" />
        <span>Scam alert hidden.</span>
        <button
          onClick={() => setDismissed(false)}
          className="underline font-bold hover:text-yellow-900"
        >
          Show Scam Warning
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8E7] border-b border-yellow-200 py-2.5 px-4 flex justify-between items-start text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-start w-full">
        <Info className="h-5 w-5 text-yellow-800 mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-gray-800 leading-relaxed">
          <strong>Beware of Impersonation Scams:</strong> Government officials will{' '}
          <strong>NEVER</strong> ask you to transfer money or disclose bank log-in details over a phone call. Call the 24/7{' '}
          <a
            href="https://www.scamshield.gov.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-yellow-900 hover:text-black"
          >
            ScamShield
          </a>{' '}
          Helpline at{' '}
          <a
            href="tel:1799"
            className="underline font-bold text-yellow-900 hover:text-black"
          >
            1799
          </a>{' '}
          if you are unsure if something is a scam.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-gray-500 hover:text-gray-800 ml-3 flex-shrink-0 p-1 rounded hover:bg-yellow-100"
        aria-label="Dismiss scam alert"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
