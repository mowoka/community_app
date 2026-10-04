'use client';

import React from 'react';
import { Sun, Calendar } from 'lucide-react';

interface GreetingSectionProps {
  adminName?: string;
  clubName?: string;
  weatherTemp?: string;
  scheduledMatchesCount?: number;
}

export function GreetingSection({
  adminName = 'Coach Alex',
  clubName = 'Garuda Sports Club',
  weatherTemp = '28°C',
  scheduledMatchesCount = 3,
}: GreetingSectionProps) {
  return (
    <section className="flex flex-col gap-3 pt-2">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 w-fit mb-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              Super Admin • {clubName}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
            Good Morning, {adminName} 👋
          </h1>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
          <Sun className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold text-slate-200">
            {weatherTemp}
          </span>
        </div>
      </div>

      {/* Matchday Pulse Strip */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80 shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-100 truncate">
              Sunday, 24 Oct
            </span>
            <span className="text-[11px] text-slate-400 truncate">
              {scheduledMatchesCount} matches scheduled for today
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
          <span className="text-[10px] font-semibold">Pitch Ready</span>
        </div>
      </div>
    </section>
  );
}
