import Link from 'next/link';
import {
  Users,
  Building2,
  LogOut,
  AlertTriangle,
  Clock,
} from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import Badge from '@/components/ui/Badge';

// In a real app, these would come from a DB/API call
const stats = {
  totalBodiesAdmitted: 1247,
  bodiesCurrentlyInMorgue: 34,
  bodiesReleasedToday: 7,
  missingAlerts: 2,
};

const recentActivity = [
  {
    type: 'Body Released' as const,
    bodyId: 'BK-2026-1245',
    actor: 'Dr. Sarah Chen',
    timestamp: '2026-05-01 14:23:17',
    badgeVariant: 'released' as const,
  },
  {
    type: 'Daily Scan' as const,
    bodyId: 'BK-2026-1243',
    actor: 'Attendant: John Smith, Mary Johnson',
    timestamp: '2026-05-01 13:45:02',
    badgeVariant: 'scan' as const,
  },
  {
    type: 'Body Admitted' as const,
    bodyId: 'BK-2026-1247',
    actor: 'Intake Coordinator Lisa Wong',
    timestamp: '2026-05-01 12:10:44',
    badgeVariant: 'admitted' as const,
  },
  {
    type: 'Daily Scan' as const,
    bodyId: 'BK-2026-1242',
    actor: 'Attendant: John Smith, Mary Johnson',
    timestamp: '2026-05-01 11:30:18',
    badgeVariant: 'scan' as const,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      {/* Missing Bodies Alert Banner */}
      {stats.missingAlerts > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-[#ff2d6b] bg-[#ff2d6b]/5 pulse-red">
          <div className="flex items-center gap-3">
            <AlertTriangle size={20} className="text-[#ff2d6b] flex-shrink-0" />
            <div>
              <p className="text-[#ff2d6b] font-semibold text-sm">Missing Bodies Alert</p>
              <p className="text-[#9a9a9a] text-sm">
                {stats.missingAlerts} bodies have not been scanned in the last 24 hours.
              </p>
            </div>
          </div>
          <Link
            href="/missing"
            className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-[#ff2d6b] text-white text-base sm:text-sm font-semibold rounded-lg hover:bg-[#e0245e] transition-colors flex-shrink-0 text-center min-h-[44px] flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          value={stats.totalBodiesAdmitted.toLocaleString()}
          label="Total Bodies Admitted"
        />
        <StatCard
          icon={Building2}
          value={stats.bodiesCurrentlyInMorgue}
          label="Bodies Currently in Morgue"
        />
        <StatCard
          icon={LogOut}
          value={stats.bodiesReleasedToday}
          label="Bodies Released Today"
        />
        <StatCard
          icon={AlertTriangle}
          value={stats.missingAlerts}
          label="Missing Alerts"
          variant={stats.missingAlerts > 0 ? 'danger' : 'default'}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[#1e1e1e]">
          <Clock size={18} className="text-[#00ff88]" />
          <h2 className="font-semibold text-base">Recent Activity</h2>
        </div>

        <div className="divide-y divide-[#1e1e1e]">
          {recentActivity.map((item, i) => (
            <div key={i} className="px-4 sm:px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#1a1a1a] transition-colors">
              <div className="flex items-start gap-3 w-full sm:w-auto">
                <Badge variant={item.badgeVariant} label={item.type} />
                <div className="min-w-0">
                  <span className="text-[#00ff88] text-sm font-mono font-medium truncate block">
                    {item.bodyId}
                  </span>
                  <p className="text-[#9a9a9a] text-sm mt-0.5 truncate">{item.actor}</p>
                </div>
              </div>
              <span className="text-[#5a5a5a] text-xs font-mono flex-shrink-0 pt-0.5 sm:pt-0">
                {item.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
