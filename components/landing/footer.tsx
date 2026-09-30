import { GraduationCap, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Bootcamp',
    links: [
      { label: 'Full-Stack Development', href: '#courses' },
      { label: 'Pemrograman Python', href: '#courses' },
      { label: 'Artificial Intelligence', href: '#courses' },
      { label: 'Data Science', href: '#courses' },
    ],
  },
  {
    title: 'Program',
    links: [
      { label: 'Cara Kerja', href: '#bootcamp' },
      { label: 'Kenapa RF Academy', href: '#features' },
      { label: 'Mentor', href: '#mentors' },
      { label: 'Dukungan Karier', href: '#features' },
    ],
  },
  {
    title: 'Dukungan',
    links: [
      { label: 'Komunitas Discord', href: '#' },
      { label: 'Hubungi Kami', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-tech-blue-dark text-slate-300 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-action-orange text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base">
                  RF Academy
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                  Tech Bootcamp
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Bootcamp teknologi hybrid 3 bulan yang dirancang untuk meluncurkan
              karier Anda di bidang Full-Stack, Python, AI, atau Data Science.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-action-orange hover:border-action-orange/30 transition-all"
                  aria-label="Tautan sosial"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-action-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RF Academy Tech Bootcamp. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-slate-500">
            Dibuat dengan semangat untuk calon teknolog.
          </p>
        </div>
      </div>
    </footer>
  );
}
