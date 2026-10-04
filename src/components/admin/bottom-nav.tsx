'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Trophy, Clock, User } from 'lucide-react';
import { useTabStore } from '@/store/tab/tab-store-provider';

export function BottomNav() {
  const activeTab = useTabStore((s) => s.activeTab);
  const setActiveTab = useTabStore((s) => s.setActiveTab);
  return (
    <nav className="fixed bottom-0 w-full md:max-w-120 z-50 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/80">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16 px-2">
        {/* Home */}
        <Link
          href="#"
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all ${
            activeTab === 'home'
              ? 'text-emerald-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">Home</span>
        </Link>

        {/* Match */}
        <Link
          href="#"
          onClick={() => setActiveTab('match')}
          className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all ${
            activeTab === 'match'
              ? 'text-emerald-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <Trophy className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 px-1 py-0.2 bg-sky-500 text-slate-950 rounded-full text-[8px] font-black leading-tight">
              LIVE
            </span>
          </div>
          <span className="text-[10px] mt-1">Match</span>
        </Link>

        {/* History */}
        <Link
          href="#"
          onClick={() => setActiveTab('history')}
          className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all ${
            activeTab === 'history'
              ? 'text-emerald-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-[10px] mt-1">History</span>
        </Link>

        {/* Profile */}
        <Link
          href="#"
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all ${
            activeTab === 'profile'
              ? 'text-emerald-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <User className="w-5 h-5" />
            <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-slate-950"></span>
          </div>
          <span className="text-[10px] mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
