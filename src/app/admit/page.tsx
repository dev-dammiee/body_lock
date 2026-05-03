'use client';

import { useState } from 'react';
import { Fingerprint, Camera, UserPlus } from 'lucide-react';

const generateBodyId = () => {
  const num = Math.floor(2000 + Math.random() * 1000);
  return `BK-2026-${num}`;
};

export default function AdmitPage() {
  const [bodyId] = useState(generateBodyId());
  const [form, setForm] = useState({
    deceasedName: '',
    dateOfDeath: '',
    causeOfDeath: '',
    location: '',
    assignedDoctor: '',
    familyContact: '',
    familyPhone: '',
  });
  const [fingerprintRegistered, setFingerprintRegistered] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
          <UserPlus size={28} className="text-[#00ff88]" />
        </div>
        <h2 className="text-xl font-semibold">Body Admitted Successfully</h2>
        <p className="text-[#9a9a9a] text-sm font-mono">{bodyId}</p>
        <button
          onClick={() => { setSubmitted(false); }}
          className="px-5 py-2.5 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors mt-2"
        >
          Admit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Admit Body</h1>
        <p className="text-[#9a9a9a] text-sm mt-1">Register a new body into the chain of custody system</p>
      </div>

      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-5">
        {/* Deceased Name */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Deceased Name</label>
          <input
            name="deceasedName"
            value={form.deceasedName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Date of Death */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Date of Death</label>
          <input
            type="date"
            name="dateOfDeath"
            value={form.dateOfDeath}
            onChange={handleChange}
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Cause of Death */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Cause of Death</label>
          <input
            name="causeOfDeath"
            value={form.causeOfDeath}
            onChange={handleChange}
            placeholder="Enter cause of death"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Storage Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Drawer A-12"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Assigned Doctor */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Assigned Doctor</label>
          <input
            name="assignedDoctor"
            value={form.assignedDoctor}
            onChange={handleChange}
            placeholder="Enter doctor name"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Family Contact */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Family Contact</label>
          <input
            name="familyContact"
            value={form.familyContact}
            onChange={handleChange}
            placeholder="Enter family contact name"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Family Phone */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Family Phone</label>
          <input
            name="familyPhone"
            value={form.familyPhone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>

        {/* Body ID (auto-generated) */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9a9a9a] font-medium">Body ID (Auto-Generated)</label>
          <div className="w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg px-4 py-3 text-[#5a5a5a] text-sm font-mono">
            {bodyId}
          </div>
        </div>
      </div>

      {/* Family Fingerprint Registration */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Fingerprint size={20} className="text-[#00ff88]" />
          <h3 className="font-semibold text-sm">Family Fingerprint Registration</h3>
        </div>
        <button
          onClick={() => setFingerprintRegistered(true)}
          className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
            fingerprintRegistered
              ? 'bg-[#00cc6a] text-black cursor-default'
              : 'bg-[#00ff88] text-black hover:bg-[#00cc6a]'
          }`}
        >
          {fingerprintRegistered ? '✓ Fingerprint Registered' : 'Register Family Fingerprint'}
        </button>
      </div>

      {/* Photo Upload */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Camera size={20} className="text-[#00ff88]" />
          <h3 className="font-semibold text-sm">Photo of Sealed Body Bag Label</h3>
        </div>
        <label className="block w-full border-2 border-dashed border-[#2a2a2a] rounded-lg p-10 text-center cursor-pointer hover:border-[#00ff88]/50 transition-colors group">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setPhoto(URL.createObjectURL(file));
            }}
          />
          {photo ? (
            <img src={photo} alt="Body bag label" className="max-h-40 mx-auto rounded" />
          ) : (
            <>
              <Camera size={32} className="text-[#5a5a5a] mx-auto mb-2 group-hover:text-[#00ff88] transition-colors" />
              <p className="text-[#5a5a5a] text-sm group-hover:text-[#9a9a9a] transition-colors">
                Click to take photo or upload image
              </p>
            </>
          )}
        </label>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={submitting || !form.deceasedName}
        className="w-full py-3.5 bg-[#1e1e1e] border border-[#2a2a2a] text-[#9a9a9a] text-sm font-semibold rounded-xl hover:bg-[#00ff88] hover:text-black hover:border-[#00ff88] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        {submitting ? 'Admitting Body...' : 'Admit Body'}
      </button>
    </div>
  );
}
