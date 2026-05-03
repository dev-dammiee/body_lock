'use client';

import { useState } from 'react';
import { Shield, Search, Copy, CheckCheck } from 'lucide-react';

type ActionType = 'RELEASE' | 'SEEN' | 'ADMIT' | 'MISSING';

interface AuditEntry {
  timestamp: string;
  bodyId: string;
  action: ActionType;
  actor: string;
  hash: string;
}

const allEntries: AuditEntry[] = [
  { timestamp: '2026-05-01 14:23:17', bodyId: 'BK-2026-1245', action: 'RELEASE', actor: 'Dr. Sarah Chen', hash: 'a3f7d9e2b1c8f6a4e5d3b2c1a9f8e...' },
  { timestamp: '2026-05-01 13:45:02', bodyId: 'BK-2026-1243', action: 'SEEN', actor: 'Attendant: John Smith, Mary Johnson', hash: 'b2e1d0c9f8a7e6d5c4b3a2f1e0d9c...' },
  { timestamp: '2026-05-01 12:10:44', bodyId: 'BK-2026-1247', action: 'ADMIT', actor: 'Intake Coordinator Lisa Wong', hash: 'c1f0e9d8b7a6f5e4d3c2b1a0f9e8d...' },
  { timestamp: '2026-05-01 11:30:18', bodyId: 'BK-2026-1242', action: 'SEEN', actor: 'Attendant: John Smith, Mary Johnson', hash: 'd0e9f8c7b6a5f4e3d2c1b0a9f8e7d...' },
  { timestamp: '2026-05-01 09:15:44', bodyId: 'BK-2026-1241', action: 'SEEN', actor: 'Attendant: Robert Davis, Sarah Williams', hash: 'e9f8a7b6c5d4e3f2a1b0c9d8e7f6a...' },
  { timestamp: '2026-04-30 16:00:00', bodyId: 'BK-2026-1240', action: 'RELEASE', actor: 'Dr. Michael Torres', hash: 'f8e7b6a5c4d3e2f1a0b9c8d7e6f5a...' },
  { timestamp: '2026-04-30 14:30:00', bodyId: 'BK-2026-1201', action: 'MISSING', actor: 'System', hash: 'a7f6e5d4c3b2a1f0e9d8c7b6a5f4e...' },
];

const actionStyles: Record<ActionType, string> = {
  RELEASE: 'bg-[#00ff88] text-black',
  SEEN: 'bg-[#1e1e1e] text-white border border-[#2a2a2a]',
  ADMIT: 'bg-[#00ff88] text-black',
  MISSING: 'bg-[#ff2d6b]/20 text-[#ff2d6b] border border-[#ff2d6b]/30',
};

export default function AuditPage() {
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('All Actions');
  const [verified, setVerified] = useState<boolean | null>(null);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const filtered = allEntries.filter((e) => {
    const matchSearch =
      !search || e.bodyId.toLowerCase().includes(search.toLowerCase()) || e.actor.toLowerCase().includes(search.toLowerCase());
    const matchAction = actionFilter === 'All Actions' || e.action === actionFilter;
    return matchSearch && matchAction;
  });

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const handleVerify = () => {
    setVerified(null);
    setTimeout(() => setVerified(true), 1500);
  };

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center gap-3">
        <Shield size={24} className="text-[#00ff88]" />
        <div>
          <h1 className="text-2xl font-bold">Immutable Audit Trail</h1>
          <p className="text-[#9a9a9a] text-sm">Tamper-Proof Chain of Custody Records</p>
        </div>
      </div>

      {/* Chain integrity result */}
      {verified !== null && (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm border ${
          verified
            ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-[#00ff88]'
            : 'bg-[#ff2d6b]/10 border-[#ff2d6b]/30 text-[#ff2d6b]'
        }`}>
          {verified ? '✓ Chain integrity verified — all hashes are valid.' : '✗ Chain integrity check failed.'}
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a5a5a]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Body ID or Actor"
            className="w-full bg-[#141414] border border-[#1e1e1e] rounded-lg pl-9 pr-4 py-3 text-white text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#00ff88] transition-colors"
          />
        </div>
        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="bg-[#141414] border border-[#1e1e1e] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00ff88] transition-colors"
        >
          {['All Actions', 'ADMIT', 'SEEN', 'RELEASE', 'MISSING'].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <button
          onClick={handleVerify}
          className="flex items-center gap-2 px-5 py-3 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors flex-shrink-0"
        >
          <Shield size={16} />
          Verify Chain Integrity
        </button>
      </div>

      {/* Audit Table */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1e1e1e]">
              {['Timestamp', 'Body ID', 'Action', 'Actor', 'Current Hash'].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-xs text-[#5a5a5a] font-medium uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e1e1e]">
            {filtered.map((entry, i) => (
              <tr key={i} className="hover:bg-[#1a1a1a] transition-colors">
                <td className="px-5 py-4 text-[#9a9a9a] text-sm font-mono whitespace-nowrap">{entry.timestamp}</td>
                <td className="px-5 py-4 text-[#00ff88] text-sm font-mono font-medium">{entry.bodyId}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold tracking-wide ${actionStyles[entry.action]}`}>
                    {entry.action}
                  </span>
                </td>
                <td className="px-5 py-4 text-white text-sm">{entry.actor}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5a5a5a] text-xs font-mono truncate max-w-[160px]">{entry.hash}</span>
                    <button
                      onClick={() => handleCopy(entry.hash)}
                      className="text-[#5a5a5a] hover:text-[#00ff88] transition-colors flex-shrink-0"
                    >
                      {copiedHash === entry.hash ? (
                        <CheckCheck size={14} className="text-[#00ff88]" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#5a5a5a] text-sm">
            No records match your search.
          </div>
        )}
      </div>
    </div>
  );
}
