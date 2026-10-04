'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Users } from 'lucide-react';

export function NextMatchCard() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
            Next Match in 2 Hours
          </span>
        </div>
        <span className="text-[10px] font-semibold text-amber-400 px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
          19:30 WIB
        </span>
      </div>

      <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 shadow-lg flex flex-col gap-3">
        {/* Teams Head to Head */}
        <div className="grid grid-cols-5 items-center justify-between gap-1 py-1">
          {/* Team 1 */}
          <div className="col-span-2 flex flex-col items-center text-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-slate-800 p-1 shadow-sm flex items-center justify-center relative">
              <Image
                alt="Garuda FC Emblem"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj4qNRvXeZBzM_hwLkPBykYoaz8aXIpewpHLFGQL7FMiEPZqSdNT-PEK6f4H5EJaua_DtPUITo4cDbaJ6pV6YaFszJ3h2oNYmXpulOUqp8PpZtlIb8GiRB5inCMtem3Mn2f-fkMAmKkQOU8B4czDGQu03q8fVV0ZfUEpnfyoIF5_8LsaNpioiOfRMFCzu9heBLx3fmiRfiE3vnsJVDigd7FzcyJvpSFUfpHy2S1B5jsD4rjw6PAqpTrw"
                width={40}
                height={40}
                className="object-contain rounded-lg"
              />
            </div>
            <span className="text-xs font-semibold text-slate-100 truncate w-full">
              Garuda FC
            </span>
            <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Home
            </span>
          </div>

          {/* VS Badge */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-300">
              VS
            </span>
            <span className="text-[10px] text-slate-400 mt-1">Match #14</span>
          </div>

          {/* Team 2 */}
          <div className="col-span-2 flex flex-col items-center text-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-slate-800 p-1 shadow-sm flex items-center justify-center relative">
              <Image
                alt="Bintang Muda Emblem"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4nyfQgsIpozc3g35B5lf50ArXqeNhNp3NgI6CJJpi1ej3ESALDKntybMbaGCdCGFNzp2z_id81Y4XmGKNlHqH11TWJtI7wX_5opxSaQVgvbJU16cj6Xn3kbDRt18mBfg3TEjYwU26QKEyhPVEg1yUHP1W7URCr-BIPzXmGYHBn0zq5vT4-dKXwOQ4sh-1j8XpXOCKG7PXDui3re1-vfxJyvK2Gp2UumxtiQa6DBg91mOuMJf2o3XzWg"
                width={40}
                height={40}
                className="object-contain rounded-lg"
              />
            </div>
            <span className="text-xs font-semibold text-slate-100 truncate w-full">
              Bintang Muda
            </span>
            <span className="text-[10px] font-medium text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
              Away
            </span>
          </div>
        </div>

        {/* Pitch Info */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-slate-100 font-medium truncate">
                Lapangan A (Sintetis)
              </span>
              <span className="text-[11px] text-slate-400 truncate">
                Ref: D. Wicaksono • 2x25 Mins
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Users className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-100 font-bold">18/22 In</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            className="w-full h-9 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-750 active:scale-95 transition-all border border-slate-700/50"
          >
            <span>Lineup Sheet</span>
          </button>
          <button
            type="button"
            className="w-full h-9 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:bg-emerald-400 active:scale-95 transition-all"
          >
            <span>Manage Match</span>
          </button>
        </div>
      </div>
    </section>
  );
}
