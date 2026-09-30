'use client';

import { MentorSidebar } from '@/components/dashboard/mentor-sidebar';
import { DashboardHeader } from '@/components/dashboard/role-toggle';

export function MentorLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-gray">
      <MentorSidebar />
      <div className="lg:pl-64">
        <DashboardHeader currentRole="mentor" />
        <main className="min-h-screen pt-14 lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
