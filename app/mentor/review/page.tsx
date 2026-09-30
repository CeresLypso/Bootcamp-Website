'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Code2,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Github,
  Loader2,
  Send,
} from 'lucide-react';
import { students, type Student } from '@/lib/mentor-data';
import { Input } from '@/components/ui/input';

const statusConfig = {
  approved: { label: 'Disetujui', icon: CheckCircle2, className: 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100' },
  reviewed: { label: 'Direview', icon: Clock, className: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100' },
  pending: { label: 'Menunggu Review', icon: AlertCircle, className: 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100' },
};

export default function MentorReviewPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [reviewingStudent, setReviewingStudent] = useState<Student | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [studentList, setStudentList] = useState(students);

  const filteredStudents = useMemo(() => {
    return studentList.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.projectTitle.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' || s.projectStatus === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, studentList]);

  const handleOpenReview = (student: Student) => {
    setReviewingStudent(student);
    setFeedback(student.projectStatus === 'pending' ? '' : '');
    setReviewed(false);
  };

  const handleApprove = () => {
    if (!reviewingStudent) return;
    setSubmitting(true);
    setTimeout(() => {
      setStudentList((prev) =>
        prev.map((s) =>
          s.id === reviewingStudent.id
            ? { ...s, projectStatus: 'approved' as const }
            : s
        )
      );
      setSubmitting(false);
      setReviewed(true);
      setTimeout(() => {
        setReviewingStudent(null);
        setReviewed(false);
      }, 1500);
    }, 800);
  };

  const handleSaveReview = () => {
    if (!reviewingStudent) return;
    setSubmitting(true);
    setTimeout(() => {
      setStudentList((prev) =>
        prev.map((s) =>
          s.id === reviewingStudent.id
            ? { ...s, projectStatus: 'reviewed' as const }
            : s
        )
      );
      setSubmitting(false);
      setReviewed(true);
      setTimeout(() => {
        setReviewingStudent(null);
        setReviewed(false);
      }, 1500);
    }, 800);
  };

  const counts = {
    pending: studentList.filter((s) => s.projectStatus === 'pending').length,
    reviewed: studentList.filter((s) => s.projectStatus === 'reviewed').length,
    approved: studentList.filter((s) => s.projectStatus === 'approved').length,
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Review Tugas
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Tinjau repositori GitHub yang disubmit oleh peserta dan berikan feedback
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-up animation-delay-100">
        {[
          { key: 'all', label: 'Semua', count: studentList.length },
          { key: 'pending', label: 'Menunggu', count: counts.pending },
          { key: 'reviewed', label: 'Direview', count: counts.reviewed },
          { key: 'approved', label: 'Disetujui', count: counts.approved },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setStatusFilter(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              statusFilter === tab.key
                ? 'bg-tech-blue text-white shadow-md'
                : 'bg-white text-muted-foreground border border-border hover:bg-muted'
            }`}
          >
            {tab.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              statusFilter === tab.key ? 'bg-white/20' : 'bg-muted'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
        <div className="relative ml-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari peserta atau proyek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-9 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Submissions grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student, i) => {
          const config = statusConfig[student.projectStatus];
          return (
            <Card
              key={student.id}
              className="border-0 shadow-sm hover:shadow-lg transition-all animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <CardContent className="p-5">
                {/* Student info */}
                <div className="flex items-center gap-3 mb-4">
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
                    <p className="text-xs text-muted-foreground truncate">{student.course}</p>
                  </div>
                  <Badge className={`${config.className} shrink-0`}>
                    <config.icon className="h-3 w-3 mr-1" />
                    {config.label}
                  </Badge>
                </div>

                {/* Project info */}
                <div className="rounded-lg bg-muted/50 p-3 mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Proyek</p>
                  <p className="text-sm font-semibold text-tech-blue">{student.projectTitle}</p>
                  <p className="text-xs text-muted-foreground mt-1">Disubmit: {student.submittedAt}</p>
                </div>

                {/* GitHub link */}
                <a
                  href={student.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-action-orange hover:text-action-orange-dark transition-colors mb-4 group"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  <span className="truncate flex-1">{student.githubLink.replace('https://github.com/', '')}</span>
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Action button */}
                <Button
                  onClick={() => handleOpenReview(student)}
                  className="w-full bg-action-orange text-white hover:bg-action-orange-dark"
                >
                  <Code2 className="h-4 w-4 mr-1.5" />
                  Review Kode
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-16">
          <Code2 className="h-14 w-14 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Tidak ada tugas untuk direview</p>
        </div>
      )}

      {/* Review dialog */}
      <Dialog
        open={!!reviewingStudent}
        onOpenChange={(open) => {
          if (!open) {
            setReviewingStudent(null);
            setReviewed(false);
          }
        }}
      >
        <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden gap-0">
          {reviewingStudent && (
            <>
              {/* Header */}
              <div className="bg-tech-blue px-6 pt-6 pb-5">
                <DialogHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-action-orange/30">
                      <AvatarImage src={reviewingStudent.avatar} alt={reviewingStudent.name} />
                      <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
                        {reviewingStudent.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <DialogTitle className="text-lg font-display text-white">
                        {reviewingStudent.name}
                      </DialogTitle>
                      <DialogDescription className="text-xs text-slate-300">
                        {reviewingStudent.course} — {reviewingStudent.projectTitle}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              {/* Body */}
              {reviewed ? (
                <div className="px-6 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-base font-semibold text-tech-blue">Review berhasil disimpan!</p>
                  <p className="text-sm text-muted-foreground mt-1">Feedback telah dikirim ke peserta.</p>
                </div>
              ) : (
                <div className="px-6 py-5 space-y-4">
                  {/* GitHub link */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Repositori GitHub</Label>
                    <a
                      href={reviewingStudent.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 p-3 hover:bg-muted transition-colors group"
                    >
                      <Github className="h-5 w-5 text-tech-blue shrink-0" />
                      <span className="text-sm text-tech-blue flex-1 truncate">
                        {reviewingStudent.githubLink.replace('https://', '')}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-action-orange transition-colors shrink-0" />
                    </a>
                  </div>

                  {/* Feedback */}
                  <div className="space-y-2">
                    <Label htmlFor="feedback" className="text-sm font-medium">
                      Feedback untuk Peserta
                    </Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tulis masukan konstruktif tentang kode, struktur, dan area yang perlu diperbaiki..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={handleSaveReview}
                      disabled={submitting}
                      variant="outline"
                      className="flex-1 h-11"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      Simpan Review
                    </Button>
                    <Button
                      onClick={handleApprove}
                      disabled={submitting}
                      className="flex-1 h-11 bg-green-600 text-white hover:bg-green-700"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                      )}
                      Setujui Proyek
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
