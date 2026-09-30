'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import {
  ArrowRight,
  Play,
  Sparkles,
  Calendar,
  Users,
  Clock,
  Star,
} from 'lucide-react';

export function Hero() {
  const { openAuth } = useAuth();

  return (
    <section className="relative overflow-hidden bg-tech-blue pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-action-orange/15 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 -right-32 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-action-orange/10 border border-action-orange/30 px-4 py-1.5 mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-action-orange" />
              <span className="text-xs font-semibold text-action-orange uppercase tracking-wide">
                Angkatan 2026 — Pendaftaran Dibuka
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-balance animate-fade-up animation-delay-100">
              Bootcamp Teknologi
              <span className="block text-action-orange mt-1">
                Hybrid 3 Bulan
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-200">
              Kuasai Full-Stack, Python, AI, atau Data Science melalui pengalaman
              belajar hybrid. Mentor berpengalaman, proyek nyata, dan dukungan
              karier — semua dalam 3 bulan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button
                size="lg"
                onClick={() => openAuth('register')}
                className="bg-action-orange text-white hover:bg-action-orange-dark shadow-xl shadow-action-orange/30 text-base h-12 px-8 group"
              >
                Daftar Sekarang
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white text-base h-12 px-8 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 mr-2 text-action-orange" />
                Lihat Demo
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 animate-fade-up animation-delay-400">
              {[
                { value: '500+', label: 'Alumni', icon: Users },
                { value: '4', label: 'Jalur Bootcamp', icon: Star },
                { value: '3 bln', label: 'Durasi', icon: Calendar },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                    <stat.icon className="h-4 w-4 text-action-orange" />
                    <span className="text-2xl font-bold font-display text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-300">
            <div className="relative">
              {/* Main image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="https://images.pexels.com/photos/33920044/pexels-photo-33920044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Peserta bootcamp belajar coding di RF Academy"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/80 via-transparent to-transparent" />
              </div>

              {/* Floating card 1 — progress */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 w-56 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Progres Kursus
                    </p>
                    <p className="text-sm font-bold text-tech-blue">
                      Modul 8 dari 12
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[67%] bg-gradient-to-r from-action-orange to-action-orange-light rounded-full" />
                </div>
              </div>

              {/* Floating card 2 — rating */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-action-orange text-action-orange"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                  <span className="font-bold text-tech-blue">4.9</span> / 5.0
                  rating peserta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
