import React, { useState } from 'react';
import { ArrowUp, Phone, Check, ExternalLink, HelpCircle, MessageSquare } from 'lucide-react';
import { TabType, SubPageType } from '../types';
import { HELPLINES } from '../data/portalData';

interface FooterProps {
  onNavigate: (tab: TabType, subPage?: SubPageType) => void;
  onOpenFeedback: () => void;
  onOpenFAQs: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenFeedback,
  onOpenFAQs,
}) => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyPhoneNumber = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <footer className="bg-[#373367] text-white pt-12 pb-8 mt-16 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-serif tracking-tight">Family Assist</h2>
          <p className="text-xs text-gray-300 mt-1">A Singapore Government Initiative</p>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 border-b border-gray-600/60 pb-12">
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Making Decisions</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('making-decisions', 'decision-marriage')}
                  className="hover:text-white hover:underline text-left"
                >
                  Making a Decision About Your Marriage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('making-decisions', 'seeking-safety')}
                  className="hover:text-white hover:underline text-left"
                >
                  Seeking Safety & Protection
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Strengthening Your Marriage</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('strengthening-marriage', 'growing-marriage')}
                  className="hover:text-white hover:underline text-left"
                >
                  Growing Your Marriage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('strengthening-marriage', 'marriage-preparation')}
                  className="hover:text-white hover:underline text-left"
                >
                  Pre-Marital Preparation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Proceeding with Divorce</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('proceeding-divorce', 'cpp-english')}
                  className="hover:text-white hover:underline text-left font-semibold text-yellow-300"
                >
                  Mandatory Co-Parenting Programme (CPP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proceeding-divorce', 'divorce-proceedings')}
                  className="hover:text-white hover:underline text-left"
                >
                  Family Justice Courts Proceedings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Impact of Divorce</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('impact-divorce', 'impact-you')}
                  className="hover:text-white hover:underline text-left"
                >
                  Impact of Divorce on You
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact-divorce', 'impact-children')}
                  className="hover:text-white hover:underline text-left"
                >
                  Impact of Divorce on Children
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact-divorce', 'impact-finance')}
                  className="hover:text-white hover:underline text-left"
                >
                  Impact of Divorce on Finance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact-divorce', 'impact-housing')}
                  className="hover:text-white hover:underline text-left"
                >
                  Impact of Divorce on Housing
                </button>
              </li>
            </ul>
          </div>

          {/* Helplines Container Box */}
          <div className="lg:col-span-2 bg-[#E8EAE2] text-[#2B2A59] p-6 rounded-xl shadow-md space-y-4">
            <h3 className="font-bold text-lg border-b border-gray-400/30 pb-2 flex items-center justify-between">
              <span>Helplines</span>
              <Phone className="w-4 h-4 text-[#373367]" />
            </h3>

            {HELPLINES.map((item) => (
              <div key={item.name} className="text-xs space-y-0.5">
                <p className="font-bold text-gray-900">{item.name}</p>
                <div className="flex items-center space-x-2">
                  <a
                    href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-blue-900 text-sm hover:underline"
                  >
                    {item.phone}
                  </a>
                  {item.whatsapp && (
                    <span className="text-gray-600">
                      (WhatsApp: <a href={`https://wa.me/65${item.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline font-semibold">{item.whatsapp}</a>)
                    </span>
                  )}
                  <button
                    onClick={() => copyPhoneNumber(item.phone)}
                    className="text-[10px] text-gray-600 hover:text-black underline ml-1"
                    title="Copy phone number"
                  >
                    {copiedPhone === item.phone ? <Check className="w-3 h-3 text-emerald-700 inline" /> : 'copy'}
                  </button>
                </div>
                {item.notes && <p className="text-[11px] text-gray-600 italic">{item.notes}</p>}
              </div>
            ))}

            <p className="text-[10px] text-gray-600 italic pt-2 border-t border-gray-300">
              Airtime charges apply for mobile calls to 1800 service lines.
            </p>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <button
              onClick={onOpenFeedback}
              className="hover:text-white font-bold text-sm flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-yellow-300" />
              <span>Contact Us/Feedback</span>
            </button>
            <button
              onClick={onOpenFAQs}
              className="hover:text-white font-bold text-sm flex items-center space-x-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-yellow-300" />
              <span>FAQs</span>
            </button>
          </div>

          <div className="text-right text-[11px] text-gray-400">
            <p>© 2026 Government of Singapore</p>
            <p>Last updated 04 Aug 2026</p>
          </div>
        </div>

        {/* Secondary Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 mt-6 border-t border-gray-600/60 pt-6">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Reporting Vulnerability: Contact MSF Cyber Security at MSF_Vulnerability@msf.gov.sg"); }} className="hover:text-white">
              Report Vulnerability
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms of Use: Family Assist is an official government service portal provided by the Ministry of Social and Family Development."); }} className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Statement: We adhere strictly to the Public Sector (Governance) Act to protect all citizen personal data."); }} className="hover:text-white">
              Privacy Statement
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Sitemap: Family Assist Portal includes Making Decisions, Marriage Preparation, CPP, Housing/Financial Impact, and FAM@FSC Counselling Directory."); }} className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 border-2 border-white rounded-full w-11 h-11 bg-[#373367] text-white flex flex-col items-center justify-center hover:bg-white hover:text-[#373367] transition z-40 shadow-xl group"
        title="Back to Top"
      >
        <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition" />
        <span className="text-[9px] font-bold mt-0.5 leading-none">TOP</span>
      </button>
    </footer>
  );
};
