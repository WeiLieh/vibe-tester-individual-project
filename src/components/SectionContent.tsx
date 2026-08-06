import React from 'react';
import { TabType, SubPageType } from '../types';
import { Heart, Scale, Users, Home, DollarSign, ShieldAlert, BookOpen, PhoneCall, ArrowRight, ExternalLink } from 'lucide-react';
import { FAM_CENTRES, HELPLINES } from '../data/portalData';

interface SectionContentProps {
  activeTab: TabType;
  subPage: SubPageType;
  onOpenCounselling: () => void;
  onStartCPP: () => void;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  activeTab,
  onOpenCounselling,
  onStartCPP,
}) => {
  if (activeTab === 'making-decisions') {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2B2A59] font-serif mb-2">Making Decisions About Your Marriage</h2>
          <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>
          <p className="text-gray-700 text-base max-w-3xl leading-relaxed">
            Navigating marital challenges can be emotionally draining. Before taking formal legal steps, explore counselling, personal reflection guides, and support systems available in Singapore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Option 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#373367] flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2B2A59] font-serif">Marriage Counselling & Reconciliation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Work with licensed marriage therapists at FAM@FSC centres to address communication breakdowns, trust issues, and conflict resolution.
            </p>
            <button
              onClick={onOpenCounselling}
              className="text-xs text-blue-700 font-bold hover:underline inline-flex items-center"
            >
              Book FAM@FSC Counselling Session <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2B2A59] font-serif">Legal Considerations & Consultation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Understand the legal grounds for divorce in Singapore under the Women's Act and the mandatory pre-filing requirements.
            </p>
            <button
              onClick={onStartCPP}
              className="text-xs text-blue-700 font-bold hover:underline inline-flex items-center"
            >
              Check CPP Pre-filing Requirements <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2B2A59] font-serif">Seeking Safety & Emergency Shelters</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If you or your children face domestic violence or safety threats, access Personal Protection Orders (PPO) and crisis helplines immediately.
            </p>
            <a
              href="tel:18007770000"
              className="text-xs text-red-700 font-bold hover:underline inline-flex items-center"
            >
              Call 24/7 NAVH Hotline (1800-777-0000) <PhoneCall className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </main>
    );
  }

  if (activeTab === 'strengthening-marriage') {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2B2A59] font-serif mb-2">Strengthening Your Marriage</h2>
          <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>
          <p className="text-gray-700 text-base max-w-3xl leading-relaxed">
            Every marriage goes through seasons of growth and trial. MSF supports couples at every stage with evidence-based enrichment workshops and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F8F4EC] p-6 rounded-xl border border-[#EAE3D2] space-y-3">
            <h3 className="text-xl font-bold text-[#2B2A59] font-serif">Pre-Marital Preparation Courses</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Build a solid foundation before marriage with MSF-supported workshops focusing on financial planning, in-law relationships, and conflict management.
            </p>
            <ul className="text-xs space-y-1.5 text-gray-600 list-disc list-inside">
              <li>Marriage Preparation Programme for Newlyweds</li>
              <li>FOCCUS Pre-Marital Assessment</li>
              <li>Support for Inter-cultural & Inter-faith marriages</li>
            </ul>
          </div>

          <div className="bg-[#F8F4EC] p-6 rounded-xl border border-[#EAE3D2] space-y-3">
            <h3 className="text-xl font-bold text-[#2B2A59] font-serif">Marital Enrichment Workshops</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Designed for couples married 2 to 20+ years seeking to rekindle intimacy, balance parenting duties, and deepen emotional connection.
            </p>
            <button
              onClick={onOpenCounselling}
              className="mt-2 bg-[#373367] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#2B2A59]"
            >
              Enquire at Nearest FAM@FSC
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (activeTab === 'impact-divorce') {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2B2A59] font-serif mb-2">Impact of Divorce</h2>
          <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>
          <p className="text-gray-700 text-base max-w-3xl leading-relaxed">
            Divorce affects emotional well-being, child development, living arrangements, and financial futures. Understanding these impacts helps you make informed choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Impact 1 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-2">
            <Users className="w-6 h-6 text-[#FF7D00]" />
            <h3 className="font-bold text-[#2B2A59] text-base font-serif">Impact on Children</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Children need stability, reassurance, and healthy co-parenting relationships during marital separation.
            </p>
          </div>

          {/* Impact 2 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-2">
            <Home className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-[#2B2A59] text-base font-serif">Impact on Housing</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Understand HDB flat ownership rules, surrender/transfer policies, and single-parent rental eligibility.
            </p>
          </div>

          {/* Impact 3 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-2">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            <h3 className="font-bold text-[#2B2A59] text-base font-serif">Impact on Finances</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Division of matrimonial assets, CPF contributions, and spousal/child maintenance rules.
            </p>
          </div>

          {/* Impact 4 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-2">
            <Heart className="w-6 h-6 text-purple-600" />
            <h3 className="font-bold text-[#2B2A59] text-base font-serif">Impact on Emotional Health</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Managing stress, grief, and emotional recovery with support groups and professional counselling.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (activeTab === 'support-services') {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2B2A59] font-serif mb-2">Support Services & Centres</h2>
          <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>
          <p className="text-gray-700 text-base max-w-3xl leading-relaxed">
            Specialized Family Service Centres (FAM@FSC) and Divorce Support Specialist Agencies (DSSAs) are located across Singapore to provide professional assistance.
          </p>
        </div>

        {/* Directory of FAM@FSC */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs mb-10">
          <h3 className="text-xl font-bold text-[#2B2A59] font-serif mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-[#FF7D00]" />
            FAM@FSC Centre Directory
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAM_CENTRES.map((centre) => (
              <div key={centre.name} className="p-4 bg-[#F8F4EC] border border-[#EAE3D2] rounded-lg space-y-1 text-xs">
                <span className="bg-[#373367] text-white px-2 py-0.5 rounded font-bold text-[10px]">
                  {centre.region}
                </span>
                <h4 className="font-bold text-gray-900 text-sm mt-1">{centre.name}</h4>
                <p className="text-gray-600">{centre.address}</p>
                <p className="text-gray-700"><strong>Tel:</strong> {centre.phone}</p>
                <p className="text-gray-700"><strong>Email:</strong> {centre.email}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // About Tab
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#2B2A59] font-serif mb-2">About Family Assist</h2>
        <div className="w-24 border-b-4 border-[#FF7D00] mb-6"></div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4 text-sm text-gray-700 leading-relaxed max-w-3xl">
          <p>
            <strong>Family Assist</strong> is a comprehensive Singapore Government portal developed collaboratively by the <strong>Ministry of Social and Family Development (MSF)</strong> and the <strong>Family Justice Courts (FJC)</strong>.
          </p>
          <p>
            Our mission is to empower families with accessible, timely, and empathetic guidance during critical life transitions—whether strengthening a marriage, addressing marital disputes, or navigating divorce proceedings while safeguarding children's best interests.
          </p>
          <div className="p-4 bg-[#F8F4EC] rounded-lg border border-[#EAE3D2]">
            <p className="font-bold text-[#2B2A59]">Contact & Feedback</p>
            <p className="text-xs text-gray-600 mt-1">For general enquiries regarding Family Assist services, please email MSF_FamilyServices@msf.gov.sg or call the ComCare Hotline at 1800-111-2222.</p>
          </div>
        </div>
      </div>
    </main>
  );
};
