'use client';

import { ChevronRight } from 'lucide-react';

export function SocialProofAndFooter() {
  return (
    <>
      {/* Quick Team Preview / Communal Trust Social Proof */}
      <div className="mt-6 mb-4 bg-surface-container-low/60 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow">
            <img
              className="w-full h-full object-cover"
              alt="Athletic sports community manager avatar portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVoYLSKOMOxLigs8WNFbBYmOzpgUPPPrVtNIuwZU6f1ban9ENrwpySCF8SSf6qVQLKBnxQs6gA5jH0inFiYGW06ZlZEXGi9WW8nVf9mTG7CXQ1WNvet6sT8c67fev9aPzwpmFlibAofkinhuK05e2vM7pc-TCklcVmoGA4xhbLrWjB7zs5A36XTarhO3dX4-WQWKcUCVn46sKDLt-xMn5g_jjwWh3_0vKfAMLxT3sOZROGSr4sBFSvaw"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden shadow">
            <img
              className="w-full h-full object-cover"
              alt="Female soccer coach smiling in training bib"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3FXPjPnJESW-RgnoS_psm0mR_QR6w3Z5rp6K907PYlXB8PWp-gYhUAxI_iq2VUma137QyRZo7kfSlzIW1KlQVOubJNXvVmr3n0jf955AfIrwonCJj6tlhWNFt2ijgAOZBWE1ZrI7g_xwR-vo3xU983263Dda_c1LApIlCj7J1x6TsmAxwlEjX0pwtfUGu8js6t8vKgul17dMjoP9E5f8PDOhLXmJwXhn06UanjNghc-qCtYud-3K_2w"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden shadow">
            <img
              className="w-full h-full object-cover"
              alt="Futsal club organizer wearing technical apparel"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zeMPbaVeHSb7ndOl1h_YIByL8nG7KuS5mMz4j5TwJQH4qXpmb3lkbCtyhgULEokCX_3NZpDWJsU3qOU2OrNpXuLykFVtMFw0BqkTf42ThIrLkcz_2emDL7iCX2FDBpoVXr0ay8qLCEl38mNfBbq5evswkgiaA9ounWVXtdnZy9c7-kM2YVK3wnVsYsajnEp6s60cvtVNVuk11lOa88i8omGwJJRzP_MJhA3J5Zf_WkuwoMyBu28ULw"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-xs font-bold shadow">
            +480
          </div>
        </div>
        <div className="text-right">
          <span className="block text-xs text-primary uppercase font-bold">
            1,200+ Clubs
          </span>
          <span className="block text-xs text-on-surface-variant">
            Active this weekend
          </span>
        </div>
      </div>

      {/* Bottom Navigation Transition Link */}
      <div className="flex items-center justify-center py-4 text-center">
        <p className="text-sm text-on-surface-variant">
          Already have an admin account?{' '}
          <a
            className="text-primary font-semibold ml-1 hover:underline inline-flex items-center gap-0.5"
            href="/login"
          >
            Sign In
            <ChevronRight className="w-4 h-4" />
          </a>
        </p>
      </div>
    </>
  );
}
