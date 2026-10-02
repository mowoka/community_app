import { Trophy, Download } from 'lucide-react';

export function FeaturedEvent() {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low mb-6">
      <div className="relative w-12 h-12 rounded-lg shrink-0 bg-surface-container-lowest p-1 border border-outline-variant flex items-center justify-center text-primary">
        <Trophy className="w-6 h-6" />
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-on-surface font-semibold">
            Weekend Cup 2025
          </span>
          <span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest text-[10px] font-bold">
            OPEN
          </span>
        </div>
        <p className="text-xs text-on-surface-variant truncate">
          32 grassroot clubs competing across 4 synthetic venues
        </p>
      </div>

      <a
        href="#download-trophy"
        download="lucide-trophy.svg"
        title="Download Trophy Icon"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-high hover:bg-surface-bright text-primary transition-colors"
      >
        <Download className="w-4 h-4" />
      </a>
    </div>
  );
}
