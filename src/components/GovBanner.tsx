import React, { useState } from 'react';
import { AlertCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Language, TextSize } from '../types';

interface GovBannerProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  textSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
}

export const GovBanner: React.FC<GovBannerProps> = ({
  currentLang,
  onLanguageChange,
  textSize,
  onTextSizeChange,
}) => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  return (
    <>
      <div className="bg-[#F2F2F5] border-b border-gray-200 text-xs py-1.5 px-4 flex justify-between items-center w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          {/* Government Identification */}
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-red-600 font-bold text-sm leading-none flex items-center justify-center">
              🇸🇬
            </span>
            <span className="font-medium text-gray-700">A Singapore Government Agency Website</span>
            <button
              onClick={() => setShowVerifyModal(true)}
              className="text-blue-700 hover:underline flex items-center ml-2 text-[11px] font-semibold"
            >
              How to identify
              <ChevronDown className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          {/* Accessibility & Language Controls */}
          <div className="flex items-center space-x-4 text-gray-600">
            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center space-x-1 font-bold border-r border-gray-300 pr-3">
              <span className="text-[10px] text-gray-400 mr-1 uppercase">Font:</span>
              <button
                onClick={() => onTextSizeChange('normal')}
                className={`px-1.5 py-0.5 rounded ${textSize === 'normal' ? 'bg-slate-900 text-white font-bold' : 'hover:bg-gray-200 text-gray-700'}`}
                title="Normal Font Size"
              >
                A
              </button>
              <button
                onClick={() => onTextSizeChange('large')}
                className={`px-1.5 py-0.5 rounded text-sm ${textSize === 'large' ? 'bg-slate-900 text-white font-bold' : 'hover:bg-gray-200 text-gray-700'}`}
                title="Large Font Size"
              >
                A+
              </button>
              <button
                onClick={() => onTextSizeChange('xlarge')}
                className={`px-1.5 py-0.5 rounded text-base ${textSize === 'xlarge' ? 'bg-slate-900 text-white font-bold' : 'hover:bg-gray-200 text-gray-700'}`}
                title="Extra Large Font Size"
              >
                A++
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-1 font-medium">
              <select
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent border border-gray-300 rounded px-2 py-0.5 text-xs text-gray-700 font-semibold focus:outline-none focus:ring-1 focus:ring-[#373367]"
              >
                <option value="en">English</option>
                <option value="zh">简体中文</option>
                <option value="ms">Bahasa Melayu</option>
                <option value="ta">தமிழ்</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Official Gov Website Verification Info Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl border border-gray-200 animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg text-[#2B2A59] flex items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
                How to identify an official Singapore Government website
              </h3>
              <button
                onClick={() => setShowVerifyModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
              <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                <p className="font-bold text-gray-800 mb-1">1. Official government domain (.gov.sg)</p>
                <p>Official Singapore government agency websites end with <strong>.gov.sg</strong>. Always check the browser address bar before sharing confidential information.</p>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                <p className="font-bold text-gray-800 mb-1">2. Secure connection (HTTPS / Padlock)</p>
                <p>Look for a lock icon in your browser URL bar. Official websites encrypt all traffic to protect your family privacy.</p>
              </div>
            </div>
            <button
              onClick={() => setShowVerifyModal(false)}
              className="mt-5 w-full bg-[#373367] text-white py-2 rounded font-bold text-xs hover:bg-[#2B2A59]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
