'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  MessageCircle,
  Hash,
  Users,
  ArrowRight,
  Search,
  Bell,
  Pin,
  Heart,
  Reply,
  Smile,
} from 'lucide-react';

const channels = [
  { name: 'pengumuman', type: 'announcement', unread: 2, members: 500 },
  { name: 'full-stack', type: 'course', unread: 5, members: 180 },
  { name: 'python', type: 'course', unread: 0, members: 120 },
  { name: 'ai-ml', type: 'course', unread: 3, members: 95 },
  { name: 'data-science', type: 'course', unread: 0, members: 105 },
  { name: 'proyek-diskusi', type: 'project', unread: 7, members: 400 },
  { name: 'lowongan-kerja', type: 'career', unread: 4, members: 500 },
];

const messages = [
  {
    author: 'Rizky Pratama',
    role: 'Mentor',
    avatar: 'https://i.pravatar.cc/150?img=12',
    initials: 'RP',
    time: '10:30',
    content: 'Selamat pagi semuanya! Minggu ini kita akan bahas tentang Deployment & DevOps. Jangan lupa siapkan akun Vercel dan Railway ya.',
    pinned: true,
    reactions: 12,
  },
  {
    author: 'Sarah Wijaya',
    role: 'Mentor',
    avatar: 'https://i.pravatar.cc/150?img=5',
    initials: 'SW',
    time: '10:45',
    content: 'Untuk peserta jalur AI, jangan lupa submit progres training model kalian di thread #ai-ml. Saya akan review satu per satu.',
    reactions: 8,
  },
  {
    author: 'Budi Santoso',
    role: 'Peserta',
    avatar: 'https://i.pravatar.cc/150?img=15',
    initials: 'BS',
    time: '11:02',
    content: 'Kak, untuk deployment Next.js ke Vercel apakah perlu konfigurasi environment variables manual? Atau otomatis terdeteksi dari .env?',
    reactions: 3,
  },
  {
    author: 'Rizky Pratama',
    role: 'Mentor',
    avatar: 'https://i.pravatar.cc/150?img=12',
    initials: 'RP',
    time: '11:15',
    content: '@Budi Santoso Perlu di-set manual di dashboard Vercel, Budi. File .env itu hanya untuk local development. Di production, set via Project Settings > Environment Variables.',
    reactions: 15,
  },
  {
    author: 'Putri Andini',
    role: 'Peserta',
    avatar: 'https://i.pravatar.cc/150?img=23',
    initials: 'PA',
    time: '11:30',
    content: 'Sudah berhasil deploy! Terima kasih pak atas panduannya. Link-nya: https://my-ecommerce.vercel.app',
    reactions: 20,
  },
];

export default function DiscordPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6 animate-fade-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-tech-blue">
          Komunitas Discord
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Bergabung dengan komunitas, tanya jawab, dan diskusi dengan mentor serta peserta lainnya
        </p>
      </div>

      {/* Join banner */}
      <div className="relative overflow-hidden rounded-2xl bg-tech-blue p-6 sm:p-8 mb-6 animate-fade-up">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]" />
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-action-orange/20 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5865F2] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-white">
                RF Academy Discord
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              Server Discord resmi RF Academy — tempat diskusi, tanya jawab, dan networking dengan 500+ peserta dan mentor.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-lg shrink-0"
          >
            Gabung Server
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Channels list */}
        <Card className="border-0 shadow-sm animate-fade-up animation-delay-200">
          <CardHeader>
            <CardTitle className="text-base font-display flex items-center gap-2">
              <Hash className="h-4 w-4 text-action-orange" />
              Channel
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-80 overflow-y-auto">
              {channels.map((channel) => (
                <button
                  key={channel.name}
                  className="w-full flex items-center gap-3 px-5 py-3 border-b border-border last:border-0 hover:bg-muted/50 transition-colors text-left group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-tech-blue/10 shrink-0">
                    <Hash className="h-4 w-4 text-tech-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-tech-blue truncate">
                      {channel.name}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {channel.members} anggota
                    </p>
                  </div>
                  {channel.unread > 0 && (
                    <Badge className="bg-action-orange text-white border-0 shrink-0">
                      {channel.unread}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat preview */}
        <Card className="lg:col-span-2 border-0 shadow-sm animate-fade-up animation-delay-300">
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-display flex items-center gap-2">
                  <Hash className="h-4 w-4 text-action-orange" />
                  pengumuman
                </CardTitle>
                <CardDescription className="text-xs mt-1">
                  Channel untuk pengumuman resmi dari RF Academy
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-muted-foreground hover:text-tech-blue p-1.5 rounded-lg hover:bg-muted transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button className="text-muted-foreground hover:text-tech-blue p-1.5 rounded-lg hover:bg-muted transition-colors relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-action-orange" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <div className="max-h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 animate-fade-up ${msg.pinned ? 'bg-action-orange/5 -mx-4 px-4 py-3 rounded-lg border-l-2 border-action-orange' : ''}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-tech-blue text-action-orange text-xs font-bold">
                      {msg.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-tech-blue">
                        {msg.author}
                      </span>
                      <Badge
                        className={`text-[10px] px-1.5 py-0 ${
                          msg.role === 'Mentor'
                            ? 'bg-action-orange/10 text-action-orange border-action-orange/20'
                            : 'bg-tech-blue/10 text-tech-blue border-tech-blue/20'
                        }`}
                      >
                        {msg.role}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                      {msg.pinned && (
                        <Pin className="h-3 w-3 text-action-orange" />
                      )}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {msg.content}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-action-orange transition-colors">
                        <Heart className="h-3.5 w-3.5" />
                        {msg.reactions}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-tech-blue transition-colors">
                        <Reply className="h-3.5 w-3.5" />
                        Balas
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input placeholder */}
            <div className="border-t border-border p-4">
              <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <Smile className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Ketik pesan di #pengumuman..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  disabled
                />
                <Button size="sm" className="bg-action-orange text-white hover:bg-action-orange-dark shrink-0" disabled>
                  Kirim
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Gabung server Discord untuk mulai mengirim pesan
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
