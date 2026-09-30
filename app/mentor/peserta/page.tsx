'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Code2,
  Search,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { students } from '@/lib/mentor-data';

const courseOptions = ['Semua Program', 'Full-Stack Web Dev', 'Python', 'AI & Machine Learning', 'Data Science'];

const statusConfig = {
  approved: { label: 'Disetujui', className: 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100' },
  reviewed: { label: 'Direview', className: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100' },
  pending: { label: 'Menunggu', className: 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100' },
};

const ITEMS_PER_PAGE = 6;

export default function MentorStudentsPage() {
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState('Semua Program');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase());
      const matchesCourse = courseFilter === 'Semua Program' || s.course === courseFilter;
      return matchesSearch && matchesCourse;
    });
  }, [search, courseFilter]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleReview = (githubLink: string) => {
    window.open(githubLink, '_blank');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Daftar Peserta
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Kelola dan pantau progres semua peserta yang Anda bimbing
        </p>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Peserta', value: students.length, icon: Users, color: 'text-blue-600 bg-blue-500/10' },
          { label: 'Progres Rata-rata', value: `${Math.round(students.reduce((a, s) => a + s.progress, 0) / students.length)}%`, icon: Users, color: 'text-action-orange bg-action-orange/10' },
          { label: 'Menunggu Review', value: students.filter((s) => s.projectStatus === 'pending').length, icon: Code2, color: 'text-amber-600 bg-amber-500/10' },
          { label: 'Disetujui', value: students.filter((s) => s.projectStatus === 'approved').length, icon: Code2, color: 'text-green-600 bg-green-500/10' },
        ].map((stat, i) => (
          <Card key={stat.label} className="border-0 shadow-sm animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg shrink-0 ${stat.color}`}>
                <stat.icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-lg font-bold font-display text-tech-blue">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table card */}
      <Card className="border-0 shadow-sm animate-fade-up animation-delay-200">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-display">Tabel Data Peserta</CardTitle>
              <CardDescription className="text-sm mt-1">
                {filteredStudents.length} peserta ditemukan
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari nama peserta..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 h-9"
                />
              </div>
              <Select
                value={courseFilter}
                onValueChange={(v) => {
                  setCourseFilter(v);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full sm:w-48 h-9">
                  <SelectValue placeholder="Filter program" />
                </SelectTrigger>
                <SelectContent>
                  {courseOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent bg-muted/30">
                  <TableHead className="font-semibold text-tech-blue text-xs uppercase tracking-wide pl-6">
                    Nama Peserta
                  </TableHead>
                  <TableHead className="font-semibold text-tech-blue text-xs uppercase tracking-wide">
                    Program Kelas
                  </TableHead>
                  <TableHead className="font-semibold text-tech-blue text-xs uppercase tracking-wide">
                    Progres Belajar
                  </TableHead>
                  <TableHead className="font-semibold text-tech-blue text-xs uppercase tracking-wide">
                    Status Proyek
                  </TableHead>
                  <TableHead className="font-semibold text-tech-blue text-xs uppercase tracking-wide text-right pr-6">
                    Aksi
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="pl-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 shrink-0">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-tech-blue">
                            {student.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{student.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-tech-blue/10 text-tech-blue border-tech-blue/20 hover:bg-tech-blue/10 font-medium">
                        {student.course}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="w-32">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-tech-blue">
                            {student.progress}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {student.completedModules}/{student.totalModules}
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              student.progress >= 75
                                ? 'bg-green-500'
                                : student.progress >= 50
                                ? 'bg-action-orange'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusConfig[student.projectStatus].className}>
                        {statusConfig[student.projectStatus].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <Button
                        size="sm"
                        onClick={() => handleReview(student.githubLink)}
                        className="bg-action-orange text-white hover:bg-action-orange-dark shadow-sm group"
                      >
                        <Code2 className="h-3.5 w-3.5 mr-1.5" />
                        Review Kode
                        <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-border">
            {paginatedStudents.map((student) => (
              <div key={student.id} className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-tech-blue truncate">
                      {student.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="bg-tech-blue/10 text-tech-blue border-tech-blue/20 hover:bg-tech-blue/10 font-medium">
                    {student.course}
                  </Badge>
                  <Badge className={statusConfig[student.projectStatus].className}>
                    {statusConfig[student.projectStatus].label}
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-tech-blue">
                      Progres: {student.progress}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {student.completedModules}/{student.totalModules} modul
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        student.progress >= 75
                          ? 'bg-green-500'
                          : student.progress >= 50
                          ? 'bg-action-orange'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => handleReview(student.githubLink)}
                  className="w-full bg-action-orange text-white hover:bg-action-orange-dark"
                >
                  <Code2 className="h-3.5 w-3.5 mr-1.5" />
                  Review Kode
                  <ExternalLink className="h-3 w-3 ml-1.5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Tidak ada peserta ditemukan</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Halaman {currentPage} dari {totalPages} — {filteredStudents.length} peserta total
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8"
                >
                  <span className="hidden sm:inline">Berikutnya</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
