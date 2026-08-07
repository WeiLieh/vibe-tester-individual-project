import React, { useState } from 'react';
import { FloatingShareBar } from './FloatingShareBar';
import { SubPageType } from '../types';
import { ChevronRight } from 'lucide-react';
import englishGraphic from '../assets/images/cpp_english_card_1785989736893.jpg';
import mandarinGraphic from '../assets/images/cpp_mandarin_card_1785989749380.jpg';

interface CPPOfferingPortalProps {
  onStartElearning: (lang: 'en' | 'zh') => void;
  onNavigateNext: () => void;
  subPage: SubPageType;
  onSelectSubPage: (sub: SubPageType) => void;
}

export const CPPOfferingPortal: React.FC<CPPOfferingPortalProps> = ({
  onStartElearning,
  onNavigateNext,
  subPage,
  onSelectSubPage,
}) => {
  const englishCardImg = englishGraphic;
  const mandarinCardImg = mandarinGraphic;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row relative">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
        <div className="border-t-4 border-[#2B2A59] pt-4">
          <h3 className="font-bold text-[#FF7D00] text-base mb-4 font-serif">
            Mandatory Co-Parenting Programme (CPP)
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 font-medium">
            <li>
              <button
                onClick={() => onSelectSubPage('cpp-english')}
                className={`text-left transition ${
                  subPage === 'cpp-english' ? 'text-[#373367] font-extrabold underline' : 'hover:text-[#373367]'
                }`}
              >
                Mandatory Co-Parenting Programme (CPP) in English
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectSubPage('cpp-mandarin')}
                className={`text-left transition ${
                  subPage === 'cpp-mandarin' ? 'text-[#373367] font-extrabold underline' : 'hover:text-[#373367]'
                }`}
              >
                强制性共同育儿辅导计划 (CPP)
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Body */}
      <section className="w-full md:w-3/4 relative">
        {/* Floating social share bar */}
        <FloatingShareBar />

        {/* Section Header */}
        <h2 className="text-3xl font-bold text-[#2B2A59] mb-2 font-serif">
          Mandatory Co-Parenting Programme (CPP)
        </h2>
        <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>

        <p className="text-base sm:text-lg font-bold text-[#2B2A59] mb-10 leading-relaxed">
          The following information applies to divorces filed with the Family Justice Courts. For couples in a Muslim marriage, please visit the Syariah Court website.
        </p>

        {/* CPP Language Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center mb-16">
          {/* English Option */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition">
            <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 max-w-[320px]">
              <img
                src={englishCardImg}
                alt="CPP in English counselling artwork"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="text-xl font-bold text-[#2B2A59] mb-3 font-serif">
              CPP in English
            </h4>
            <button
              onClick={() => onStartElearning('en')}
              className="text-[#373367] underline font-bold hover:text-[#FF7D00] transition text-sm cursor-pointer"
            >
              Click here to complete the CPP in English.
            </button>
          </div>

          {/* Mandarin Option */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition">
            <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 max-w-[320px]">
              <img
                src={mandarinCardImg}
                alt="CPP in Mandarin counselling artwork"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="text-xl font-bold text-[#2B2A59] mb-3 font-serif">
              强制性共同育儿辅导计划 (CPP)
            </h4>
            <button
              onClick={() => onStartElearning('zh')}
              className="text-[#373367] underline font-bold hover:text-[#FF7D00] transition text-sm cursor-pointer"
            >
              请点击这里以完成强制性共同育儿辅导计划 （CPP）。
            </button>
          </div>
        </div>

        {/* Navigation Next Button */}
        <div className="flex flex-col items-end border-t border-gray-200 pt-6 mt-8">
          <button
            onClick={onNavigateNext}
            className="inline-flex items-center px-7 py-2.5 bg-[#0D9488] text-white font-bold rounded-full hover:bg-[#0f766e] transition duration-150 ease-in-out mb-2 shadow-xs"
          >
            <span>NEXT</span>
            <ChevronRight className="h-4 w-4 ml-1.5 stroke-[3]" />
          </button>
          <span className="italic text-gray-600 text-xs sm:text-sm">
            Mandatory Co-Parenting Programme (CPP) in English
          </span>
        </div>
      </section>
    </main>
  );
};
