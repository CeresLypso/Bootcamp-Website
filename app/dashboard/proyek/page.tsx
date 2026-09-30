'use client';

import { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Github,
  Link2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
  Send,
  ExternalLink,
} from 'lucide-react';
import { courses, submittedProjects, type ProjectSubmission } from '@/lib/dashboard-data';

export default function SubmitProjectPage() {
  const [githubLink, setGithubLink] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [projects, setProjects] = useState<ProjectSubmission[]>(submittedProjects);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const newProject: ProjectSubmission = {
        id: Date.now().toString(),
        courseTitle: courses.find((c) => c.id === selectedCourse)?.title || 'Full-Stack Development',
        githubLink,
        projectTitle,
        status: 'pending',
        submittedAt: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      };
      setProjects((prev) => [newProject, ...prev]);
      setLoading(false);
      setSuccess(true);
      setGithubLink('');
      setProjectTitle('');
      setSelectedCourse('');
      setNotes('');
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  const statusConfig = {
    approved: { label: 'Disetujui', icon: CheckCircle2, className: 'bg-green-100 text-green-700 border-green-200' },
    reviewed: { label: 'Direview', icon: Clock, className: 'bg-blue-100 text-blue-700 border-blue-200' },
    pending: { label: 'Menunggu Review', icon: AlertCircle, className: 'bg-amber-100 text-amber-700 border-amber-200' },
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Submit Proyek
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Kumpulkan tautan repositori GitHub Anda untuk ditinjau oleh mentor
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Submit form */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-sm animate-fade-up">
            <CardHeader>
              <CardTitle className="text-lg font-display flex items-center gap-2">
                <Github className="h-5 w-5 text-action-orange" />
                Kumpulkan Proyek Baru
              </CardTitle>
              <CardDescription className="text-sm">
                Pastikan repositori GitHub Anda publik dan memiliki README yang jelas
              </CardDescription>
            </CardHeader>
            <CardContent>
              {success && (
                <div className="mb-4 flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4 animate-fade-up">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Proyek berhasil disubmit!</p>
                    <p className="text-xs text-green-700">Mentor akan meninjau proyek Anda dalam 2-3 hari kerja.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course select */}
                <div className="space-y-2">
                  <Label htmlFor="course" className="text-sm font-medium">
                    Pilih Kursus
                  </Label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse} required>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Pilih kursus terkait" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Project title */}
                <div className="space-y-2">
                  <Label htmlFor="projectTitle" className="text-sm font-medium">
                    Judul Proyek
                  </Label>
                  <Input
                    id="projectTitle"
                    type="text"
                    placeholder="Contoh: Aplikasi E-Commerce dengan Next.js"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    required
                  />
                </div>

                {/* GitHub link */}
                <div className="space-y-2">
                  <Label htmlFor="githubLink" className="text-sm font-medium">
                    Tautan Repositori GitHub
                  </Label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="githubLink"
                      type="url"
                      placeholder="https://github.com/username/nama-repo"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pastikan repositori bersifat publik
                  </p>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium">
                    Catatan untuk Mentor (Opsional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Jelaskan fitur proyek, teknologi yang digunakan, atau tantangan yang dihadapi..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-action-orange text-white hover:bg-action-orange-dark shadow-lg shadow-action-orange/25 h-11"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Proyek
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Submission history */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm animate-fade-up animation-delay-200">
            <CardHeader>
              <CardTitle className="text-base font-display">Riwayat Submit</CardTitle>
              <CardDescription className="text-xs">
                {projects.length} proyek telah disubmit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {projects.length === 0 ? (
                <div className="text-center py-8">
                  <Github className="h-10 w-10 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Belum ada proyek disubmit
                  </p>
                </div>
              ) : (
                projects.map((project) => {
                  const config = statusConfig[project.status];
                  return (
                    <div
                      key={project.id}
                      className="rounded-xl border border-border p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-tech-blue truncate">
                            {project.projectTitle}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {project.courseTitle}
                          </p>
                        </div>
                        <Badge className={`${config.className} hover:${config.className} shrink-0 ml-2`}>
                          <config.icon className="h-3 w-3 mr-1" />
                          {config.label}
                        </Badge>
                      </div>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-action-orange hover:text-action-orange-dark transition-colors mt-2"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span className="truncate">{project.githubLink.replace('https://', '')}</span>
                        <ExternalLink className="h-3 w-3 shrink-0" />
                      </a>

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <span className="text-xs text-muted-foreground">
                          {project.submittedAt}
                        </span>
                      </div>

                      {project.feedback && (
                        <div className="mt-3 rounded-lg bg-muted/50 p-3">
                          <p className="text-xs font-medium text-tech-blue mb-1">
                            Feedback Mentor:
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {project.feedback}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
