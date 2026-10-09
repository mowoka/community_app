interface Props {
  onClick: () => void;
  isActive?: boolean;
  label: string;
}

export function Chip({ onClick, isActive = false, label }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
        isActive
          ? 'bg-primary/15 text-primary'
          : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
      }`}
    >
      {label}
    </button>
  );
}
