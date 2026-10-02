import { UserCheck } from 'lucide-react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

export function AdminHeader() {
  return (
    <div className="relative w-full pt-4 pb-2 flex flex-col items-center text-center">
      {/* Emblem Crest */}
      <div className="relative mb-3 flex items-center justify-center">
        <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center p-2 shadow-lg">
          <Image
            alt="Community Sports Admin Emblem"
            className="w-full h-full object-cover"
            src={Logo}
          />
        </div>

        <div className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-container" />
        </div>
      </div>

      {/* Portal Badge */}
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary text-xs tracking-wider uppercase mb-1">
        <UserCheck className="w-3.5 h-3.5" />
        Club Operations portal
      </span>

      <h2 className="text-2xl font-bold text-on-surface tracking-tight">
        Welcome Back, Admin
      </h2>
      <p className="text-sm text-on-surface-variant max-w-xs mt-1">
        Enter your email & password to access the club dashboard
      </p>
    </div>
  );
}
