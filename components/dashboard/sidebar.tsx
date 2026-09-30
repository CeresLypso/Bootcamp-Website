'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Github,
  MessageCircle,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { studentData } from '@/lib/dashboard-data';

const navItems = [
  { label: 'Ringkasan', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Kursus Saya', href: '/dashboard/kursus', icon: BookOpen },
  { label: 'Submit Proyek', href: '/dashboard/proyek', icon: Github },
  { label: 'Discord', href: '/dashboard/discord', icon: MessageCircle },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setMobileOpen(false);
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-white/10 shrink-0">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-action-orange text-white">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-white text-sm">
            RF Academy
          </span>
          <span className="text-[9px] font-medium text-slate-400 tracking-wide uppercase">
            Dasbor Peserta
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Menu Utama
        </p>
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                active
                  ? 'bg-action-orange text-white shadow-lg shadow-action-orange/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`h-4.5 w-4.5 shrink-0 ${active ? 'text-white' : 'text-slate-500 group-hover:text-action-orange'}`} style={{ width: 18, height: 18 }} />
              <span className="flex-1 text-left">{item.label}</span>
              {active && <ChevronRight className="h-4 w-4" />}
            </button>
          );
        })}
      </nav>

      {/* Progress card */}
      <div className="px-4 pb-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs text-slate-400 font-medium mb-2">Progres Keseluruhan</p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-2xl font-bold font-display text-white">
              {studentData.overallProgress}%
            </span>
            <span className="text-xs text-slate-400">{studentData.hoursLearned} jam</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-action-orange to-action-orange-light rounded-full transition-all duration-500"
              style={{ width: `${studentData.overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* User profile */}
      <div className="border-t border-white/10 p-3 shrink-0">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
          <Avatar className="h-9 w-9 ring-2 ring-action-orange/20">
            <AvatarImage src={studentData.avatar} alt={studentData.name} />
            <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
              {studentData.name.split(' ').map((n) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {studentData.name}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {studentData.email}
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="text-slate-400 hover:text-action-orange transition-colors shrink-0"
            aria-label="Keluar"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-tech-blue z-30 flex-col">
        {sidebarContent}
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-tech-blue z-30 flex items-center justify-between px-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-action-orange text-white">
            <GraduationCap className="h-4 w-4" />
          </div>
          <span className="font-display font-bold text-white text-sm">RF Academy</span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-white p-1"
          aria-label="Buka menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-tech-blue animate-fade-in">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white z-10"
              aria-label="Tutup menu"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
