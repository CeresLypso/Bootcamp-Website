'use client';

import { AuthProvider } from '@/components/auth/auth-provider';
import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { CourseCatalog } from '@/components/landing/course-catalog';
import { BootcampInfo } from '@/components/landing/bootcamp-info';
import { Features } from '@/components/landing/features';
import { Mentors } from '@/components/landing/mentors';
import { Testimonials } from '@/components/landing/testimonials';
import { Footer } from '@/components/landing/footer';
import { AuthDialog } from '@/components/auth/auth-dialog';

export function LandingPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <CourseCatalog />
          <BootcampInfo />
          <Features />
          <Mentors />
          <Testimonials />
        </main>
        <Footer />
        <AuthDialog />
      </div>
    </AuthProvider>
  );
}
