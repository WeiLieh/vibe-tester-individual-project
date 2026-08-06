import React, { useState } from 'react';
import { Printer, Mail, Share2, Link, Check, Send } from 'lucide-react';

export const FloatingShareBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Mandatory Co-Parenting Programme (CPP) - Family Assist");
    const body = encodeURIComponent("Check out the Mandatory Co-Parenting Programme on Family Assist: " + window.location.href);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    showToast("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Mandatory Co-Parenting Programme (CPP) - Family Assist Singapore");
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0 hidden lg:flex flex-col space-y-3 bg-white/80 backdrop-blur-xs p-2 rounded-lg border border-gray-200 shadow-xs text-gray-500 z-10">
        <button
          onClick={handlePrint}
          className="p-2 hover:text-[#2B2A59] hover:bg-gray-100 rounded transition"
          title="Print page"
        >
          <Printer className="h-5 w-5" />
        </button>
        <button
          onClick={handleEmail}
          className="p-2 hover:text-[#2B2A59] hover:bg-gray-100 rounded transition"
          title="Email page"
        >
          <Mail className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleSocialShare('facebook')}
          className="p-2 hover:text-blue-600 hover:bg-gray-100 rounded transition"
          title="Share on Facebook"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </button>
        <button
          onClick={() => handleSocialShare('whatsapp')}
          className="p-2 hover:text-emerald-600 hover:bg-gray-100 rounded transition"
          title="Share on WhatsApp"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </button>
        <button
          onClick={() => handleSocialShare('telegram')}
          className="p-2 hover:text-sky-500 hover:bg-gray-100 rounded transition"
          title="Share on Telegram"
        >
          <Send className="h-5 w-5" />
        </button>
        <button
          onClick={handleCopy}
          className="p-2 hover:text-[#2B2A59] hover:bg-gray-100 rounded transition"
          title="Copy Link"
        >
          {copied ? <Check className="h-5 w-5 text-emerald-600" /> : <Link className="h-5 w-5" />}
        </button>
      </div>

      {/* Floating Toast Alert */}
      {toastMsg && (
        <div className="fixed top-24 right-6 bg-[#373367] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
          {toastMsg}
        </div>
      )}
    </>
  );
};
