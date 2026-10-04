'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../commons/button';

export function ActionButtons() {
  const router = useRouter();

  const redirectLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col gap-3 mt-auto">
      <Button
        onClick={redirectLogin}
        variant="primary"
        rightIcon={<ArrowRight className="w-4 h-4" />}
        btnText="Get Started"
      />

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
