'use client';

import { useState } from 'react';
import { ScanLine, Search, Fingerprint, Shield, CheckCircle } from 'lucide-react';

interface BodyRecord {
  id: string;
  deceasedName: string;
  familyContact: string;
  assignedDoctor: string;
  admittedAt: string;
  location: string;
}

// Simulated DB lookup
const mockBodies: Record<string, BodyRecord> = {
  'BK-2026-1243': {
    id: 'BK-2026-1243',
    deceasedName: 'James Patterson',
    familyContact: 'Linda Patterson',
    assignedDoctor: 'Dr. Sarah Chen',
    admittedAt: '2026-04-28 10:00:00',
    location: 'Drawer B-04',
  },
  'BK-2026-1242': {
    id: 'BK-2026-1242',
    deceasedName: 'Maria Gonzalez',
    familyContact: 'Carlos Gonzalez',
    assignedDoctor: 'Dr. Michael Torres',
    admittedAt: '2026-04-27 14:30:00',
    location: 'Drawer A-11',
  },
};

export default function ReleasePage() {
  const [searchId, setSearchId] = useState('');
  const [body, setBody] = useState<BodyRecord | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [fingerprintVerified, setFingerprintVerified] = useState(false);
  const [mdApproved, setMdApproved] = useState(false);
  const [releasing, setReleasing] = useState(false);
  const [released, setReleased] = useState(false);

  const handleSearch = () => {
    const found = mockBodies[searchId.toUpperCase()];
    if (found) {
      setBody(found);
      setNotFound(false);
      setFingerprintVerified(false);
      setMdApproved(false);
      setReleased(false);
    } else {
      setBody(null);
      setNotFound(true);
    }
  };

  const handleRelease = async () => {
    setReleasing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setReleasing(false);
    setReleased(true);
  };

  const canRelease = fingerprintVerified && mdApproved && body;

  if (released && body) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
          <CheckCircle size={28} className="text-[#00ff88]" />
        </div>
        <h2 className="text-xl font-semibold">Body Released Successfully</h2>
        <p className="text-[#9a9a9a] text-sm font-mono">{body.id}</p>
        <p className="text-[#5a5a5a] text-sm">Released to {body.familyContact}</p>
        <button
          onClick={() => { setBody(null); setSearchId(''); setReleased(false); }}
          className="mt-2 px-5 py-2.5 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
        >
          Release Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Release Body</h1>
        <p className="text-[#9a9a9a] text-sm mt-1">Verify family identity and medical director approval before release</p>
      </div>

      {/* Identify Body */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <ScanLine size={18} className="text-[#00ff88]" />
          <h2 className="font-semibold text-sm">Identify Body</h2>
        </div>

        {/* QR Scan */}
        <div className="border-2 border-dashed border-[#00ff88]/30 rounded-lg p-10 flex flex-col items-center gap-3 cursor-pointer hover:border-[#00ff88]/60 transition-colors group">
          <ScanLine size={36} className="text-[#5a5a5a] group-hover:text-[#00ff88] transition-colors" />
          <p className="text-[#5a5a5a] text-sm group-hover:text-[#9a9a9a] transition-colors">
            Click to scan QR code on body bag
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#1e1e1e]" />
          <span className="text-[#5a5a5a] text-xs">OR</span>
          <div className="flex-1 h-px bg-[#1e1e1e]" />
        </div>

        <div className="flex gap-3">
          <input
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Enter Body ID manually"
            className="flex-1 bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
          <button
            onClick={handleSearch}
            className="px-5 py-3 bg-[#1e1e1e] border border-[#2a2a2a] text-white text-sm font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black hover:border-[#00ff88] transition-all flex items-center gap-2"
          >
            <Search size={16} />
            Search
          </button>
        </div>

        {notFound && (
          <p className="text-[#ff2d6b] text-sm">Body ID not found. Please check the ID and try again.</p>
        )}
      </div>

      {/* Body Details */}
      {body && (
        <>
          <div className="bg-[#141414] border border-[#00ff88]/20 rounded-xl p-5 space-y-3">
            <h3 className="text-[#00ff88] text-sm font-semibold">{body.id}</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[#5a5a5a] text-xs mb-0.5">Deceased</p>
                <p className="text-white">{body.deceasedName}</p>
              </div>
              <div>
                <p className="text-[#5a5a5a] text-xs mb-0.5">Family Contact</p>
                <p className="text-white">{body.familyContact}</p>
              </div>
              <div>
                <p className="text-[#5a5a5a] text-xs mb-0.5">Assigned Doctor</p>
                <p className="text-white">{body.assignedDoctor}</p>
              </div>
              <div>
                <p className="text-[#5a5a5a] text-xs mb-0.5">Location</p>
                <p className="text-white">{body.location}</p>
              </div>
            </div>
          </div>

          {/* Fingerprint Verification */}
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Fingerprint size={18} className="text-[#00ff88]" />
              <h3 className="font-semibold text-sm">Family Fingerprint Verification</h3>
            </div>
            <button
              onClick={() => setFingerprintVerified(true)}
              disabled={fingerprintVerified}
              className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                fingerprintVerified
                  ? 'bg-[#00cc6a]/20 border border-[#00cc6a]/30 text-[#00cc6a] cursor-default'
                  : 'bg-[#00ff88] text-black hover:bg-[#00cc6a]'
              }`}
            >
              {fingerprintVerified ? '✓ Fingerprint Verified' : 'Scan Family Fingerprint'}
            </button>
          </div>

          {/* MD Approval */}
          <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-[#00ff88]" />
              <h3 className="font-semibold text-sm">Medical Director Approval</h3>
            </div>
            <button
              onClick={() => setMdApproved(true)}
              disabled={mdApproved}
              className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                mdApproved
                  ? 'bg-[#00cc6a]/20 border border-[#00cc6a]/30 text-[#00cc6a] cursor-default'
                  : 'bg-[#1e1e1e] border border-[#2a2a2a] text-white hover:bg-[#2a2a2a]'
              }`}
            >
              {mdApproved ? '✓ MD Approved' : 'Request MD Approval'}
            </button>
          </div>

          {/* Release Button */}
          <button
            onClick={handleRelease}
            disabled={!canRelease || releasing}
            className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
              canRelease
                ? 'bg-[#00ff88] text-black hover:bg-[#00cc6a]'
                : 'bg-[#1e1e1e] border border-[#2a2a2a] text-[#5a5a5a] cursor-not-allowed'
            }`}
          >
            {releasing ? 'Processing Release...' : 'Confirm Release'}
          </button>
        </>
      )}
    </div>
  );
}
