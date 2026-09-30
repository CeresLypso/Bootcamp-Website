'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Linkedin, Twitter, Github } from 'lucide-react';

const mentors = [
  {
    name: 'Rizky Pratama',
    role: 'Instruktur Utama Full-Stack',
    expertise: 'React, Node.js, System Design',
    avatar: 'https://i.pravatar.cc/150?img=12',
    initials: 'RP',
    rating: 4.9,
  },
  {
    name: 'Sarah Wijaya',
    role: 'Spesialis AI & ML',
    expertise: 'Python, TensorFlow, LLMs',
    avatar: 'https://i.pravatar.cc/150?img=5',
    initials: 'SW',
    rating: 5.0,
  },
  {
    name: 'Andi Nugroho',
    role: 'Lead Data Science',
    expertise: 'Pandas, SQL, Visualisasi Data',
    avatar: 'https://i.pravatar.cc/150?img=33',
    initials: 'AN',
    rating: 4.8,
  },
  {
    name: 'Dewi Lestari',
    role: 'Mentor Python & Backend',
    expertise: 'Django, FastAPI, Otomatisasi',
    avatar: 'https://i.pravatar.cc/150?img=47',
    initials: 'DL',
    rating: 4.9,
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-action-orange uppercase tracking-wide">
            Belajar dari yang Terbaik
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-blue text-balance">
            Kenali Mentor Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Engineer senior dan pakar industri yang akan membimbing Anda di setiap
            langkah perjalanan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <div
              key={mentor.name}
              className="group rounded-2xl bg-white border border-border p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24 ring-4 ring-action-orange/10 ring-offset-2">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback className="bg-tech-blue text-action-orange font-bold text-lg">
                    {mentor.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 rounded-full bg-white shadow-md px-2 py-0.5 border border-border">
                  <Star className="h-3 w-3 fill-action-orange text-action-orange" />
                  <span className="text-xs font-bold text-tech-blue">
                    {mentor.rating}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-tech-blue text-base">
                {mentor.name}
              </h3>
              <p className="text-sm text-action-orange font-medium mt-0.5">
                {mentor.role}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {mentor.expertise}
              </p>

              <div className="flex items-center justify-center gap-2 mt-4">
                {[Linkedin, Twitter, Github].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-tech-blue hover:text-white transition-all"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
