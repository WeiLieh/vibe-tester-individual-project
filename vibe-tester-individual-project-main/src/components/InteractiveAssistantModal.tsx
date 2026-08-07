import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Phone, Calendar, FileText, ShieldAlert } from 'lucide-react';
import { TabType, SubPageType } from '../types';

interface InteractiveAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType, subPage?: SubPageType) => void;
  onOpenCounselling: () => void;
}

export const InteractiveAssistantModal: React.FC<InteractiveAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenCounselling,
}) => {
  const [step, setStep] = useState(1);
  const [situation, setSituation] = useState<string | null>(null);
  const [hasChildren, setHasChildren] = useState<boolean | null>(null);
  const [needSupport, setNeedSupport] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSituation(null);
    setHasChildren(null);
    setNeedSupport(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-gray-100 pb-4">
          <div className="text-xs font-bold text-[#FF7D00] uppercase tracking-wider mb-1">
            Family Assist Navigator
          </div>
          <h3 className="text-2xl font-bold text-[#2B2A59] font-serif">
            Find the Right Support for Your Family
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            Answer 3 quick questions to receive personalized government guidance and services.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-[#373367] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* Step 1: Situation */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-sm">
              1. What is your current situation or primary goal?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'divorce', label: 'I am planning to file for divorce in Singapore.' },
                { id: 'conflict', label: 'I am experiencing marital conflicts and considering my options.' },
                { id: 'enrichment', label: 'I want to strengthen or prepare for marriage with my spouse.' },
                { id: 'safety', label: 'I or my children require urgent safety or family protection.' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSituation(item.id);
                    setStep(2);
                  }}
                  className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                    situation === item.id
                      ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Children */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-sm">
              2. Do you have children below 21 years of age?
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setHasChildren(true);
                  setStep(3);
                }}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#373367] hover:bg-[#F8F4EC] text-center font-bold text-xs sm:text-sm text-[#2B2A59] transition"
              >
                Yes, I have minor children
              </button>
              <button
                onClick={() => {
                  setHasChildren(false);
                  setStep(3);
                }}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#373367] hover:bg-[#F8F4EC] text-center font-bold text-xs sm:text-sm text-[#2B2A59] transition"
              >
                No minor children
              </button>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-gray-500 hover:underline mt-2 inline-block"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Specific Goal & Recommendation */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-1">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                Your Recommended Action Plan
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Based on your selections, here are the official next steps and resources tailored for you.
              </p>
            </div>

            {/* Case A: Mandatory CPP */}
            {situation === 'divorce' && hasChildren && (
              <div className="border border-[#373367]/20 bg-[#F8F4EC] rounded-lg p-4 space-y-3">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-[#373367] mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#2B2A59] text-sm">
                      Mandatory Co-Parenting Programme (CPP) Requirement
                    </h5>
                    <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                      Under Singapore law, parents with children under 21 filing for divorce in the Family Justice Courts must complete the CPP prior to filing.
                    </p>
                  </div>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => {
                      onNavigate('proceeding-divorce', 'cpp-english');
                      onClose();
                    }}
                    className="bg-[#373367] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#2B2A59] flex items-center justify-center"
                  >
                    Start CPP Consultation
                  </button>
                  <button
                    onClick={() => {
                      onOpenCounselling();
                      onClose();
                    }}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-xs font-bold hover:bg-gray-50 flex items-center justify-center"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    Book FAM@FSC Counsellor
                  </button>
                </div>
              </div>
            )}

            {/* Case B: Safety / Protection */}
            {situation === 'safety' && (
              <div className="border border-red-200 bg-red-50 rounded-lg p-4 space-y-3">
                <div className="flex items-start">
                  <ShieldAlert className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-red-900 text-sm">Urgent Family Protection & Support</h5>
                    <p className="text-xs text-red-800 mt-1">
                      If you or your family are in immediate danger, please call 999 or contact the 24-hour NAVH helpline at 1800-777-0000.
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="tel:18007770000"
                    className="bg-red-600 text-white px-4 py-2 rounded text-xs font-bold hover:bg-red-700 inline-flex items-center"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    Call NAVH Helpline (1800-777-0000)
                  </a>
                </div>
              </div>
            )}

            {/* Case C: General Marital Conflict / Counselling */}
            {(situation === 'conflict' || (situation === 'divorce' && !hasChildren)) && (
              <div className="border border-blue-200 bg-blue-50/50 rounded-lg p-4 space-y-3">
                <h5 className="font-bold text-[#2B2A59] text-sm">
                  Marriage & Divorce Counselling Support
                </h5>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Confidential family counsellors at specialized FAM@FSC centres can help you navigate marital issues, emotional well-being, and asset division.
                </p>
                <button
                  onClick={() => {
                    onOpenCounselling();
                    onClose();
                  }}
                  className="bg-[#373367] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#2B2A59] flex items-center"
                >
                  Find Nearest FAM@FSC Centre
                </button>
              </div>
            )}

            {/* Case D: Marriage Enrichment */}
            {situation === 'enrichment' && (
              <div className="border border-amber-200 bg-amber-50/50 rounded-lg p-4 space-y-3">
                <h5 className="font-bold text-amber-900 text-sm">Strengthening Your Marriage</h5>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Explore marital enrichment courses, communication workshops, and pre-marriage preparation programs.
                </p>
                <button
                  onClick={() => {
                    onNavigate('strengthening-marriage', 'growing-marriage');
                    onClose();
                  }}
                  className="bg-[#373367] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#2B2A59]"
                >
                  View Marriage Enrichment Programs
                </button>
              </div>
            )}

            <div className="pt-2 flex justify-between items-center border-t border-gray-200">
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 hover:underline"
              >
                Start Over
              </button>
              <button
                onClick={onClose}
                className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
