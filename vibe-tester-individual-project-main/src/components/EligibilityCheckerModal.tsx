import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';

interface EligibilityCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCPP: () => void;
}

export const EligibilityCheckerModal: React.FC<EligibilityCheckerModalProps> = ({
  isOpen,
  onClose,
  onStartCPP,
}) => {
  const [courtType, setCourtType] = useState<'fjc' | 'syariah' | null>(null);
  const [hasMinorChildren, setHasMinorChildren] = useState<boolean | null>(null);
  const [hasAgreement, setHasAgreement] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const isMandatory = courtType === 'fjc' && hasMinorChildren === true;

  const handleReset = () => {
    setCourtType(null);
    setHasMinorChildren(null);
    setHasAgreement(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#FF7D00] text-xs font-bold uppercase tracking-wider mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>CPP Requirements Assessment</span>
        </div>
        <h3 className="text-2xl font-bold text-[#2B2A59] font-serif mb-2">
          Do I need to complete the CPP?
        </h3>
        <p className="text-xs text-gray-600 mb-6">
          Answer the following 3 criteria to check if completion of the Mandatory Co-Parenting Programme is required before filing your court application.
        </p>

        <div className="space-y-5 text-xs sm:text-sm">
          {/* Question 1 */}
          <div>
            <p className="font-bold text-gray-800 mb-2">
              1. Which court will your divorce application be filed with?
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCourtType('fjc')}
                className={`p-3 rounded-lg border text-left font-medium transition ${
                  courtType === 'fjc'
                    ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                Family Justice Courts (FJC)
              </button>
              <button
                onClick={() => setCourtType('syariah')}
                className={`p-3 rounded-lg border text-left font-medium transition ${
                  courtType === 'syariah'
                    ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                Syariah Court (Muslim Marriage)
              </button>
            </div>
          </div>

          {/* Question 2 */}
          {courtType && (
            <div className="animate-in fade-in">
              <p className="font-bold text-gray-800 mb-2">
                2. Do you have any biological or legally adopted children under 21 years old?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setHasMinorChildren(true)}
                  className={`p-3 rounded-lg border text-left font-medium transition ${
                    hasMinorChildren === true
                      ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  Yes, children under 21
                </button>
                <button
                  onClick={() => setHasMinorChildren(false)}
                  className={`p-3 rounded-lg border text-left font-medium transition ${
                    hasMinorChildren === false
                      ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  No children under 21
                </button>
              </div>
            </div>
          )}

          {/* Question 3 */}
          {courtType === 'fjc' && hasMinorChildren === true && (
            <div className="animate-in fade-in">
              <p className="font-bold text-gray-800 mb-2">
                3. Have both parties reached a full agreement on all parenting and custody matters?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setHasAgreement(true)}
                  className={`p-3 rounded-lg border text-left font-medium transition ${
                    hasAgreement === true
                      ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  Yes (Simplified track)
                </button>
                <button
                  onClick={() => setHasAgreement(false)}
                  className={`p-3 rounded-lg border text-left font-medium transition ${
                    hasAgreement === false
                      ? 'border-[#373367] bg-[#F8F4EC] text-[#2B2A59] font-bold ring-1 ring-[#373367]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  No (Uncontested/Contested)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Result summary */}
        {courtType !== null && hasMinorChildren !== null && (
          <div className="mt-6 pt-4 border-t border-gray-200 animate-in fade-in">
            {isMandatory ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-amber-900 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                  CPP is MANDATORY for your case
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  You must complete the Mandatory Co-Parenting Programme consultation before filing your divorce writ at the Family Justice Courts.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onStartCPP();
                  }}
                  className="mt-2 w-full bg-[#373367] text-white py-2.5 rounded font-bold text-xs hover:bg-[#2B2A59] flex items-center justify-center space-x-1"
                >
                  <span>Proceed to Complete CPP Online</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ) : courtType === 'syariah' ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                <p className="font-bold text-blue-900 text-sm">Syariah Court Procedure</p>
                <p className="text-xs text-blue-800">
                  For couples in a Muslim marriage, divorce proceedings fall under the Syariah Court. Please visit the official Syariah Court portal for Marriage Counselling Programme (MCP) details.
                </p>
                <a
                  href="https://www.syariahcourt.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-blue-700 font-bold underline mt-1"
                >
                  Visit Syariah Court Website →
                </a>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-gray-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
                  CPP is NOT required for your case
                </div>
                <p className="text-xs text-gray-600">
                  Since you do not have children below 21 years old, the CPP is not legally mandatory before filing for divorce.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex justify-between items-center text-xs">
          <button onClick={handleReset} className="text-gray-500 hover:underline">
            Reset Answers
          </button>
          <button onClick={onClose} className="text-gray-700 font-bold hover:underline">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
