'use client';

import { BottomNav } from '../admin/bottom-nav';
import { cn } from '@/utils/class-merge';

interface Props {
  children: React.ReactNode;
  showBottomMenu?: boolean;
}

export function MobileScreenWrapper({
  children,
  showBottomMenu = false,
}: Props) {
  return (
    <div className="w-full bg-inverse-on-surface">
      <div className="mx-auto w-full bg-background md:max-w-120 min-h-screen ">
        <div className={cn('px-5 pt-5 pb-5', showBottomMenu && 'pb-20')}>
          {children}
        </div>
        {showBottomMenu && <BottomNav />}
      </div>
    </div>
  );
}
