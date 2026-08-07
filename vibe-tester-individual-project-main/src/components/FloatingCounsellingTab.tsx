import React from 'react';
import { HeartHandshake } from 'lucide-react';

interface FloatingCounsellingTabProps {
  onOpenCounselling: () => void;
}

export const FloatingCounsellingTab: React.FC<FloatingCounsellingTabProps> = ({
  onOpenCounselling,
}) => {
  return (
    <button
      onClick={onOpenCounselling}
      className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#2B608D] text-white py-3 px-1.5 rounded-l-md writing-vertical-rl text-xs sm:text-sm font-bold shadow-xl z-30 flex items-center h-48 justify-center hover:bg-[#1f486b] transition duration-200 border-l border-t border-b border-blue-300/30 group"
      style={{ writingMode: 'vertical-rl' }}
      title="Open Counselling & FAM@FSC Services"
    >
      <div className="flex items-center space-x-2">
        <HeartHandshake className="w-4 h-4 mb-2 text-yellow-300 transform -rotate-90 group-hover:scale-110 transition" />
        <span className="tracking-wide">Click here for Counselling Services</span>
      </div>
    </button>
  );
};
