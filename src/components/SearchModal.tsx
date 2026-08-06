import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { TabType, SubPageType, SearchResult } from '../types';
import { SEARCH_INDEX } from '../data/portalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType, subPage?: SubPageType) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setSelectedCategory('All');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = ['All', 'Proceeding with Divorce', 'Making Decisions', 'Impact of Divorce', 'Support Services'];

  const filteredResults = SEARCH_INDEX.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = query === '' || 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden relative animate-in fade-in zoom-in-95 my-4">
        {/* Search Input Bar */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center space-x-3">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Family Assist (e.g. CPP, counselling, HDB flat, custody)..."
            className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-200 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="px-4 py-2.5 bg-white border-b border-gray-100 flex items-center space-x-1.5 overflow-x-auto text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition font-medium ${
                selectedCategory === cat
                  ? 'bg-[#373367] text-white font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-xs">
              No matching resources found for "{query}". Try keywords like "CPP", "divorce", "counselling", or "Syariah".
            </div>
          ) : (
            filteredResults.map((result) => (
              <button
                key={result.id}
                onClick={() => {
                  onNavigate(result.tab, result.subPage);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-lg border border-gray-100 hover:border-[#373367]/30 hover:bg-[#F8F4EC]/60 transition group flex items-start justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#FF7D00] uppercase tracking-wider block mb-0.5">
                    {result.category}
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#2B2A59]">
                    {result.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                    {result.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#373367] flex-shrink-0 ml-3 mt-1" />
              </button>
            ))
          )}
        </div>

        {/* Keyboard shortcut hint footer */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span>Tip: Click any resource to navigate directly</span>
          <span className="flex items-center">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
