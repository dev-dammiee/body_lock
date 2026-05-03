export type BodyStatus = 'admitted' | 'in_morgue' | 'released' | 'missing';

export type ActionType = 'ADMIT' | 'SEEN' | 'RELEASE' | 'MISSING';

export interface Body {
  id: string; // e.g. BK-2026-1247
  deceasedName: string;
  dateOfDeath: string;
  causeOfDeath: string;
  location: string;
  familyContact: string;
  familyPhone: string;
  status: BodyStatus;
  admittedAt: string;
  lastScannedAt: string | null;
  releasedAt: string | null;
  assignedDoctor: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  bodyId: string;
  action: ActionType;
  actor: string;
  hash: string;
  previousHash: string | null;
}

export interface ScanRecord {
  bodyId: string;
  scanTime: string;
  attendantA: string;
  attendantB: string;
}

export interface MissingAlert {
  bodyId: string;
  familyContact: string;
  lastScanTime: string;
  hoursMissing: number;
  mdNotified: boolean;
}

export interface DashboardStats {
  totalBodiesAdmitted: number;
  bodiesCurrentlyInMorgue: number;
  bodiesReleasedToday: number;
  missingAlerts: number;
}

export interface RecentActivity {
  type: 'Body Released' | 'Daily Scan' | 'Body Admitted';
  bodyId: string;
  actor: string;
  timestamp: string;
}
