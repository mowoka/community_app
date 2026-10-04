'use client';

import React from 'react';
import Image from 'next/image';
import { Bell } from 'lucide-react';
import Logo from '@/assets/logo.png';

export function Header() {
  return (
    <header className="w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 rounded-md shadow-md">
      <div className="h-16 px-4 max-w-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-700">
            <Image
              alt="Community Admin Emblem Logo"
              fill
              className="object-contain"
              src={Logo}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              Admin Console
            </span>
            <span className="text-sm font-bold text-slate-100 leading-tight">
              Home
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 active:scale-95 transition-all"
          >
            <Bell className="w-4 h-4 text-slate-300" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950"></span>
          </button>

          <div className="relative flex items-center justify-center p-0.5 rounded-full bg-slate-800">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <div className="w-full h-full bg-neutral-900 flex justify-center items-center">
                <p className="text-body-lg text-primary font-bold">P</p>
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
