'use client';

import React from 'react';

export function PitchStatus() {
  return (
    <section className="flex flex-col gap-3 pt-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-100">Pitch Live Status</h3>
        <button
          type="button"
          className="text-xs font-semibold text-emerald-400 hover:underline"
        >
          View Map
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Pitch A */}
        <div className="flex flex-col p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center gap-1 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-400">Pitch A</span>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          </div>
          <span className="text-xs font-bold text-slate-100 truncate">
            In Use
          </span>
          <span className="text-[10px] text-slate-400">Free 21:00</span>
        </div>

        {/* Pitch B */}
        <div className="flex flex-col p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center gap-1 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-400">Pitch B</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <span className="text-xs font-bold text-emerald-400 truncate">
            Available
          </span>
          <span className="text-[10px] text-slate-400">Ready Now</span>
        </div>

        {/* Arena Mini */}
        <div className="flex flex-col p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center gap-1 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-400">Arena Mini</span>
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          </div>
          <span className="text-xs font-bold text-amber-400 truncate">
            Warmup
          </span>
          <span className="text-[10px] text-slate-400">U-17 Squad</span>
        </div>
      </div>
    </section>
  );
}
