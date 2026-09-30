'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

type AuthMode = 'login' | 'register';

interface AuthContextValue {
  isOpen: boolean;
  mode: AuthMode;
  openAuth: (mode?: AuthMode) => void;
  closeAuth: () => void;
  setMode: (mode: AuthMode) => void;
  navigateToDashboard: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>('login');
  const router = useRouter();

  const openAuth = useCallback((m: AuthMode = 'login') => {
    setMode(m);
    setIsOpen(true);
  }, []);

  const closeAuth = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigateToDashboard = useCallback(() => {
    setIsOpen(false);
    router.push('/dashboard');
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ isOpen, mode, openAuth, closeAuth, setMode, navigateToDashboard }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
