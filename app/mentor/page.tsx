'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Users,
  Clock,
  Code2,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { students, mentorStats, mentorData } from '@/lib/mentor-data';
import { useRouter } from 'next/navigation';

export default function MentorOverview() {
  const router = useRouter();

  const stats = [
    {
      label: 'Total Peserta',
      value: mentorStats.totalStudents,
      icon: Users,
      color: 'bg-blue-500/10 text-blue-600',
      change: '+2 minggu ini',
    },
    {
      label: 'Aktif Hari Ini',
      value: mentorStats.activeToday,
      icon: Clock,
      color: 'bg-green-500/10 text-green-600',
      change: 'dari 10 peserta',
    },
    {
      label: 'Antrian Review',
      value: mentorStats.pendingReviews,
      icon: AlertCircle,
      color: 'bg-amber-500/10 text-amber-600',
      change: 'butuh tinjauan',
    },
    {
      label: 'Proyek Disetujui',
      value: mentorStats.approvedProjects,
      icon: CheckCircle2,
      color: 'bg-action-orange/10 text-action-orange',
      change: 'bulan ini',
    },
  ];

  const pendingStudents = students.filter((s) => s.projectStatus === 'pending');
  const topStudents = [...students].sort((a, b) => b.progress - a.progress).slice(0, 5);

  // Course distribution
  const courseDist = students.reduce((acc, s) => {
    acc[s.course] = (acc[s.course] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Selamat datang, {mentorData.name.split(' ')[0]}!
        </h1>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Anda memiliki {mentorStats.pendingReviews} tugas yang menunggu review. Mari mulai!
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
              <p className="text-[10px] text-muted-foreground/70 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pending reviews */}
        <Card className="lg:col-span-2 border-0 shadow-sm animate-fade-up animation-delay-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-display flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Menunggu Review
                </CardTitle>
                <CardDescription className="text-sm mt-1">
                  {pendingStudents.length} tugas menunggu ditinjau
                </CardDescription>
              </div>
              <Button
                size="sm"
                onClick={() => router.push('/mentor/review')}
                className="bg-action-orange text-white hover:bg-action-orange-dark"
              >
                Review Semua
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center gap-3 p-3 rounded-xl border border-border hover:shadow-sm transition-shadow"
              >
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
                    {student.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-tech-blue truncate">
                    {student.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {student.projectTitle} — {student.course}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => router.push('/mentor/review')}
                  className="bg-action-orange text-white hover:bg-action-orange-dark shrink-0"
                >
                  <Code2 className="h-3.5 w-3.5 mr-1" />
                  Review
                </Button>
              </div>
            ))}
            {pendingStudents.length === 0 && (
              <div className="text-center py-8">
                <CheckCircle2 className="h-10 w-10 text-green-500/40 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Semua review selesai!</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Side column */}
        <div className="space-y-6">
          {/* Average progress */}
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-300">
            <CardHeader>
              <CardTitle className="text-base font-display flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-action-orange" />
                Rata-rata Progres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-32 w-32">
                  <svg className="h-32 w-32 -rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="56" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                    <circle
                      cx="64" cy="64" r="56"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - mentorStats.avgProgress / 100)}`}
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-display text-tech-blue">
                      {mentorStats.avgProgress}%
                    </span>
                    <span className="text-xs text-muted-foreground">rata-rata</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {Object.entries(courseDist).map(([course, count]) => {
                  const courseStudents = students.filter((s) => s.course === course);
                  const avg = Math.round(courseStudents.reduce((acc, s) => acc + s.progress, 0) / count);
                  return (
                    <div key={course}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground font-medium">{course}</span>
                        <span className="text-tech-blue font-semibold">{avg}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-action-orange to-action-orange-light rounded-full"
                          style={{ width: `${avg}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top students */}
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-400">
            <CardHeader>
              <CardTitle className="text-base font-display">Peserta Teratas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topStudents.map((student, i) => (
                <div key={student.id} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-muted-foreground w-4 text-center">
                    {i + 1}
                  </span>
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-tech-blue text-action-orange text-[10px] font-bold">
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-tech-blue truncate">
                      {student.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{student.course}</p>
                  </div>
                  <Badge className="bg-action-orange/10 text-action-orange border-action-orange/20 hover:bg-action-orange/10 shrink-0">
                    {student.progress}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
