'use client';

import { Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/commons/button';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  description: string;
  showButton?: boolean;
  shoBackButton?: boolean;
  onBackButton?: boolean;
  onClick?: () => void;
}

export function VenueTitle({
  title,
  description,
  showButton = true,
  shoBackButton = false,
  onClick = () => {},
}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-space-xs pt-space-xs mt-2">
      {shoBackButton && (
        <div className="flex items-center justify-between w-full">
          <div
            onClick={() => router.back()}
            className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high/90 hover:bg-surface-variant text-on-surface active:scale-95 transition-all shadow-sm font-label-md text-label-md"
          >
            <ArrowLeft className="w-4 h-4 shrink-0 text-primary" />

            <span className="font-medium leading-none">Kembali ke Daftar</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-label-xs text-[10px] font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>DRAFT</span>
          </span>
        </div>
      )}
      <div className="flex items-center justify-between gap-space-sm mt-2">
        <div className="flex flex-col min-w-0 ">
          <h2 className="text-headline-sm font-bold tracking-tight text-on-surface">
            {title}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {description}
          </p>
        </div>
        {showButton && (
          <Button
            className="max-w-37.5"
            onClick={onClick}
            btnText="Tambah"
            variant="filled"
            leftIcon={
              <Plus className="w-5 h-5 transition-transform group-hover:scale-110" />
            }
          />
        )}
      </div>
    </div>
  );
}
