'use client';

import React from 'react';
import {
  PlusCircle,
  ChevronRight,
  Users,
  MapPin,
  Trophy,
  Calendar,
  Clock,
  Settings,
  SlidersHorizontal,
} from 'lucide-react';

export function OperationsGrid() {
  return (
    <section className="flex flex-col gap-3 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-bold text-slate-100">Club Operations</h2>
        </div>
        <span className="text-[10px] text-slate-400">7 Modules</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {/* Create Match Quick Action */}
        <button
          type="button"
          className="col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-3.5 flex items-center justify-between text-left border border-emerald-500/30 shadow-lg active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md shrink-0">
              <PlusCircle className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-100">
                  Create Match
                </span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[9px] font-black uppercase">
                  Quick
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Set teams, referee, field & time slot
              </span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:translate-x-0.5 transition-transform">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>

        {/* Attendance */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">
              Attendance
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              42 Checked-in Today
            </span>
          </div>
        </button>

        {/* Lapangan */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 text-[9px] font-medium">
              All Open
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">
              Lapangan
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              3 Venues Active
            </span>
          </div>
        </button>

        {/* Pertandingan */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">
              Pertandingan
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              Live & Upcoming
            </span>
          </div>
        </button>

        {/* Jadwal */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-slate-400">Week 42</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">Jadwal</span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              Weekly Timetable
            </span>
          </div>
        </button>

        {/* History */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">
              History
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              Past Match Logs
            </span>
          </div>
        </button>

        {/* Setting */}
        <button
          type="button"
          className="rounded-2xl bg-slate-900 p-3 flex flex-col justify-between text-left gap-3 border border-slate-800 shadow-md hover:border-slate-700 active:scale-95 transition-all"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500/40"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-100">
              Setting
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5 truncate">
              Club & Config
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
