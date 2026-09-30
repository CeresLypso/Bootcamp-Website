'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "RF Academy sepenuhnya mengubah arah karier saya. Dari tidak bisa coding sama sekali, saya berhasil mendapat posisi full-stack developer hanya 4 bulan setelah lulus.",
    name: 'Budi Santoso',
    role: 'Full-Stack Developer di Tokopedia',
    avatar: 'https://i.pravatar.cc/150?img=15',
    initials: 'BS',
  },
  {
    quote:
      "Dukungan mentor luar biasa. Setiap kali saya terjebak, mentor selalu ada untuk membimbing. Pembelajaran berbasis proyek benar-benar memperkuat keahlian saya.",
    name: 'Putri Andini',
    role: 'Data Analyst di Gojek',
    avatar: 'https://i.pravatar.cc/150?img=23',
    initials: 'PA',
  },
  {
    quote:
      "Format hybrid cocok sempurna dengan pekerjaan penuh waktu saya. Saya bisa menonton kuliah di malam hari dan mengikuti sesi mentor di akhir pekan. Investasi terbaik yang pernah saya buat.",
    name: 'Hendra Kusuma',
    role: 'ML Engineer di Bukalapak',
    avatar: 'https://i.pravatar.cc/150?img=51',
    initials: 'HK',
  },
];

export function Testimonials() {
  const { openAuth } = useAuth();

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-action-orange uppercase tracking-wide">
            Kisah Sukses
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-blue text-balance">
            Alumni Kami Berkembang Pesat
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border p-6 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-5xl font-serif text-action-orange/20 leading-none select-none">
                &ldquo;
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-action-orange/20"
                />
                <div>
                  <p className="font-bold text-tech-blue text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-tech-blue rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-white">
                Siap menulis kisah sukses Anda?
              </p>
              <p className="text-sm text-slate-300">
                Bergabung dengan angkatan berikutnya dan mulai bangun masa depan Anda hari ini.
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => openAuth('register')}
              className="bg-action-orange text-white hover:bg-action-orange-dark shadow-lg shadow-action-orange/30 h-12 px-8 group shrink-0"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
