'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  BookOpen,
  Bell,
  Shield,
  Globe,
  Save,
  LogOut,
} from 'lucide-react';
import { mentorData } from '@/lib/mentor-data';
import { useRouter } from 'next/navigation';

export default function MentorSettingsPage() {
  const router = useRouter();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Pengaturan
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Kelola profil dan preferensi akun mentor Anda
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile card */}
        <Card className="border-0 shadow-sm animate-fade-up">
          <CardHeader>
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <User className="h-5 w-5 text-action-orange" />
              Profil Mentor
            </CardTitle>
            <CardDescription className="text-sm">
              Informasi yang akan ditampilkan kepada peserta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 ring-4 ring-action-orange/10">
                <AvatarImage src={mentorData.avatar} alt={mentorData.name} />
                <AvatarFallback className="bg-tech-blue text-action-orange font-bold text-lg">
                  {mentorData.name.split(' ').map((n) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm">Ubah Foto</Button>
                <p className="text-xs text-muted-foreground mt-2">JPG, PNG. Maks 2MB.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Nama Lengkap</Label>
                <Input id="name" defaultValue={mentorData.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" defaultValue={mentorData.email} className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization" className="text-sm font-medium">Spesialisasi</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="specialization" defaultValue={mentorData.specialization} className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">Peran</Label>
                <Input id="role" defaultValue={mentorData.role} disabled className="bg-muted/50" />
              </div>
            </div>

            <Button className="bg-action-orange text-white hover:bg-action-orange-dark">
              <Save className="h-4 w-4 mr-2" />
              Simpan Perubahan
            </Button>
          </CardContent>
        </Card>

        {/* Notification settings */}
        <Card className="border-0 shadow-sm animate-fade-up animation-delay-200">
          <CardHeader>
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <Bell className="h-5 w-5 text-action-orange" />
              Notifikasi
            </CardTitle>
            <CardDescription className="text-sm">
              Atur bagaimana Anda menerima pemberitahuan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: 'Submit Proyek Baru', desc: 'Notifikasi saat peserta submit proyek baru', defaultChecked: true },
              { label: 'Pesan Discord', desc: 'Notifikasi saat ada mention di Discord', defaultChecked: true },
              { label: 'Laporan Mingguan', desc: 'Ringkasan progres peserta setiap minggu', defaultChecked: false },
              { label: 'Peserta Baru', desc: 'Notifikasi saat peserta baru bergabung', defaultChecked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-tech-blue">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" defaultChecked={item.defaultChecked} className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-action-orange transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-0 shadow-sm animate-fade-up animation-delay-300">
          <CardHeader>
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <Shield className="h-5 w-5 text-action-orange" />
              Keamanan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium">Kata Sandi Saat Ini</Label>
              <Input id="currentPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-sm font-medium">Kata Sandi Baru</Label>
                <Input id="newPassword" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Konfirmasi Kata Sandi</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" />
              </div>
            </div>
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Perbarui Kata Sandi
            </Button>
          </CardContent>
        </Card>

        {/* Danger zone */}
        <Card className="border-0 shadow-sm animate-fade-up animation-delay-400 border-l-4 border-l-red-400">
          <CardHeader>
            <CardTitle className="text-lg font-display text-red-600">Zona Berbahaya</CardTitle>
            <CardDescription className="text-sm">
              Tindakan ini tidak dapat dibatalkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
              onClick={() => router.push('/')}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Keluar dari Akun
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
