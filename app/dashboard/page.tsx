'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Clock,
  BookOpen,
  Github,
  ArrowRight,
  PlayCircle,
  Award,
  Target,
} from 'lucide-react';
import { studentData, courses, submittedProjects } from '@/lib/dashboard-data';
import { useRouter } from 'next/navigation';

export default function DashboardOverview() {
  const router = useRouter();

  const stats = [
    {
      label: 'Jam Belajar',
      value: studentData.hoursLearned,
      icon: Clock,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      label: 'Proyek Disubmit',
      value: studentData.projectsSubmitted,
      icon: Github,
      color: 'bg-action-orange/10 text-action-orange',
    },
    {
      label: 'Modul Selesai',
      value: courses.reduce((acc, c) => acc + c.completedModules, 0),
      icon: BookOpen,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      label: 'Sertifikat',
      value: studentData.certificatesEarned,
      icon: Award,
      color: 'bg-purple-500/10 text-purple-600',
    },
  ];

  const activeCourse = courses[0];
  const nextModule = activeCourse.modules.find((m) => !m.completed);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Welcome header */}
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Selamat datang kembali, {studentData.name.split(' ')[0]}!
        </h1>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Lanjutkan belajar di jalur {studentData.currentTrack}. Kamu sudah menyelesaikan {studentData.overallProgress}% dari total bootcamp.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <Card
            key={stat.label}
            className="border-0 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <CardContent className="p-5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-3 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold font-display text-tech-blue">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Continue learning */}
        <Card className="lg:col-span-2 border-0 shadow-sm animate-fade-up animation-delay-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-display">Lanjutkan Belajar</CardTitle>
                <CardDescription className="text-sm mt-1">
                  Modul berikutnya di jalur {activeCourse.title}
                </CardDescription>
              </div>
              <Button
                size="sm"
                onClick={() => router.push('/dashboard/kursus')}
                className="bg-action-orange text-white hover:bg-action-orange-dark"
              >
                Lihat Semua
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Video thumbnail */}
            <div className="relative rounded-xl overflow-hidden mb-4 group cursor-pointer" onClick={() => router.push('/dashboard/kursus')}>
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                className="w-full h-44 sm:h-52 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/90 via-tech-blue/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-8 w-8 text-action-orange" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs text-slate-300">Modul {nextModule?.id}</p>
                <p className="text-sm font-semibold text-white">{nextModule?.title}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-tech-blue">Progres Kursus</span>
                <span className="text-muted-foreground">
                  {activeCourse.completedModules} / {activeCourse.totalModules} modul
                </span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-action-orange to-action-orange-light rounded-full transition-all duration-500"
                  style={{ width: `${activeCourse.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{activeCourse.progress}% selesai</p>
            </div>
          </CardContent>
        </Card>

        {/* Side column */}
        <div className="space-y-6">
          {/* Overall progress */}
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-300">
            <CardHeader>
              <CardTitle className="text-base font-display flex items-center gap-2">
                <Target className="h-4 w-4 text-action-orange" />
                Progres Keseluruhan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-32 w-32">
                  <svg className="h-32 w-32 -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64" cy="64" r="56"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="10"
                    />
                    <circle
                      cx="64" cy="64" r="56"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - studentData.overallProgress / 100)}`}
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-display text-tech-blue">
                      {studentData.overallProgress}%
                    </span>
                    <span className="text-xs text-muted-foreground">selesai</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">
                  <span className="font-semibold text-tech-blue">+12%</span> minggu ini
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Recent submissions */}
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-400">
            <CardHeader>
              <CardTitle className="text-base font-display">Proyek Terbaru</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {submittedProjects.map((project) => (
                <div key={project.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-tech-blue/10 shrink-0">
                    <Github className="h-4 w-4 text-tech-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-tech-blue truncate">
                      {project.projectTitle}
                    </p>
                    <p className="text-xs text-muted-foreground">{project.submittedAt}</p>
                  </div>
                  <Badge
                    className={
                      project.status === 'approved'
                        ? 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100'
                        : project.status === 'reviewed'
                        ? 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100'
                        : 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100'
                    }
                  >
                    {project.status === 'approved' ? 'Disetujui' : project.status === 'reviewed' ? 'Direview' : 'Menunggu'}
                  </Badge>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => router.push('/dashboard/proyek')}
              >
                Lihat Semua Proyek
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
