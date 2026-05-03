'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  PlusCircle,
  ScanLine,
  LogOut,
  FileText,
  AlertTriangle,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admit', label: 'Admit', icon: PlusCircle },
  { href: '/scan', label: 'Scan', icon: ScanLine },
  { href: '/release', label: 'Release', icon: LogOut },
  { href: '/audit', label: 'Audit', icon: FileText },
  { href: '/missing', label: 'Missing', icon: AlertTriangle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0d0d0d] border-b border-[#1e1e1e] flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00ff88] flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-xs tracking-tight">BK</span>
          </div>
          <p className="text-white font-semibold text-base leading-tight">Body Keeper</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -mr-2 text-[#9a9a9a] hover:text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] bg-[#0d0d0d] border-r border-[#1e1e1e] flex flex-col z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#1e1e1e] h-16 md:h-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00ff88] flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm tracking-tight">BK</span>
            </div>
            <div>
              <p className="text-white font-semibold text-base leading-tight">Body Keeper</p>
              <p className="text-[#5a5a5a] text-xs tracking-widest uppercase hidden md:block">Chain of Custody</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 -mr-2 text-[#9a9a9a] hover:text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base md:text-sm font-medium transition-all duration-150 min-h-[44px] ${
                  isActive
                    ? 'bg-[#00ff88] text-black'
                    : 'text-[#9a9a9a] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon
                  size={20}
                  className={isActive ? 'text-black' : 'text-current'}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
