'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/components/auth/auth-provider';
import {
  Code2,
  Brain,
  Database,
  Terminal,
  ArrowRight,
  Check,
  Users,
  Clock,
  Briefcase,
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  image: string;
  modules: number;
  weeks: number;
  features: string[];
  popular?: boolean;
}

const courses: Course[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Bangun aplikasi web lengkap dari depan hingga belakang dengan React, Next.js, Node.js, dan database.',
    icon: Code2,
    image:
      'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    modules: 14,
    weeks: 12,
    features: ['React & Next.js', 'REST & GraphQL API', 'PostgreSQL', 'Deploy & DevOps'],
    popular: true,
  },
  {
    id: 'python',
    title: 'Pemrograman Python',
    description:
      'Kuasai Python dari dasar hingga pola lanjutan. Bangun otomatisasi, API, dan aplikasi dunia nyata.',
    icon: Terminal,
    image:
      'https://images.pexels.com/photos/270623/pexels-photo-270623.png?auto=compress&cs=tinysrgb&h=400&w=600',
    modules: 12,
    weeks: 12,
    features: ['Dasar Python', 'OOP & Design Patterns', 'Web Scraping', 'Script Otomatisasi'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description:
      'Pelajari machine learning, deep learning, dan LLM. Bangun dan deploy aplikasi bertenaga AI.',
    icon: Brain,
    image:
      'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    modules: 13,
    weeks: 12,
    features: ['Dasar Machine Learning', 'Neural Networks', 'NLP & LLM', 'Deploy AI'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description:
      'Pelajari analisis, visualisasi, dan pemodelan data. Ubah data mentah menjadi wawasan bisnis.',
    icon: Database,
    image:
      'https://images.pexels.com/photos/4976710/pexels-photo-4976710.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    modules: 13,
    weeks: 12,
    features: ['Statistik & Analisis', 'Pandas & NumPy', 'Visualisasi Data', 'Predictive Modeling'],
  },
];

export function CourseCatalog() {
  const { openAuth } = useAuth();

  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge className="bg-action-orange/10 text-action-orange border-action-orange/20 hover:bg-action-orange/10 mb-4">
            <span className="px-1">4 Jalur Pilihan</span>
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-blue text-balance">
            Pilih Jalur Teknologi Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Setiap jalur adalah perjalanan lengkap berbasis proyek yang dirancang
            untuk membawa Anda dari dasar hingga siap kerja dalam 3 bulan.
          </p>
        </div>

        {/* Price banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-tech-blue text-white px-6 py-3 shadow-lg">
            <span className="text-sm text-slate-300">Semua jalur di harga</span>
            <span className="text-2xl font-bold font-display text-action-orange">
              Rp 3.000.000
            </span>
            <span className="text-sm text-slate-300">/ jalur</span>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <Card
              key={course.id}
              className={`group relative overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-up ${
                course.popular ? 'ring-2 ring-action-orange' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {course.popular && (
                <div className="absolute top-0 left-0 right-0 bg-action-orange text-white text-center text-xs font-semibold py-1.5 z-10">
                  Paling Populer
                </div>
              )}

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/70 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm shadow-lg">
                  <course.icon className="h-5 w-5 text-tech-blue" />
                </div>
              </div>

              <CardHeader className={`${course.popular ? 'pt-8' : 'pt-5'} pb-2`}>
                <CardTitle className="text-lg font-bold font-display text-tech-blue">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-2 flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {course.modules} modul
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.weeks} minggu
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-foreground/80"
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-action-orange/10 shrink-0">
                        <Check className="h-3 w-3 text-action-orange" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-2 pb-5">
                <Button
                  onClick={() => openAuth('register')}
                  className="w-full bg-tech-blue text-white hover:bg-tech-blue-light group/btn"
                >
                  Daftar Sekarang
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Users className="h-5 w-5 text-action-orange" />
          <span>
            Bergabung dengan <span className="font-bold text-tech-blue">500+ alumni</span>{' '}
            yang telah memulai karier teknologi mereka bersama RF Academy.
          </span>
        </div>
      </div>
    </section>
  );
}
