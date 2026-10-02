import Image from 'next/image';
import { CheckCircle2, Users, Trophy } from 'lucide-react';
import Logo from '@/assets/logo.png';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-low p-6 pt-8 mb-6 shadow-xl">
      {/* Background Orbs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center text-center">
        {/* Emblem Badge */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-125 animate-pulse" />
          <div className="relative w-28 h-28 rounded-2xl bg-surface-container-highest p-3 flex items-center justify-center shadow-lg">
            <Image
              alt="Community Sports Admin Emblem"
              className="w-full h-full object-cover"
              src={Logo}
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-surface-container-lowest text-xs shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-surface-container-lowest fill-current" />
          </span>
        </div>

        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high mb-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Next-Gen Club Ops
          </span>
        </div>

        <h1 className="text-2xl font-bold text-on-surface mb-2.5 max-w-[280px]">
          Manage Your Sports Community Like a Pro
        </h1>
        <p className="text-sm text-on-surface-variant max-w-[310px] leading-relaxed mb-6">
          All-in-one platform to schedule matches, track attendance, manage
          pitches, and engage your club members with zero hassle.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container/70 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-primary mb-0.5">
              <Users className="w-4 h-4" />
              <span className="text-lg font-bold">50+</span>
            </div>
            <span className="text-xs text-on-surface-variant">
              Active Clubs
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container/70 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-secondary mb-0.5">
              <Trophy className="w-4 h-4" />
              <span className="text-lg font-bold">1,200+</span>
            </div>
            <span className="text-xs text-on-surface-variant">Matches Run</span>
          </div>
        </div>
      </div>
    </div>
  );
}
