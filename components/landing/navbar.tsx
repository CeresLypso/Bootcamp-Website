'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { GraduationCap, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Program Bootcamp', href: '#courses' },
  { label: 'Cara Kerja', href: '#bootcamp' },
  { label: 'Keunggulan', href: '#features' },
  { label: 'Mentor', href: '#mentors' },
];

export function Navbar() {
  const { openAuth } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-tech-blue text-action-orange">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-tech-blue text-base">
              RF Academy
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase">
              Tech Bootcamp
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-tech-blue/70 hover:text-tech-blue transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-action-orange rounded-full transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => openAuth('login')}
            className="text-tech-blue hover:bg-tech-blue/5 font-medium"
          >
            Masuk
          </Button>
          <Button
            onClick={() => openAuth('register')}
            className="bg-action-orange text-white hover:bg-action-orange-dark shadow-md shadow-action-orange/20 font-medium"
          >
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-tech-blue"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Buka menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-tech-blue hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-border mt-3">
              <Button
                variant="outline"
                onClick={() => {
                  setMobileOpen(false);
                  openAuth('login');
                }}
                className="w-full"
              >
                Masuk
              </Button>
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  openAuth('register');
                }}
                className="w-full bg-action-orange text-white hover:bg-action-orange-dark"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
