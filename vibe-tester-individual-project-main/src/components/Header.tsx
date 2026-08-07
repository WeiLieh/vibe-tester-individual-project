import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { TabType } from '../types';
import { NAV_ITEMS } from '../data/portalData';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const msfLogoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDiR36OmFqasR7DGQ5nvHzSGQ0Pk7ienbm6JgNUeGkRAfAFS0L9ofbGB4DJ_5PhQO9ahGLRDwkJpLl5-234QEbMfR8S672xuuin8dByQBY7ZgGwTQOZ8No0AXnvlUfUMXIgd-QpmJDZhGV5V--SDqBZ5JIGPd6Q_B1uniI8OLtg0x1r8kZFNi9G_S8JJlcZVh1tMDQbx3dTNjgM317vNaWuwGCZe3etSphp5nHau-tBmPa79uqvW37R";
  const familyAssistLogoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDuyDUGRvR7ivbz2-kjayABQXDyhv3WxPAggJTYJQlRF5Vsd2skZ4wFrT5PMqF1KaxVOdqsm4Y50ifvFgsEIBTHNq7334s5J8mERP2hLwhAomvFDwV8nnLJvTAEQcQpfrkjFUlADuEYTk-UHMr4ce2SQhRXSVkipNsSyem38rz_6Y2G2NbJz4dHob86ZMaZrAiT0gPxpR5i9MO5c3OeAAyjH3iaVhG_fa1TDf_HmBTkOoNCgvVF2jNK";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logos */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onSelectTab('proceeding-divorce'); }}
              className="flex items-center space-x-3 group"
            >
              <img
                src={msfLogoUrl}
                alt="Ministry of Social and Family Development Logo"
                className="h-9 sm:h-11 object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image link expires
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
              <img
                src={familyAssistLogoUrl}
                alt="Family Assist Logo"
                className="h-9 sm:h-11 object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col sm:hidden">
                <span className="font-bold text-[#2B2A59] text-base leading-none">Family Assist</span>
                <span className="text-[10px] text-gray-500 font-medium">MSF Singapore</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex space-x-5 xl:space-x-7 text-[#2B2A59] font-bold text-sm h-full items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative py-7 px-1 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#2B2A59] font-extrabold border-b-3 border-[#FF7D00]'
                      : 'hover:text-[#FF7D00] text-[#2B2A59]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="text-[#2B2A59] hover:bg-gray-100 p-2 sm:px-3 sm:py-2 rounded-full flex items-center text-xs sm:text-sm font-bold border border-transparent hover:border-gray-200 transition"
              title="Search Portal (Ctrl+K)"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-1.5 text-[#2B2A59]" />
              <span className="hidden sm:inline tracking-wider">SEARCH</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2B2A59] hover:bg-gray-100 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
            Portal Navigation
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-bold text-left transition-colors ${
                  isActive
                    ? 'bg-[#373367] text-white'
                    : 'text-[#2B2A59] hover:bg-gray-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
