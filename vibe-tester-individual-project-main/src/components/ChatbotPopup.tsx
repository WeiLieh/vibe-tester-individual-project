import React, { useState } from 'react';
import { X, Sparkles, MessageSquare } from 'lucide-react';

interface ChatbotPopupProps {
  onOpenAssistant: () => void;
}

export const ChatbotPopup: React.FC<ChatbotPopupProps> = ({
  onOpenAssistant,
}) => {
  const [closed, setClosed] = useState(false);
  const personImgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB4DlOCPJ1UDCLknC8kggvT2naOI9vuWdsPiD05PNdv789nKSUd-awuVs2hWDMXR-FnGovg1bEj8IDJImNF_SZP6MrW6ynS85bjG0IPXgC08qhYvyF2yVXe_ELCY9UAHN70ShoZGwIkhLKFlJxlxEV0TsSwJc1Hm2e6H0isjWoUhCv3cShs3LCkmjZXRWVjnqcJiaADWBoVMp02HTLKJe0wKffya8SxRkkUUA7ukmYqaF_oajVHWl4P";

  if (closed) {
    return (
      <button
        onClick={onOpenAssistant}
        className="fixed bottom-4 right-6 bg-[#373367] text-white px-4 py-3 rounded-full shadow-2xl z-40 flex items-center space-x-2 font-bold text-xs hover:bg-[#2B2A59] border border-white/20 transition group"
      >
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
        <span>Need guidance? Ask Family Assist</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-[#FFFDF5] rounded-t-xl shadow-2xl z-40 flex overflow-hidden border border-yellow-200/80 animate-in slide-in-from-bottom duration-300 w-11/12 max-w-[420px]">
      {/* Dismiss button */}
      <button
        onClick={() => setClosed(true)}
        className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200/50 transition z-10"
        aria-label="Close assistant pop-up"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Person graphic */}
      <div className="w-1/3 bg-yellow-100/70 flex items-end justify-center p-2 pt-4">
        <img
          src={personImgUrl}
          alt="Illustration of person seeking guidance"
          className="object-cover h-32 w-auto drop-shadow-xs"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content & Action */}
      <div className="w-2/3 p-5 flex flex-col justify-center">
        <div className="flex items-center space-x-1 text-xs font-bold text-[#FF7D00] uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Guide</span>
        </div>
        <h4 className="font-bold text-[#2B2A59] text-base mb-1 font-serif leading-snug">
          Not sure where to start?
        </h4>
        <p className="text-xs text-gray-600 mb-3.5 leading-relaxed">
          Let us help you find the right resources for your family situation.
        </p>
        <button
          onClick={onOpenAssistant}
          className="bg-[#373367] text-white px-5 py-2 rounded-full text-xs font-bold self-start hover:bg-[#2B2A59] transition flex items-center shadow-xs"
        >
          <span>Let's go</span>
          <MessageSquare className="w-3.5 h-3.5 ml-1.5" />
        </button>
      </div>
    </div>
  );
};
