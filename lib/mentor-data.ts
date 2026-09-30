export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  initials: string;
  course: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  githubLink: string;
  projectTitle: string;
  projectStatus: 'pending' | 'reviewed' | 'approved';
  submittedAt: string;
  lastActive: string;
  joinedAt: string;
}

export const students: Student[] = [
  {
    id: 'std-001',
    name: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    avatar: 'https://i.pravatar.cc/150?img=15',
    initials: 'BS',
    course: 'Full-Stack Web Dev',
    progress: 64,
    completedModules: 9,
    totalModules: 14,
    githubLink: 'https://github.com/budi-s/auth-system',
    projectTitle: 'Sistem Autentikasi',
    projectStatus: 'reviewed',
    submittedAt: '20 Sep 2026',
    lastActive: '2 jam lalu',
    joinedAt: 'Juni 2026',
  },
  {
    id: 'std-002',
    name: 'Putri Andini',
    email: 'putri.andini@email.com',
    avatar: 'https://i.pravatar.cc/150?img=23',
    initials: 'PA',
    course: 'Data Science',
    progress: 78,
    completedModules: 10,
    totalModules: 13,
    githubLink: 'https://github.com/putri-a/data-analysis',
    projectTitle: 'Analisis Data Penjualan',
    projectStatus: 'approved',
    submittedAt: '18 Sep 2026',
    lastActive: '5 jam lalu',
    joinedAt: 'Juni 2026',
  },
  {
    id: 'std-003',
    name: 'Hendra Kusuma',
    email: 'hendra.kusuma@email.com',
    avatar: 'https://i.pravatar.cc/150?img=51',
    initials: 'HK',
    course: 'AI & Machine Learning',
    progress: 45,
    completedModules: 6,
    totalModules: 13,
    githubLink: 'https://github.com/hendra-k/ml-classifier',
    projectTitle: 'Klasifikasi Gambar dengan CNN',
    projectStatus: 'pending',
    submittedAt: '25 Sep 2026',
    lastActive: '1 jam lalu',
    joinedAt: 'Juni 2026',
  },
  {
    id: 'std-004',
    name: 'Siti Rahayu',
    email: 'siti.rahayu@email.com',
    avatar: 'https://i.pravatar.cc/150?img=44',
    initials: 'SR',
    course: 'Python',
    progress: 92,
    completedModules: 11,
    totalModules: 12,
    githubLink: 'https://github.com/siti-r/automation-bot',
    projectTitle: 'Bot Otomatisasi WhatsApp',
    projectStatus: 'approved',
    submittedAt: '16 Sep 2026',
    lastActive: '30 menit lalu',
    joinedAt: 'Juni 2026',
  },
  {
    id: 'std-005',
    name: 'Agus Wijaya',
    email: 'agus.wijaya@email.com',
    avatar: 'https://i.pravatar.cc/150?img=68',
    initials: 'AW',
    course: 'Full-Stack Web Dev',
    progress: 35,
    completedModules: 5,
    totalModules: 14,
    githubLink: 'https://github.com/agus-w/portfolio-app',
    projectTitle: 'Aplikasi Portofolio',
    projectStatus: 'pending',
    submittedAt: '26 Sep 2026',
    lastActive: '3 jam lalu',
    joinedAt: 'Juli 2026',
  },
  {
    id: 'std-006',
    name: 'Dewi Sagita',
    email: 'dewi.sagita@email.com',
    avatar: 'https://i.pravatar.cc/150?img=32',
    initials: 'DS',
    course: 'AI & Machine Learning',
    progress: 58,
    completedModules: 8,
    totalModules: 13,
    githubLink: 'https://github.com/dewi-s/nlp-sentiment',
    projectTitle: 'Analisis Sentimen NLP',
    projectStatus: 'reviewed',
    submittedAt: '22 Sep 2026',
    lastActive: '6 jam lalu',
    joinedAt: 'Juli 2026',
  },
  {
    id: 'std-007',
    name: 'Rudi Hartono',
    email: 'rudi.hartono@email.com',
    avatar: 'https://i.pravatar.cc/150?img=60',
    initials: 'RH',
    course: 'Python',
    progress: 25,
    completedModules: 3,
    totalModules: 12,
    githubLink: 'https://github.com/rudi-h/web-scraper',
    projectTitle: 'Web Scraper E-Commerce',
    projectStatus: 'pending',
    submittedAt: '27 Sep 2026',
    lastActive: '1 hari lalu',
    joinedAt: 'Juli 2026',
  },
  {
    id: 'std-008',
    name: 'Lina Marlina',
    email: 'lina.marlina@email.com',
    avatar: 'https://i.pravatar.cc/150?img=27',
    initials: 'LM',
    course: 'Data Science',
    progress: 85,
    completedModules: 11,
    totalModules: 13,
    githubLink: 'https://github.com/lina-m/predictive-model',
    projectTitle: 'Model Prediksi Harga Rumah',
    projectStatus: 'approved',
    submittedAt: '17 Sep 2026',
    lastActive: '4 jam lalu',
    joinedAt: 'Juni 2026',
  },
  {
    id: 'std-009',
    name: 'Fajar Nugraha',
    email: 'fajar.nugraha@email.com',
    avatar: 'https://i.pravatar.cc/150?img=53',
    initials: 'FN',
    course: 'Full-Stack Web Dev',
    progress: 50,
    completedModules: 7,
    totalModules: 14,
    githubLink: 'https://github.com/fajar-n/ecommerce-api',
    projectTitle: 'REST API E-Commerce',
    projectStatus: 'reviewed',
    submittedAt: '24 Sep 2026',
    lastActive: '8 jam lalu',
    joinedAt: 'Juli 2026',
  },
  {
    id: 'std-010',
    name: 'Maya Putri',
    email: 'maya.putri@email.com',
    avatar: 'https://i.pravatar.cc/150?img=36',
    initials: 'MP',
    course: 'Python',
    progress: 67,
    completedModules: 8,
    totalModules: 12,
    githubLink: 'https://github.com/maya-p/fastapi-project',
    projectTitle: 'API FastAPI untuk Manajemen Tugas',
    projectStatus: 'pending',
    submittedAt: '28 Sep 2026',
    lastActive: '2 jam lalu',
    joinedAt: 'Juni 2026',
  },
];

export const mentorData = {
  name: 'Rizky Pratama',
  email: 'rizky.pratama@rfacademy.id',
  avatar: 'https://i.pravatar.cc/150?img=12',
  role: 'Mentor',
  specialization: 'Full-Stack Development',
};

export interface MentorStat {
  totalStudents: number;
  activeToday: number;
  pendingReviews: number;
  approvedProjects: number;
  avgProgress: number;
}

export const mentorStats: MentorStat = {
  totalStudents: 10,
  activeToday: 7,
  pendingReviews: 4,
  approvedProjects: 3,
  avgProgress: 60,
};
