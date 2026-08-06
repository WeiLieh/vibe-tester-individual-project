import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Calendar, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { FAM_CENTRES, HELPLINES } from '../data/portalData';

interface CounsellingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CounsellingDrawer: React.FC<CounsellingDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCentre, setSelectedCentre] = useState(FAM_CENTRES[0].name);

  if (!isOpen) return null;

  const regions = ['All', 'North', 'West', 'East', 'Central/North-East'];

  const filteredCentres = FAM_CENTRES.filter(
    (c) => selectedRegion === 'All' || c.region === selectedRegion
  );

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-2xs flex justify-end">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="bg-[#373367] text-white p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-1">
              <HeartHandshake className="w-4 h-4" />
              <span>Counselling & Support Services</span>
            </div>
            <h3 className="text-2xl font-bold font-serif">FAM@FSC Counselling Services</h3>
            <p className="text-xs text-gray-200 mt-1">
              Professional, confidential support for families, couples, and children.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Helpline Callout */}
          <div className="bg-[#FFF8E7] border border-amber-200 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-[#2B2A59] text-sm flex items-center">
              <Phone className="w-4 h-4 mr-2 text-amber-600" />
              Immediate Crisis Helplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded border border-amber-100">
                <p className="font-bold text-gray-800">ComCare Hotline</p>
                <a href="tel:18001112222" className="text-blue-700 font-bold underline">1800-111-2222</a>
              </div>
              <div className="bg-white p-2.5 rounded border border-amber-100">
                <p className="font-bold text-gray-800">NAVH Anti-Violence</p>
                <a href="tel:18007770000" className="text-blue-700 font-bold underline">1800-777-0000</a>
              </div>
            </div>
          </div>

          {/* Booking Request Form */}
          <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-3">
            <h4 className="font-bold text-[#2B2A59] text-base font-serif">
              Request a Counselling Intake Callback
            </h4>
            
            {bookingSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-emerald-900 text-xs space-y-2 animate-in fade-in">
                <div className="flex items-center font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  Request Submitted Successfully
                </div>
                <p>
                  Thank you, <strong>{name}</strong>. A intake officer from <strong>{selectedCentre}</strong> will contact you at <strong>{phone}</strong> within 1-2 working days.
                </p>
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="text-xs text-emerald-800 font-bold underline mt-1"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lee Wei Ming"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-[#373367]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9123 4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-[#373367]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Preferred Centre</label>
                    <select
                      value={selectedCentre}
                      onChange={(e) => setSelectedCentre(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-[#373367]"
                    >
                      {FAM_CENTRES.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#373367] text-white py-2.5 rounded font-bold hover:bg-[#2B2A59] transition flex items-center justify-center space-x-1"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Request Callback</span>
                </button>
              </form>
            )}
          </div>

          {/* FAM@FSC Directory List */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-[#2B2A59] text-sm">Specialized FAM@FSC Centres</h4>
              <div className="flex space-x-1">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                      selectedRegion === reg
                        ? 'bg-[#373367] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredCentres.map((centre) => (
                <div key={centre.name} className="p-4 bg-white rounded-lg border border-gray-200 text-xs space-y-1.5 shadow-2xs">
                  <span className="inline-block bg-[#373367] text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    {centre.region}
                  </span>
                  <h5 className="font-bold text-gray-900 text-sm">{centre.name}</h5>
                  <p className="text-gray-600 flex items-start">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>{centre.address}</span>
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1 text-gray-700">
                    <a href={`tel:${centre.phone}`} className="flex items-center text-blue-700 hover:underline font-bold">
                      <Phone className="w-3.5 h-3.5 mr-1" /> {centre.phone}
                    </a>
                    <a href={`mailto:${centre.email}`} className="flex items-center text-blue-700 hover:underline">
                      <Mail className="w-3.5 h-3.5 mr-1" /> Email Centre
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
          For urgent psychiatric emergencies, please visit the nearest hospital Emergency Department or call IMH Helpline at 6389 2222.
        </div>
      </div>
    </div>
  );
};
