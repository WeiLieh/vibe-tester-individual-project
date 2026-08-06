import React from 'react';
import { TabType, SubPageType } from '../types';

interface BreadcrumbProps {
  activeTab: TabType;
  subPage: SubPageType;
  onNavigate: (tab: TabType, subPage?: SubPageType) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  activeTab,
  subPage,
  onNavigate,
}) => {
  const getBreadcrumbItems = () => {
    switch (activeTab) {
      case 'proceeding-divorce':
        return [
          { label: 'Proceeding with Divorce', tab: 'proceeding-divorce' as TabType },
          { label: 'Divorce Proceedings', tab: 'proceeding-divorce' as TabType, sub: 'divorce-proceedings' as SubPageType },
          { label: 'Mandatory Co-Parenting Programme (CPP)', active: true },
        ];
      case 'making-decisions':
        return [
          { label: 'Making Decisions', tab: 'making-decisions' as TabType },
          { label: 'Decision Guide & Counselling', active: true },
        ];
      case 'strengthening-marriage':
        return [
          { label: 'Strengthening Your Marriage', tab: 'strengthening-marriage' as TabType },
          { label: 'Programs & Guidance', active: true },
        ];
      case 'impact-divorce':
        return [
          { label: 'Impact of Divorce', tab: 'impact-divorce' as TabType },
          { label: 'Impact on Children & Housing', active: true },
        ];
      case 'support-services':
        return [
          { label: 'Support Services', tab: 'support-services' as TabType },
          { label: 'FAM@FSC & Helplines', active: true },
        ];
      case 'about':
        return [
          { label: 'About', tab: 'about' as TabType },
          { label: 'About Family Assist', active: true },
        ];
      default:
        return [{ label: 'Proceeding with Divorce', active: true }];
    }
  };

  const items = getBreadcrumbItems();

  return (
    <div className="bg-hero-tan pt-4 pb-2 border-b border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 space-x-2">
          <button
            onClick={() => onNavigate('proceeding-divorce', 'cpp-english')}
            className="hover:underline text-gray-600 hover:text-[#2B2A59]"
          >
            Home
          </button>
          <span>&gt;</span>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.active ? (
                <span className="font-bold text-gray-800">{item.label}</span>
              ) : (
                <>
                  <button
                    onClick={() => onNavigate(item.tab!, item.sub)}
                    className="hover:underline text-gray-600 hover:text-[#2B2A59]"
                  >
                    {item.label}
                  </button>
                  <span>&gt;</span>
                </>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};
