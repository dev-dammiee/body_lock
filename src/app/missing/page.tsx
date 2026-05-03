'use client';

import { useState } from 'react';
import { AlertTriangle, Mail, Clock, CheckCircle } from 'lucide-react';

interface MissingAlert {
  bodyId: string;
  familyContact: string;
  lastScanTime: string;
  hoursMissing: number;
  mdNotified: boolean;
  notificationSent: boolean;
}

const initialAlerts: MissingAlert[] = [
  {
    bodyId: 'BK-2026-1189',
    familyContact: 'Robert Thompson',
    lastScanTime: '2026-04-29 09:15:00',
    hoursMissing: 53,
    mdNotified: false,
    notificationSent: false,
  },
  {
    bodyId: 'BK-2026-1201',
    familyContact: 'Elizabeth Garcia',
    lastScanTime: '2026-04-30 14:30:00',
    hoursMissing: 26,
    mdNotified: true,
    notificationSent: true,
  },
];

export default function MissingPage() {
  const [alerts, setAlerts] = useState<MissingAlert[]>(initialAlerts);
  const [notifyingAll, setNotifyingAll] = useState(false);

  const notifyMd = (bodyId: string) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.bodyId === bodyId ? { ...a, mdNotified: true, notificationSent: true } : a
      )
    );
  };

  const notifyAll = async () => {
    setNotifyingAll(true);
    await new Promise((r) => setTimeout(r, 1000));
    setAlerts((prev) => prev.map((a) => ({ ...a, mdNotified: true, notificationSent: true })));
    setNotifyingAll(false);
  };

  const unnotifiedCount = alerts.filter((a) => !a.mdNotified).length;

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-3">
        <AlertTriangle size={24} className="text-[#ff2d6b]" />
        <div>
          <h1 className="text-2xl font-bold">Missing Bodies Alert</h1>
          <p className="text-[#9a9a9a] text-sm">Bodies not scanned in the last 24 hours require immediate attention</p>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-[#141414] border border-[#ff2d6b]/30 rounded-xl p-5 flex items-center justify-between">
        <div>
          <p className="text-[#ff2d6b] text-4xl font-bold">{alerts.length}</p>
          <p className="text-[#9a9a9a] text-sm mt-1">Bodies missing from daily scan</p>
          {unnotifiedCount > 0 && (
            <p className="text-[#ff2d6b] text-sm mt-0.5">
              {unnotifiedCount} {unnotifiedCount === 1 ? 'requires' : 'require'} Medical Director notification
            </p>
          )}
        </div>
        <button
          onClick={notifyAll}
          disabled={notifyingAll || unnotifiedCount === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
            unnotifiedCount === 0
              ? 'bg-[#1e1e1e] text-[#5a5a5a] cursor-not-allowed'
              : 'bg-[#ff2d6b] text-white hover:bg-[#e0245e]'
          }`}
        >
          <Mail size={16} />
          {notifyingAll ? 'Notifying...' : 'Notify All to Medical Director'}
        </button>
      </div>

      {/* Individual Alerts */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.bodyId}
            className="bg-[#141414] border border-[#ff2d6b]/20 rounded-xl p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} className="text-[#ff2d6b]" />
                  <span className="text-[#00ff88] font-mono font-semibold">{alert.bodyId}</span>
                  {alert.mdNotified && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-[#00ff88] text-black">
                      MD NOTIFIED
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-[#5a5a5a] text-xs mb-0.5">Family Contact</p>
                    <p className="text-white">{alert.familyContact}</p>
                  </div>
                  <div>
                    <p className="text-[#5a5a5a] text-xs mb-0.5">Last Scan Time</p>
                    <p className="text-white font-mono text-xs">{alert.lastScanTime}</p>
                  </div>
                  <div>
                    <p className="text-[#5a5a5a] text-xs mb-0.5">Hours Missing</p>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#ff2d6b]" />
                      <p className="text-[#ff2d6b] font-semibold">{alert.hoursMissing} hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                {alert.notificationSent ? (
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e4a2e] border border-[#00ff88]/30 text-[#00ff88] text-sm font-semibold rounded-lg">
                    <CheckCircle size={16} />
                    Notification Sent
                  </div>
                ) : (
                  <button
                    onClick={() => notifyMd(alert.bodyId)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#ff2d6b] text-white text-sm font-semibold rounded-lg hover:bg-[#e0245e] transition-colors"
                  >
                    <Mail size={16} />
                    Notify Medical Director
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <CheckCircle size={40} className="text-[#00ff88] mx-auto" />
          <p className="text-white font-semibold">All bodies accounted for</p>
          <p className="text-[#5a5a5a] text-sm">No missing bodies in the last 24 hours.</p>
        </div>
      )}
    </div>
  );
}
