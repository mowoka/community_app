import Logo from '@/assets/logo.png';
import Image from 'next/image';

export function RegistrationHeader() {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-6">
      <div className="relative mb-3 group">
        <div className="w-20 h-20 rounded-xl bg-surface-container-high flex items-center justify-center p-2 shadow-lg relative z-10 transition-transform duration-300 transform active:scale-95">
          <Image
            alt="Community Sports Admin Emblem"
            className="w-full h-full object-cover"
            src={Logo}
          />
        </div>
        {/* Athletic Halo Micro-Glow */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-xl blur-lg -z-0 opacity-75" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-semibold uppercase tracking-wider mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Club Manager Onboarding
      </div>

      <h1 className="text-2xl font-bold text-on-surface tracking-tight">
        Create Admin Account
      </h1>
      <p className="text-sm text-on-surface-variant mt-1 max-w-xs">
        Start managing matches, venues, and club members today
      </p>
    </div>
  );
}
