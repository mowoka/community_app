interface Props {
  children: React.ReactNode;
}

export function MobileScreenWrapper({ children }: Props) {
  return (
    <div className="w-full bg-inverse-on-surface">
      <div className="mx-auto w-full bg-background max-w-120 min-h-screen px-5 py-5">
        {children}
      </div>
    </div>
  );
}
