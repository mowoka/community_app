import { Banknote, Clock3, ClockAlert } from 'lucide-react';

interface Props {
  hourlyRate: string;
  setHourlyRate: (val: string) => void;
  openTime: string;
  setOpenTime: (val: string) => void;
  closeTime: string;
  setCloseTime: (val: string) => void;
}

export function VenuePricingHours({
  hourlyRate,
  setHourlyRate,
  openTime,
  setOpenTime,
  closeTime,
  setCloseTime,
}: Props) {
  return (
    <section className="flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl shadow-sm mt-5">
      <div className="flex items-center gap-space-xs pb-space-xs">
        <Banknote className="material-symbols-outlined text-primary" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          4. Tarif Sewa & Operasional
        </h3>
      </div>

      {/* Hourly Rate */}
      <div className="flex flex-col gap-1.5">
        <label
          className="font-label-md text-on-surface-variant"
          htmlFor="hourlyRate"
        >
          Tarif Sewa Reguler / Jam
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3 font-label-md text-primary font-bold">
            Rp
          </span>
          <input
            id="hourlyRate"
            type="text"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="w-full pl-11 pr-14 py-3 rounded-lg bg-surface text-on-surface font-headline-sm text-headline-sm font-semibold focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
          />
          <span className="absolute right-3 font-label-xs text-on-surface-variant">
            / Jam
          </span>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="flex flex-col gap-1.5 pt-space-xs">
        <label className="font-label-md text-on-surface-variant">
          Rentang Jam Operasional
        </label>
        <div className="grid grid-cols-2 gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-outline">Buka Jam</span>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface shadow-inner">
              <Clock3 className="material-symbols-outlined text-primary w-5 h-5" />
              <input
                type="text"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className="w-full bg-transparent text-on-surface font-label-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-outline">Tutup Jam</span>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface shadow-inner">
              <ClockAlert className="material-symbols-outlined text-error w-5 h-5" />
              <input
                type="text"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className="w-full bg-transparent text-on-surface font-label-md focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info Callout */}
      <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-tertiary-container/10 mt-space-xs">
        <ClockAlert className="material-symbols-outlined text-error w-10 h-10" />
        <p className="font-body-sm text-on-surface-variant">
          Tarif <span className="text-tertiary font-semibold">Prime Time</span>{' '}
          (18:00 - 23:00) & Hari Libur dapat dikonfigurasi lebih rinci setelah
          venue berhasil terverifikasi.
        </p>
      </div>
    </section>
  );
}
