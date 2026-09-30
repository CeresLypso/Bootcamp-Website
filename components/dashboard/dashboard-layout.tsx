'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DashboardHeader } from '@/components/dashboard/role-toggle';

export function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-gray">
      <DashboardSidebar />
      <div className="lg:pl-64">
        <DashboardHeader currentRole="student" />
        <main className="min-h-screen pt-14 lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
