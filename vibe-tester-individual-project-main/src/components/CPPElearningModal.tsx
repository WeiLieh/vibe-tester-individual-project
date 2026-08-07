import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Video, Calendar, Award, ArrowRight, UserCheck } from 'lucide-react';
import { FAM_CENTRES } from '../data/portalData';

interface CPPElearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh' | 'ms' | 'ta';
}

export const CPPElearningModal: React.FC<CPPElearningModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeStep, setActiveStep] = useState(1);
  const [singpassVerified, setSingpassVerified] = useState(false);
  const [nricInput, setNricInput] = useState('');
  const [userName, setUserName] = useState('');
  const [numChildren, setNumChildren] = useState('1');
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [selectedCentre, setSelectedCentre] = useState(FAM_CENTRES[0].name);
  const [selectedDate, setSelectedDate] = useState('2026-08-18');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [certificateIssued, setCertificateIssued] = useState(false);

  if (!isOpen) return null;

  const handleSingpassVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nricInput || !userName) return;
    setSingpassVerified(true);
    setActiveStep(2);
  };

  const handleFinishVideo = () => {
    setVideoCompleted(true);
    setActiveStep(3);
  };

  const handleBookAppointment = () => {
    setCertificateIssued(true);
    setActiveStep(4);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 my-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Portal Header */}
        <div className="flex items-center space-x-2 text-xs font-bold text-[#FF7D00] uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Official MSF E-Services Portal</span>
        </div>
        <h3 className="text-2xl font-bold text-[#2B2A59] font-serif mb-2">
          {lang === 'zh' ? '完成强制性共同育儿辅导计划 (CPP)' : 'Mandatory Co-Parenting Programme (CPP) e-Services'}
        </h3>
        <p className="text-xs text-gray-600 mb-6">
          Official digital portal for Family Justice Courts pre-divorce co-parenting consultation.
        </p>

        {/* Stepper Header */}
        <div className="grid grid-cols-4 gap-2 mb-8 text-center text-[11px] sm:text-xs">
          {[
            { step: 1, label: 'Identity Verification' },
            { step: 2, label: 'E-Learning Module' },
            { step: 3, label: 'Counsellor Booking' },
            { step: 4, label: 'CPP Certificate' },
          ].map((s) => (
            <div
              key={s.step}
              className={`p-2 rounded-lg border font-semibold flex flex-col items-center transition ${
                activeStep === s.step
                  ? 'bg-[#373367] text-white border-[#373367]'
                  : activeStep > s.step
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-gray-50 text-gray-400 border-gray-200'
              }`}
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center mb-1 text-[10px] font-bold border border-current">
                {activeStep > s.step ? '✓' : s.step}
              </div>
              <span className="leading-tight hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Verification */}
        {activeStep === 1 && (
          <form onSubmit={handleSingpassVerify} className="space-y-4 animate-in fade-in">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 text-white font-black text-xs rounded-md flex items-center justify-center">
                  singpass
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">Singpass Login Mock</p>
                  <p className="text-[11px] text-gray-600">Enter your details to retrieve marital & child records.</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name (as in NRIC/Passport)</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Tan Ah Kow"
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">NRIC / FIN Number</label>
                <input
                  type="text"
                  required
                  value={nricInput}
                  onChange={(e) => setNricInput(e.target.value)}
                  placeholder="e.g. S1234567A"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Number of Children under 21</label>
                <select
                  value={numChildren}
                  onChange={(e) => setNumChildren(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367] focus:outline-none"
                >
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                  <option value="4+">4 or more Children</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#373367] text-white py-2.5 rounded font-bold text-xs hover:bg-[#2B2A59] transition flex items-center justify-center space-x-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Verify Singpass & Continue</span>
            </button>
          </form>
        )}

        {/* Step 2: E-Learning Video */}
        {activeStep === 2 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-[#F8F4EC] border border-[#EAE3D2] p-4 rounded-lg">
              <h4 className="font-bold text-[#2B2A59] text-sm mb-1 flex items-center">
                <Video className="w-4 h-4 mr-1.5 text-[#FF7D00]" />
                Co-Parenting Educational Module (Duration: ~5 mins)
              </h4>
              <p className="text-xs text-gray-600">
                Welcome, <strong>{userName}</strong> (NRIC: {nricInput}). Please watch this video explaining child psychology, custody arrangements, and minimizing trauma for children during marital transitions.
              </p>
            </div>

            {/* Video Player Placeholder / Interactive Simulation */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center justify-center text-white p-4">
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center mb-3">
                <Video className="w-8 h-8 text-yellow-400" />
              </div>
              <p className="font-bold text-sm text-center">Singapore MSF Co-Parenting Programme Video</p>
              <p className="text-xs text-gray-300 mt-1">Topic: "Prioritising Children's Needs in Family Decisions"</p>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-between text-xs">
                <span>Progress: 100% Completed</span>
                <span className="text-emerald-400 font-bold">✓ Verified</span>
              </div>
            </div>

            <button
              onClick={handleFinishVideo}
              className="w-full bg-[#373367] text-white py-2.5 rounded font-bold text-xs hover:bg-[#2B2A59] transition flex items-center justify-center space-x-2"
            >
              <span>Complete Module & Schedule Counsellor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 3: Counsellor Booking */}
        {activeStep === 3 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-lg text-xs text-blue-900">
              <p className="font-bold">Schedule 1-on-1 Consultation Session</p>
              <p className="mt-0.5">Select a FAM@FSC centre nearest to your home for your confidential counselling consultation.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Select FAM@FSC Centre</label>
              <select
                value={selectedCentre}
                onChange={(e) => setSelectedCentre(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
              >
                {FAM_CENTRES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.region})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Appointment Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Time Slot</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#373367]"
                >
                  <option value="10:00 AM">10:00 AM - 11:30 AM</option>
                  <option value="02:00 PM">02:00 PM - 03:30 PM</option>
                  <option value="04:00 PM">04:00 PM - 05:30 PM</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleBookAppointment}
              className="w-full bg-[#373367] text-white py-2.5 rounded font-bold text-xs hover:bg-[#2B2A59] transition flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Appointment & Generate Certificate</span>
            </button>
          </div>
        )}

        {/* Step 4: Digital Certificate */}
        {activeStep === 4 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="border-2 border-dashed border-emerald-500 bg-emerald-50/50 p-6 rounded-xl text-center space-y-3">
              <Award className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#2B2A59] text-lg font-serif">
                CPP Completion Certificate Issued
              </h4>
              <p className="text-xs text-gray-700 max-w-md mx-auto">
                This certifies that <strong>{userName}</strong> (NRIC: {nricInput}) has completed the e-Learning requirement and scheduled the mandatory consultation session.
              </p>

              <div className="bg-white p-3 rounded border border-emerald-200 text-xs text-left max-w-md mx-auto space-y-1">
                <p><strong>Reference No:</strong> CPP-2026-FJC-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong>Allocated Centre:</strong> {selectedCentre}</p>
                <p><strong>Consultation Date:</strong> {selectedDate} at {selectedTime}</p>
                <p><strong>Court Filing Status:</strong> <span className="text-emerald-700 font-bold">Cleared for Family Justice Courts filing</span></p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#373367] text-white py-2.5 rounded font-bold text-xs hover:bg-[#2B2A59]"
            >
              Return to Family Assist Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
