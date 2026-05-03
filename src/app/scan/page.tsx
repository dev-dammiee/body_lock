'use client';

import { useState } from 'react';
import { ScanLine, Users, CheckCircle } from 'lucide-react';

interface ScanRecord {
  bodyId: string;
  scanTime: string;
  attendantA: string;
  attendantB: string;
}

const initialScans: ScanRecord[] = [
  { bodyId: 'BK-2026-1243', scanTime: '2026-05-01 13:45:02', attendantA: 'John Smith', attendantB: 'Mary Johnson' },
  { bodyId: 'BK-2026-1242', scanTime: '2026-05-01 11:30:18', attendantA: 'John Smith', attendantB: 'Mary Johnson' },
  { bodyId: 'BK-2026-1241', scanTime: '2026-05-01 09:15:44', attendantA: 'Robert Davis', attendantB: 'Sarah Williams' },
];

export default function ScanPage() {
  const [attendantA, setAttendantA] = useState('');
  const [attendantB, setAttendantB] = useState('');
  const [manualId, setManualId] = useState('');
  const [scans, setScans] = useState<ScanRecord[]>(initialScans);
  const [feedback, setFeedback] = useState<string | null>(null);

  const recordScan = () => {
    if (!attendantA || !attendantB) {
      setFeedback('Both attendants must be entered before scanning.');
      setTimeout(() => setFeedback(null), 3000);
      return;
    }
    if (!manualId.match(/^BK-\d{4}-\d+$/)) {
      setFeedback('Invalid Body ID format. Use BK-YYYY-NNNN.');
      setTimeout(() => setFeedback(null), 3000);
      return;
    }

    const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
    setScans((prev) => [
      { bodyId: manualId, scanTime: now, attendantA, attendantB },
      ...prev,
    ]);
    setManualId('');
    setFeedback(`✓ Scan recorded for ${manualId}`);
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Daily Body Scan</h1>
        <p className="text-[#9a9a9a] text-sm mt-1">Two attendants must verify presence of each body daily</p>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm ${
          feedback.startsWith('✓')
            ? 'bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88]'
            : 'bg-[#ff2d6b]/10 border border-[#ff2d6b]/30 text-[#ff2d6b]'
        }`}>
          {feedback}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {/* Attendant Info */}
        <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-[#00ff88]" />
            <h2 className="font-semibold text-sm">Attendant Information</h2>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs text-[#9a9a9a]">Attendant A</label>
              <input
                value={attendantA}
                onChange={(e) => setAttendantA(e.target.value)}
                placeholder="Enter name"
                className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-[#9a9a9a]">Attendant B</label>
              <input
                value={attendantB}
                onChange={(e) => setAttendantB(e.target.value)}
                placeholder="Enter name"
                className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* QR Scanner */}
        <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <ScanLine size={18} className="text-[#00ff88]" />
            <h2 className="font-semibold text-sm">QR Code Scanner</h2>
          </div>
          <div className="flex-1 border-2 border-dashed border-[#2a2a2a] rounded-lg flex flex-col items-center justify-center py-10 gap-3 cursor-pointer hover:border-[#00ff88]/50 transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity">
              <ScanLine size={40} className="text-[#9a9a9a]" />
            </div>
            <p className="text-[#5a5a5a] text-sm text-center group-hover:text-[#9a9a9a] transition-colors">
              Click to scan QR code on body bag
            </p>
          </div>
        </div>
      </div>

      {/* Manual Entry */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-sm">Manual Body ID Entry</h2>
        <div className="flex gap-3">
          <input
            value={manualId}
            onChange={(e) => setManualId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && recordScan()}
            placeholder="Enter Body ID (e.g., BK-2026-1234)"
            className="flex-1 bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
          <button
            onClick={recordScan}
            className="px-5 py-3 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors flex-shrink-0"
          >
            Record Scan
          </button>
        </div>
      </div>

      {/* Recently Scanned */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[#1e1e1e]">
          <CheckCircle size={18} className="text-[#00ff88]" />
          <h2 className="font-semibold text-sm">Recently Scanned Bodies</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1e1e1e]">
              {['Body ID', 'Scan Time', 'Attendant A', 'Attendant B'].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-xs text-[#5a5a5a] font-medium uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e1e1e]">
            {scans.map((scan, i) => (
              <tr key={i} className="hover:bg-[#1a1a1a] transition-colors">
                <td className="px-5 py-4 text-[#00ff88] text-sm font-mono font-medium">{scan.bodyId}</td>
                <td className="px-5 py-4 text-[#9a9a9a] text-sm font-mono">{scan.scanTime}</td>
                <td className="px-5 py-4 text-white text-sm">{scan.attendantA}</td>
                <td className="px-5 py-4 text-white text-sm">{scan.attendantB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
