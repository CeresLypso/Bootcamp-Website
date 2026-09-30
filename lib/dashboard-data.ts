export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  modules: CourseModule[];
  totalModules: number;
  completedModules: number;
  progress: number;
  instructor: string;
}

export const courses: Course[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Bangun aplikasi web lengkap dengan React, Next.js, dan Node.js',
    icon: 'Code2',
    image: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&h=300&w=500',
    instructor: 'Rizky Pratama',
    totalModules: 14,
    completedModules: 9,
    progress: 64,
    modules: [
      { id: 1, title: 'Pengenalan Pengembangan Web', duration: '45 menit', completed: true },
      { id: 2, title: 'HTML & CSS Modern', duration: '1 jam 20 menit', completed: true },
      { id: 3, title: 'JavaScript Esensial', duration: '2 jam', completed: true },
      { id: 4, title: 'React Fundamentals', duration: '2 jam 30 menit', completed: true },
      { id: 5, title: 'State Management', duration: '1 jam 45 menit', completed: true },
      { id: 6, title: 'Next.js & Routing', duration: '2 jam', completed: true },
      { id: 7, title: 'REST API dengan Node.js', duration: '2 jam 15 menit', completed: true },
      { id: 8, title: 'Database PostgreSQL', duration: '1 jam 50 menit', completed: true },
      { id: 9, title: 'Autentikasi & Otorisasi', duration: '2 jam', completed: true },
      { id: 10, title: 'Deployment & DevOps', duration: '1 jam 30 menit', completed: false },
      { id: 11, title: 'Testing & Debugging', duration: '1 jam 40 menit', completed: false },
      { id: 12, title: 'Proyek Akhir: E-Commerce', duration: '3 jam', completed: false },
      { id: 13, title: 'Optimasi Performa', duration: '1 jam 20 menit', completed: false },
      { id: 14, title: 'Presentasi & Code Review', duration: '2 jam', completed: false },
    ],
  },
  {
    id: 'python',
    title: 'Pemrograman Python',
    description: 'Kuasai Python dari dasar hingga otomatisasi dan API',
    icon: 'Terminal',
    image: 'https://images.pexels.com/photos/270623/pexels-photo-270623.png?auto=compress&cs=tinysrgb&h=300&w=500',
    instructor: 'Dewi Lestari',
    totalModules: 12,
    completedModules: 5,
    progress: 42,
    modules: [
      { id: 1, title: 'Pengenalan Python', duration: '1 jam', completed: true },
      { id: 2, title: 'Tipe Data & Variabel', duration: '1 jam 30 menit', completed: true },
      { id: 3, title: 'Kontrol Alur & Loop', duration: '2 jam', completed: true },
      { id: 4, title: 'Fungsi & Modul', duration: '1 jam 45 menit', completed: true },
      { id: 5, title: 'OOP di Python', duration: '2 jam 15 menit', completed: true },
      { id: 6, title: 'Web Scraping', duration: '1 jam 30 menit', completed: false },
      { id: 7, title: 'Otomatisasi Script', duration: '2 jam', completed: false },
      { id: 8, title: 'API dengan FastAPI', duration: '2 jam 30 menit', completed: false },
      { id: 9, title: 'File Handling & CSV', duration: '1 jam', completed: false },
      { id: 10, title: 'Testing di Python', duration: '1 jam 20 menit', completed: false },
      { id: 11, title: 'Proyek Akhir: Bot Otomatis', duration: '3 jam', completed: false },
      { id: 12, title: 'Deploy Aplikasi Python', duration: '1 jam 30 menit', completed: false },
    ],
  },
];

export interface ProjectSubmission {
  id: string;
  courseTitle: string;
  githubLink: string;
  projectTitle: string;
  status: 'pending' | 'reviewed' | 'approved';
  submittedAt: string;
  feedback?: string;
}

export const submittedProjects: ProjectSubmission[] = [
  {
    id: '1',
    courseTitle: 'Full-Stack Development',
    githubLink: 'https://github.com/student/ecommerce-app',
    projectTitle: 'Aplikasi E-Commerce',
    status: 'approved',
    submittedAt: '15 Sep 2026',
    feedback: 'Kerja bagus! Struktur kode rapi, API well-structured. Pertahankan!',
  },
  {
    id: '2',
    courseTitle: 'Full-Stack Development',
    githubLink: 'https://github.com/student/auth-system',
    projectTitle: 'Sistem Autentikasi',
    status: 'reviewed',
    submittedAt: '20 Sep 2026',
    feedback: 'Bagus, tapi perhatikan handling error pada edge case token expired.',
  },
];

export const studentData = {
  name: 'Budi Santoso',
  email: 'budi.santoso@email.com',
  avatar: 'https://i.pravatar.cc/150?img=15',
  joinedAt: 'Juni 2026',
  currentTrack: 'Full-Stack Development',
  overallProgress: 53,
  certificatesEarned: 0,
  projectsSubmitted: 2,
  hoursLearned: 47,
};
