'use client';

import Link from 'next/link';
import { ArrowRight, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ActionButtons() {
  const router = useRouter();

  const RedirectLogin = () => {
    router.push('/login');
  };

  const RedirectRegister = () => {
    router.push('/register');
  };

  return (
    <div className="flex flex-col gap-3 mt-auto">
      <button
        onClick={RedirectRegister}
        type="button"
        className="w-full h-12 rounded-lg bg-gradient-to-r from-primary-container to-primary flex items-center justify-center gap-2 text-white text-sm font-semibold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        onClick={RedirectLogin}
        type="button"
        className="cursor-pointer w-full h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface text-sm font-semibold active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          <span>I already have an account · Sign In</span>
        </div>
      </button>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          href="#terms"
          className="text-xs text-outline hover:text-on-surface transition-colors"
        >
          Terms of Service
        </Link>
        <span className="text-outline-variant text-xs">•</span>
        <Link
          href="#privacy"
          className="text-xs text-outline hover:text-on-surface transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-outline-variant text-xs">•</span>
        <Link
          href="#support"
          className="text-xs text-outline hover:text-on-surface transition-colors"
        >
          Help Center
        </Link>
      </div>
    </div>
  );
}
