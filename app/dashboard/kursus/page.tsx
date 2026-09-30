'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  PlayCircle,
  CheckCircle2,
  Clock,
  Lock,
  ArrowLeft,
  BookOpen,
  Download,
} from 'lucide-react';
import { courses } from '@/lib/dashboard-data';

export default function MyCoursesPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  if (selectedCourse) {
    const activeModule = selectedCourse.modules.find((m) => m.id === activeModuleId) || selectedCourse.modules.find((m) => !m.completed) || selectedCourse.modules[0];

    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => setSelectedCourseId(null)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-tech-blue transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Daftar Kursus
        </button>

        {/* Course header */}
        <div className="mb-6 animate-fade-up">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
            {selectedCourse.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {selectedCourse.description}
          </p>
          <div className="flex items-center gap-4 mt-3 text-sm">
            <span className="text-muted-foreground">Instruktur: <span className="font-medium text-tech-blue">{selectedCourse.instructor}</span></span>
            <span className="text-muted-foreground">
              {selectedCourse.completedModules} / {selectedCourse.totalModules} modul selesai
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video player placeholder */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-0 shadow-sm overflow-hidden animate-fade-up">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-tech-blue flex items-center justify-center group cursor-pointer">
                <img
                  src={selectedCourse.image}
                  alt={activeModule.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-action-orange/90 shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-9 w-9 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm">Video Player — Modul {activeModule.id}</p>
                  <p className="text-slate-300 text-xs">{activeModule.duration}</p>
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Badge className="bg-tech-blue/10 text-tech-blue border-tech-blue/20 hover:bg-tech-blue/10 mb-2">
                      Modul {activeModule.id}
                    </Badge>
                    <h2 className="font-display text-lg font-bold text-tech-blue">
                      {activeModule.title}
                    </h2>
                  </div>
                  <Button size="sm" className="bg-action-orange text-white hover:bg-action-orange-dark">
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Materi
                  </Button>
                </div>

                {/* Progress */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-tech-blue">Progres Kursus</span>
                    <span className="text-muted-foreground">{selectedCourse.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-action-orange to-action-orange-light rounded-full"
                      style={{ width: `${selectedCourse.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Module description */}
            <Card className="border-0 shadow-sm animate-fade-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-base font-display">Tentang Modul Ini</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dalam modul ini, Anda akan mempelajari konsep-konsep penting secara mendalam
                  melalui video pembelajaran, contoh kode, dan latihan praktik. Pastikan untuk
                  menyelesaikan semua materi sebelum melanjutkan ke modul berikutnya.
                </p>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <Clock className="h-4 w-4 text-action-orange mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Durasi</p>
                    <p className="text-sm font-semibold text-tech-blue">{activeModule.duration}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <BookOpen className="h-4 w-4 text-action-orange mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Tipe</p>
                    <p className="text-sm font-semibold text-tech-blue">Video + Quiz</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <CheckCircle2 className="h-4 w-4 text-action-orange mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-semibold text-tech-blue">
                      {activeModule.completed ? 'Selesai' : 'Belum Selesai'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Module list */}
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-100">
            <CardHeader>
              <CardTitle className="text-base font-display">Daftar Modul</CardTitle>
              <CardDescription className="text-xs">
                {selectedCourse.totalModules} modul total
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[600px] overflow-y-auto">
                {selectedCourse.modules.map((module, i) => {
                  const isActive = module.id === activeModule.id;
                  const isLocked = i > 0 && !selectedCourse.modules[i - 1].completed && !module.completed;
                  return (
                    <button
                      key={module.id}
                      onClick={() => !isLocked && setActiveModuleId(module.id)}
                      disabled={isLocked}
                      className={`w-full flex items-start gap-3 px-5 py-3.5 border-b border-border last:border-0 text-left transition-colors ${
                        isActive ? 'bg-action-orange/5' : 'hover:bg-muted/50'
                      } ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isLocked ? (
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        ) : module.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : isActive ? (
                          <PlayCircle className="h-4 w-4 text-action-orange" />
                        ) : (
                          <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${isActive ? 'text-action-orange' : 'text-tech-blue'}`}>
                          {module.id}. {module.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {module.duration}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Course list view
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Kursus Saya
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Pilih kursus untuk melanjutkan belajar
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <Card
            key={course.id}
            className="border-0 shadow-sm hover:shadow-lg transition-all cursor-pointer animate-fade-up overflow-hidden group"
            style={{ animationDelay: `${i * 100}ms` }}
            onClick={() => setSelectedCourseId(course.id)}
          >
            {/* Image */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <h3 className="font-display font-bold text-white text-base">
                  {course.title}
                </h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
                  <PlayCircle className="h-5 w-5 text-action-orange" />
                </div>
              </div>
            </div>

            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-muted-foreground">
                  {course.completedModules} / {course.totalModules} modul
                </span>
                <span className="font-semibold text-tech-blue">{course.progress}%</span>
              </div>

              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-action-orange to-action-orange-light rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Instruktur: <span className="font-medium text-tech-blue">{course.instructor}</span>
                </span>
                <span className="text-xs font-medium text-action-orange group-hover:translate-x-1 transition-transform">
                  Lanjutkan →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
