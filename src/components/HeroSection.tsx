import React from 'react';
import { TabType } from '../types';

interface HeroSectionProps {
  activeTab: TabType;
  onOpenEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeTab,
  onOpenEligibility,
}) => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuArm8owpWOAxuxcWgIfCv4PcdeNz3paIC9cd4t8r_FNqgQsZju2mcs693amYgxM62QTkQDZu5mCgvzG4V-ZsYPCY-pe3GhxA01U_k6ChOeT4cM1q0rNWBkSnCO9jPAmEpedPhyBZEphiq5AJS-0DeJgRG-mYhi4dfpvw1_W61YTVACg0dKhg3chEKHauS8WqrkV8--JK-FXR178TCWpA9vQY1a3RkRLTMmpjDGKSncaxOFcuSsRx-Hz";

  const getHeroContent = () => {
    switch (activeTab) {
      case 'making-decisions':
        return {
          title: 'Making Decisions About Your Marriage',
          subtitle: 'Reflecting on your relationship, seeking marriage counselling, or finding safety during times of crisis. We are here to support your family every step of the way.'
        };
      case 'strengthening-marriage':
        return {
          title: 'Strengthening Your Marriage',
          subtitle: 'Discover workshops, pre-marital counselling, and enrichment programs designed to build resilience and deepen commitment in your marriage.'
        };
      case 'impact-divorce':
        return {
          title: 'Understanding the Impact of Divorce',
          subtitle: 'Learn how divorce affects children, housing eligibility, maintenance, and long-term financial stability, with legal and emotional guidance.'
        };
      case 'support-services':
        return {
          title: 'Support Services & Counselling Directory',
          subtitle: 'Access professional counsellors, FAM@FSC community centres, and 24-hour crisis helplines across Singapore.'
        };
      case 'about':
        return {
          title: 'About Family Assist',
          subtitle: 'An initiative by the Ministry of Social and Family Development (MSF) and Family Justice Courts to support families through life transitions.'
        };
      case 'proceeding-divorce':
      default:
        return {
          title: 'Mandatory Co-Parenting Programme (CPP)',
          subtitle: 'Understand your marital situation and the impact of divorce on you and your children. You will also receive personalised support from a counsellor during the CPP consultation.'
        };
    }
  };

  const content = getHeroContent();

  return (
    <section className="bg-slate-50 border-b border-slate-200 pb-10 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif leading-tight">
            {content.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-6">
            {content.subtitle}
          </p>
          
          {activeTab === 'proceeding-divorce' && (
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenEligibility}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-xs flex items-center transition"
              >
                <span>Check if CPP applies to you</span>
                <span className="ml-2 font-mono">→</span>
              </button>
            </div>
          )}
        </div>

        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <img
              src={heroImageUrl}
              alt="Illustration of counselling session for Mandatory Co-Parenting Programme"
              className="max-w-full h-auto max-h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
