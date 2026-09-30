'use client';

import {
  Laptop,
  Users2,
  Github,
  Trophy,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Pembelajaran Hybrid',
    description:
      'Kelas online fleksibel dipadukan dengan sesi mentor tatap muka. Belajar dari mana saja, kapan saja.',
  },
  {
    icon: Users2,
    title: 'Mentor Berpengalaman',
    description:
      'Belajar langsung dari engineer senior dan profesional industri dengan pengalaman bertahun-tahun.',
  },
  {
    icon: Github,
    title: 'Proyek Dunia Nyata',
    description:
      'Bangun portofolio proyek siap-GitHub yang menunjukkan keahlian Anda kepada calon pemberi kerja.',
  },
  {
    icon: Trophy,
    title: 'Dukungan Karier',
    description:
      'Dapatkan persiapan wawancara, tinjauan CV, dan pengenalan langsung ke jaringan mitra hiring kami.',
  },
  {
    icon: MessageSquare,
    title: 'Komunitas Discord Aktif',
    description:
      'Jangan terjebak sendiri. Bergabunglah dengan komunitas Discord kami untuk dukungan teman dan mentor 24/7.',
  },
  {
    icon: GraduationCap,
    title: 'Sertifikat Terverifikasi',
    description:
      'Dapatkan sertifikat pengakuan setelah menyelesaikan bootcamp yang memvalidasi keahlian baru Anda.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-action-orange uppercase tracking-wide">
            Kenapa RF Academy
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-blue text-balance">
            Semua yang Anda Butuhkan untuk Sukses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Kami tidak sekadar ceramah. Bootcamp kami dibangun di atas praktik langsung,
            mentorship, dan komunitas yang saling mendukung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-action-orange/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tech-blue text-action-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-tech-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
