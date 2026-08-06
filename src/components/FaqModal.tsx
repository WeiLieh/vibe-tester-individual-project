import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'Who is required to attend the Mandatory Co-Parenting Programme (CPP)?',
      a: 'CPP is compulsory under Section 94A of the Women’s Act for parents filing for divorce in the Family Justice Courts who have at least one child below 21 years of age, unless both parties have reached a full agreement on all parenting issues.'
    },
    {
      q: 'Is there a fee for attending the CPP consultation?',
      a: 'No, the CPP e-Learning and consultation sessions are fully funded by the Ministry of Social and Family Development (MSF) and provided free of charge to eligible parents.'
    },
    {
      q: 'How long does the CPP consultation take?',
      a: 'The online e-Learning component takes approximately 10 to 15 minutes. The 1-on-1 consultation session with a FAM@FSC counsellor takes about 1 hour.'
    },
    {
      q: 'What happens if I do not complete the CPP before filing for divorce?',
      a: 'The Family Justice Courts will require proof of CPP completion (Certificate Reference) before your divorce writ can be accepted for filing.'
    },
    {
      q: 'What is the difference between civil divorces and Syariah Court divorces?',
      a: 'Divorces for civil marriages are handled by the Family Justice Courts under the Women’s Act. Syariah Court handles divorces for marriages registered under Muslim law (AMLA).'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#FF7D00] text-xs font-bold uppercase tracking-wider mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="text-2xl font-bold text-[#2B2A59] font-serif mb-4">
          Family Assist FAQs
        </h3>

        <div className="space-y-3 text-xs sm:text-sm max-h-[400px] overflow-y-auto pr-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-3.5 bg-gray-50 hover:bg-gray-100 font-bold text-gray-800 flex justify-between items-center transition"
              >
                <span>{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>
              {openIndex === idx && (
                <div className="p-3.5 bg-white text-gray-600 text-xs leading-relaxed border-t border-gray-100 animate-in fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#373367] text-white py-2 rounded font-bold text-xs hover:bg-[#2B2A59]"
        >
          Close FAQs
        </button>
      </div>
    </div>
  );
};
