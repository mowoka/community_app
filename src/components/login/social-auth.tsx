'use client';

import { useRouter } from 'next/navigation';

export function SocialAuth() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 mt-5">
      {/* Divider */}
      <div className="relative flex items-center justify-center py-1">
        <div className="w-full h-px bg-surface-variant" />
        <span className="absolute px-3 bg-surface-container-low text-xs text-on-surface-variant uppercase tracking-wider">
          Or sign in with
        </span>
      </div>

      {/* Provider Buttons */}
      <div className="w-full">
        <button
          type="button"
          className="h-11 px-3 rounded-lg bg-surface-container-highest hover:bg-surface-bright active:scale-[0.98] flex items-center justify-center gap-2 transition-all w-full"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
              fill="#EA4335"
            />
            <path
              d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
              fill="#4285F4"
            />
            <path
              d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
              fill="#FBBC05"
            />
            <path
              d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
              fill="#34A853"
            />
          </svg>
          <span className="text-xs font-semibold text-on-surface">
            Google SSO
          </span>
        </button>
      </div>
    </div>
  );
}
