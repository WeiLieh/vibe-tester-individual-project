import React, { useState } from 'react';
import { TabType, SubPageType, Language, TextSize } from './types';
import { GovBanner } from './components/GovBanner';
import { Header } from './components/Header';
import { ScamAlert } from './components/ScamAlert';
import { Breadcrumb } from './components/Breadcrumb';
import { HeroSection } from './components/HeroSection';
import { CPPOfferingPortal } from './components/CPPOfferingPortal';
import { SectionContent } from './components/SectionContent';
import { FloatingCounsellingTab } from './components/FloatingCounsellingTab';
import { ChatbotPopup } from './components/ChatbotPopup';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { InteractiveAssistantModal } from './components/InteractiveAssistantModal';
import { EligibilityCheckerModal } from './components/EligibilityCheckerModal';
import { CPPElearningModal } from './components/CPPElearningModal';
import { CounsellingDrawer } from './components/CounsellingDrawer';
import { FeedbackModal } from './components/FeedbackModal';
import { FaqModal } from './components/FaqModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('proceeding-divorce');
  const [subPage, setSubPage] = useState<SubPageType>('cpp-english');
  const [lang, setLang] = useState<Language>('en');
  const [textSize, setTextSize] = useState<TextSize>('normal');

  // Modal and drawer triggers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isElearningOpen, setIsElearningOpen] = useState(false);
  const [elearningLang, setElearningLang] = useState<'en' | 'zh'>('en');
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Navigation Helper
  const handleNavigate = (tab: TabType, targetSub?: SubPageType) => {
    setActiveTab(tab);
    if (targetSub) {
      setSubPage(targetSub);
    } else {
      if (tab === 'proceeding-divorce') setSubPage('cpp-english');
      else if (tab === 'making-decisions') setSubPage('decision-marriage');
      else if (tab === 'strengthening-marriage') setSubPage('growing-marriage');
      else if (tab === 'impact-divorce') setSubPage('impact-you');
      else if (tab === 'support-services') setSubPage('counselling');
      else setSubPage('about-us');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartElearning = (selectedLang: 'en' | 'zh') => {
    setElearningLang(selectedLang);
    setIsElearningOpen(true);
  };

  const handleNavigateNext = () => {
    if (subPage === 'cpp-english') {
      setSubPage('cpp-mandarin');
    } else {
      handleNavigate('impact-divorce', 'impact-children');
    }
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const getTextScaleClass = () => {
    if (textSize === 'large') return 'text-[105%]';
    if (textSize === 'xlarge') return 'text-[112%]';
    return '';
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${getTextScaleClass()}`}>
      {/* 1. Official Government Banner */}
      <GovBanner
        currentLang={lang}
        onLanguageChange={setLang}
        textSize={textSize}
        onTextSizeChange={setTextSize}
      />

      {/* 2. Main Portal Header & Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => handleNavigate(tab)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. ScamShield Warning Alert */}
      <ScamAlert />

      {/* 4. Dynamic Breadcrumb Navigation */}
      <Breadcrumb
        activeTab={activeTab}
        subPage={subPage}
        onNavigate={handleNavigate}
      />

      {/* 5. Hero Banner Section */}
      <HeroSection
        activeTab={activeTab}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* 6. Main Content Area */}
      <div className="flex-1">
        {activeTab === 'proceeding-divorce' ? (
          <CPPOfferingPortal
            subPage={subPage}
            onSelectSubPage={(sub) => setSubPage(sub)}
            onStartElearning={handleStartElearning}
            onNavigateNext={handleNavigateNext}
          />
        ) : (
          <SectionContent
            activeTab={activeTab}
            subPage={subPage}
            onOpenCounselling={() => setIsCounsellingOpen(true)}
            onStartCPP={() => handleNavigate('proceeding-divorce', 'cpp-english')}
          />
        )}
      </div>

      {/* 7. Floating Right Counselling Tab */}
      <FloatingCounsellingTab
        onOpenCounselling={() => setIsCounsellingOpen(true)}
      />

      {/* 8. Bottom Chatbot / Interactive Guidance Popup */}
      <ChatbotPopup
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* 9. Portal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onOpenFAQs={() => setIsFaqOpen(true)}
      />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <InteractiveAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onNavigate={handleNavigate}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
      />

      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onStartCPP={() => handleStartElearning('en')}
      />

      <CPPElearningModal
        isOpen={isElearningOpen}
        onClose={() => setIsElearningOpen(false)}
        lang={elearningLang}
      />

      <CounsellingDrawer
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />
    </div>
  );
}
