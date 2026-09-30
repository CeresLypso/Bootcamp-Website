'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  GraduationCap,
  Users,
  ArrowLeftRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function RoleToggle({ currentRole }: { currentRole: 'student' | 'mentor' }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-border text-tech-blue hover:bg-muted gap-2 font-medium"
        >
          <ArrowLeftRight className="h-3.5 w-3.5 text-action-orange" />
          <span className="hidden sm:inline">
            {currentRole === 'mentor' ? 'Tampilan Mentor' : 'Tampilan Peserta'}
          </span>
          <span className="sm:hidden">Ganti</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs text-muted-foreground font-normal uppercase tracking-wide">
          Beralih Tampilan
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => router.push('/dashboard')}
          className={`gap-2.5 cursor-pointer ${currentRole === 'student' ? 'bg-action-orange/5' : ''}`}
        >
          <GraduationCap className={`h-4 w-4 ${currentRole === 'student' ? 'text-action-orange' : 'text-muted-foreground'}`} />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Tampilan Peserta</span>
            <span className="text-xs text-muted-foreground">Dasbor belajar</span>
          </div>
          {currentRole === 'student' && (
            <span className="ml-auto h-2 w-2 rounded-full bg-action-orange" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push('/mentor')}
          className={`gap-2.5 cursor-pointer ${currentRole === 'mentor' ? 'bg-action-orange/5' : ''}`}
        >
          <Users className={`h-4 w-4 ${currentRole === 'mentor' ? 'text-action-orange' : 'text-muted-foreground'}`} />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Tampilan Mentor</span>
            <span className="text-xs text-muted-foreground">Kelola peserta</span>
          </div>
          {currentRole === 'mentor' && (
            <span className="ml-auto h-2 w-2 rounded-full bg-action-orange" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DashboardHeader({ currentRole }: { currentRole: 'student' | 'mentor' }) {
  const pathname = usePathname();

  const pageTitle = (() => {
    if (currentRole === 'student') {
      if (pathname === '/dashboard') return 'Ringkasan';
      if (pathname.startsWith('/dashboard/kursus')) return 'Kursus Saya';
      if (pathname.startsWith('/dashboard/proyek')) return 'Submit Proyek';
      if (pathname.startsWith('/dashboard/discord')) return 'Discord';
      return 'Dasbor Peserta';
    } else {
      if (pathname === '/mentor') return 'Ringkasan';
      if (pathname.startsWith('/mentor/peserta')) return 'Daftar Peserta';
      if (pathname.startsWith('/mentor/review')) return 'Review Tugas';
      if (pathname.startsWith('/mentor/pengaturan')) return 'Pengaturan';
      return 'Dasbor Mentor';
    }
  })();

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <div className="flex items-center gap-3">
          <h2 className="font-display font-semibold text-tech-blue text-sm sm:text-base">
            {pageTitle}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <RoleToggle currentRole={currentRole} />
        </div>
      </div>
    </header>
  );
}
