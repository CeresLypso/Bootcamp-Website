'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Daftar & Pilih Jalur',
    description:
      'Pilih jalur bootcamp Anda, buat akun, dan selesaikan pendaftaran dalam hitungan menit.',
  },
  {
    number: '02',
    title: 'Belajar & Bangun',
    description:
      'Ikuti kurikulum terstruktur selama 3 bulan. Tonton pelajaran, selesaikan modul, dan bangun proyek nyata.',
  },
  {
    number: '03',
    title: 'Submit & Dapatkan Review',
    description:
      'Kumpulkan repositori GitHub Anda. Mentor kami akan meninjau kode dan memberikan masukan yang dapat ditindaklanjuti.',
  },
  {
    number: '04',
    title: 'Lulus & Dapat Kerja',
    description:
      'Dapatkan sertifikat, poles portofolio Anda, dan manfaatkan dukungan karier kami untuk mendapatkan pekerjaan impian.',
  },
];

export function BootcampInfo() {
  const { openAuth } = useAuth();

  return (
    <section id="bootcamp" className="py-20 lg:py-28 bg-tech-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]" />
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-action-orange/10 blur-3xl" />
      <div className="absolute bottom-0 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-action-orange uppercase tracking-wide">
            Cara Kerja
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Perjalanan 3 Bulan Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Jalur yang jelas dan terstruktur dari pelajaran pertama hingga pekerjaan tech pertama Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-2xl font-bold font-display text-action-orange mb-4 group-hover:bg-action-orange group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            size="lg"
            onClick={() => openAuth('register')}
            className="bg-action-orange text-white hover:bg-action-orange-dark shadow-xl shadow-action-orange/30 text-base h-12 px-8 group"
          >
            Mulai Perjalanan Anda
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
