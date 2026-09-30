import { MentorLayoutClient } from '@/components/dashboard/mentor-layout';

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MentorLayoutClient>{children}</MentorLayoutClient>;
}
