import {
  Zap,
  MapPin,
  UserCheck,
  ArrowRight,
  Download,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  downloadFilename: string;
}

const features: FeatureItem[] = [
  {
    icon: Zap,
    iconColor: 'text-primary',
    title: 'Instant Match Creation',
    description: 'Auto-generate fixtures and notify team squads instantly',
    downloadFilename: 'lucide-zap.svg',
  },
  {
    icon: MapPin,
    iconColor: 'text-secondary',
    title: 'Venue Booking & Lapangan',
    description: 'Lock in pitches with live slot tracking and split fees',
    downloadFilename: 'lucide-mappin.svg',
  },
  {
    icon: UserCheck,
    iconColor: 'text-primary',
    title: 'Real-Time Attendance',
    description: 'One-tap RSVPs, waitlists, and tactical formation locks',
    downloadFilename: 'lucide-usercheck.svg',
  },
];

export function TacticalFeatures() {
  return (
    <div className="flex flex-col gap-2.5 mb-6">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
          Tactical Advantage
        </span>
        <button className="text-xs text-primary flex items-center gap-0.5 hover:underline">
          <span>Explore all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3.5 p-3 rounded-lg bg-surface-container-high transition-transform active:scale-[0.99]"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-lowest p-1 border border-outline-variant ${item.iconColor}`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-semibold text-on-surface truncate">
                  {item.title}
                </span>
                <span className="text-xs text-on-surface-variant truncate">
                  {item.description}
                </span>
              </div>

              <a
                href={`#download-${item.downloadFilename}`}
                download={item.downloadFilename}
                title={`Download ${item.title}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container hover:bg-surface-bright text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
              </a>

              <ChevronRight className="w-4.5 h-4.5 text-outline-variant shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
