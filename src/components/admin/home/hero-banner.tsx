'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="mt-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-4 border border-slate-800 shadow-xl">
      {/* Background tactical pitch vector */}
      <svg
        className="absolute -right-10 -bottom-10 w-52 h-52 text-emerald-500/10 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="45"
          strokeDasharray="4 4"
        ></circle>
        <path d="M 10 100 L 190 100"></path>
        <rect
          height="160"
          rx="10"
          width="170"
          x="15"
          y="20"
        ></rect>
        <path d="M 60 20 L 60 65 L 140 65 L 140 20"></path>
        <circle
          cx="100"
          cy="20"
          fill="currentColor"
          r="2"
        ></circle>
      </svg>

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
            NEW EVENT
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>1 / 3</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 pr-8">
          <h2 className="text-base font-bold text-slate-100 leading-snug">
            🏆 Annual Community Cup 2025 Registration Open!
          </h2>
          <p className="text-xs text-slate-400 line-clamp-2">
            Manage 16 teams, group stages, referee assignments, and stadium
            slots easily.
          </p>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold shadow-md hover:bg-emerald-400 active:scale-95 transition-all"
          >
            <span>Manage Cup</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-9 px-3.5 rounded-xl bg-slate-800/80 text-slate-200 text-xs font-medium hover:bg-slate-800 active:scale-95 transition-all border border-slate-700/50"
          >
            Details
          </button>
        </div>
      </div>
    </section>
  );
}
