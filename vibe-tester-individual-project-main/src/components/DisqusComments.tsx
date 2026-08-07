import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  activeTab?: string;
  subPage?: string;
}

export const DisqusComments: React.FC<DisqusCommentsProps> = ({ activeTab = 'home', subPage = 'main' }) => {
  const disqusShortname = 'weilieh';
  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : 'https://familyassist.msf.gov.sg',
    identifier: `familyassist-${activeTab}-${subPage}`,
    title: `Family Assist Portal - ${activeTab} (${subPage})`,
  };

  return (
    <section id="disqus_comments_section" className="bg-white border-t border-slate-200 py-10 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-[#2B2A59] font-serif flex items-center">
            <span className="w-2 h-6 bg-[#FF7D00] rounded-full mr-3 inline-block"></span>
            Comments & Feedback
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Leave your comments, questions, or feedback regarding the Mandatory Co-Parenting Programme and Family Assist services.
          </p>
        </div>
        <div className="bg-[#FBF9F8] p-6 rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
    </section>
  );
};
