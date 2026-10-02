'use client';

import { useState, FormEvent } from 'react';
import { Mail, Lock, Eye, EyeOff, Check, LogIn, Loader2 } from 'lucide-react';

export function AdminLoginForm() {
  const [email, setEmail] = useState('admin@communitysports.id');
  const [password, setPassword] = useState('TacticalPitch2025!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate authentication trigger
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      {/* Email Input */}
      <div className="flex flex-col gap-1.5 text-left">
        <label
          className="text-sm text-on-surface-variant flex items-center justify-between"
          htmlFor="emailInput"
        >
          <span>Email Address</span>
          <span className="text-xs text-primary font-semibold">
            Verified ID
          </span>
        </label>
        <div className="relative flex items-center">
          <Mail className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
          <input
            className="w-full h-12 pl-11 pr-4 bg-surface-container-highest rounded-lg text-on-surface text-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-all"
            id="emailInput"
            type="email"
            placeholder="admin@communitysports.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-1.5 text-left">
        <label
          className="text-sm text-on-surface-variant"
          htmlFor="passwordInput"
        >
          Password
        </label>
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
          <input
            className="w-full h-12 pl-11 pr-12 bg-surface-container-highest rounded-lg text-on-surface text-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-all"
            id="passwordInput"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2.5 p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none flex items-center justify-center transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between pt-0.5 pb-1">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-5 h-5 rounded bg-surface-container-highest peer-checked:bg-primary flex items-center justify-center transition-all shadow-sm">
            <Check className="w-3.5 h-3.5 text-surface font-bold opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
          <span className="text-xs text-on-surface-variant peer-checked:text-on-surface">
            Remember me
          </span>
        </label>
        <button
          type="button"
          className="text-xs font-semibold text-secondary hover:text-secondary-fixed transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative overflow-hidden w-full h-12 rounded-lg bg-primary hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-on-primary text-sm font-semibold shadow-lg group disabled:opacity-70"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <LogIn className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Sign In as Admin</span>
          </>
        )}
      </button>
    </form>
  );
}
