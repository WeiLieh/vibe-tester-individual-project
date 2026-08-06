import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [feedbackType, setFeedbackType] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setEmail('');
    onClose();
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

        <h3 className="text-2xl font-bold text-[#2B2A59] font-serif mb-1">
          Contact Us / Feedback
        </h3>
        <p className="text-xs text-gray-600 mb-6">
          We welcome your questions, feedback, or suggestions to improve Family Assist services.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg text-center space-y-3 animate-in fade-in">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-gray-900 text-base">Feedback Received</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Thank you for reaching out to MSF Family Assist. A representative will respond to <strong>{email || 'your email'}</strong> within 3 working days.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 bg-[#373367] text-white px-5 py-2 rounded text-xs font-bold hover:bg-[#2B2A59]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Category</label>
              <select
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Mandatory Co-Parenting Programme (CPP)">Mandatory Co-Parenting Programme (CPP)</option>
                <option value="FAM@FSC Counselling Appointment">FAM@FSC Counselling Appointment</option>
                <option value="Website Usability Bug">Website Usability / Bug Report</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Your Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Your Message or Enquiry</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe your query or feedback in detail..."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#373367] text-white py-2.5 rounded font-bold hover:bg-[#2B2A59] transition flex items-center justify-center space-x-1"
            >
              <Send className="w-4 h-4 mr-1" />
              <span>Submit Feedback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
