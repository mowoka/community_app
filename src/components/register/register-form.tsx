'use client';

import { useState, FormEvent, useMemo } from 'react';
import {
  ShieldCheck,
  Users,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from 'lucide-react';

export function RegistrationForm() {
  const [clubName, setClubName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation check
  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  // Password strength calculation
  const strengthScore = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }, [password]);

  const strengthStatus = useMemo(() => {
    switch (strengthScore) {
      case 1:
        return {
          text: 'Weak Defense',
          color: 'text-error',
          barColor: 'bg-error',
        };
      case 2:
        return {
          text: 'Fair Form',
          color: 'text-tertiary',
          barColor: 'bg-tertiary',
        };
      case 3:
        return {
          text: 'Solid Squad Strength',
          color: 'text-secondary',
          barColor: 'bg-secondary',
        };
      case 4:
        return {
          text: 'Match Ready Strength',
          color: 'text-primary',
          barColor: 'bg-primary',
        };
      default:
        return {
          text: 'Min. 8 characters',
          color: 'text-on-surface-variant',
          barColor: 'bg-surface-container-highest',
        };
    }
  }, [strengthScore]);

  // Confirm password feedback
  const matchFeedback = useMemo(() => {
    if (!confirmPassword) return null;
    if (password === confirmPassword) {
      return { text: 'Passwords Match', isMatch: true };
    }
    return { text: 'Does not match', isMatch: false };
  }, [password, confirmPassword]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) return;
    setIsLoading(true);
    // Process registration payload
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <form
      className="bg-surface-container-low rounded-xl p-6 shadow-xl flex flex-col gap-4 relative z-10"
      onSubmit={handleSubmit}
    >
      {/* Field 1: Club / Community Name */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium text-on-surface flex items-center justify-between"
          htmlFor="club-name"
        >
          <span>Community / Club Name</span>
          <span className="text-xs text-secondary flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Official
          </span>
        </label>
        <div className="relative flex items-center">
          <Users className="absolute left-3.5 text-outline pointer-events-none w-4 h-4" />
          <input
            id="club-name"
            type="text"
            required
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            placeholder="e.g. Garuda Futsal Community"
            className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg text-sm outline-none focus:bg-surface-container-highest transition-colors"
          />
        </div>
      </div>

      {/* Field 2: Admin Full Name */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium text-on-surface"
          htmlFor="admin-name"
        >
          Admin Full Name
        </label>
        <div className="relative flex items-center">
          <User className="absolute left-3.5 text-outline pointer-events-none w-4 h-4" />
          <input
            id="admin-name"
            type="text"
            required
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            placeholder="e.g. Alex Pratama"
            className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg text-sm outline-none focus:bg-surface-container-highest transition-colors"
          />
        </div>
      </div>

      {/* Field 3: Email Address */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium text-on-surface flex items-center justify-between"
          htmlFor="admin-email"
        >
          <span>Email Address</span>
          {isEmailValid && (
            <span className="text-xs text-primary flex items-center gap-0.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Valid
            </span>
          )}
        </label>
        <div className="relative flex items-center">
          <Mail className="absolute left-3.5 text-outline pointer-events-none w-4 h-4" />
          <input
            id="admin-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. alex@community.com"
            className="w-full h-12 pl-11 pr-4 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg text-sm outline-none focus:bg-surface-container-highest transition-colors"
          />
        </div>
      </div>

      {/* Field 4: Password with Interactive Strength Meter */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            className="text-sm font-medium text-on-surface"
            htmlFor="admin-password"
          >
            Password
          </label>
          <span className={`text-xs ${strengthStatus.color}`}>
            {strengthStatus.text}
          </span>
        </div>
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-outline pointer-events-none w-4 h-4" />
          <input
            id="admin-password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create strong tactical passcode"
            className="w-full h-12 pl-11 pr-11 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg text-sm outline-none focus:bg-surface-container-highest transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 text-outline hover:text-on-surface p-1 transition-colors flex items-center justify-center"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Live Strength Telemetry Meter */}
        <div className="grid grid-cols-4 gap-1.5 pt-1.5">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index < strengthScore
                  ? strengthStatus.barColor
                  : 'bg-surface-container-highest'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Field 5: Confirm Password */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium text-on-surface flex items-center justify-between"
          htmlFor="confirm-password"
        >
          <span>Confirm Password</span>
          {matchFeedback && (
            <span
              className={`text-xs font-medium ${matchFeedback.isMatch ? 'text-primary' : 'text-error'}`}
            >
              {matchFeedback.text}
            </span>
          )}
        </label>
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-outline pointer-events-none w-4 h-4" />
          <input
            id="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter password"
            className="w-full h-12 pl-11 pr-11 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg text-sm outline-none focus:bg-surface-container-highest transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 text-outline hover:text-on-surface p-1 transition-colors flex items-center justify-center"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Verification / Trust Feature Snippet */}
      <div className="bg-surface-container rounded-lg p-3 flex items-center gap-3 mt-1">
        <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-on-surface truncate">
            Instant Match Director Access
          </span>
          <span className="text-xs text-on-surface-variant truncate">
            Automated fixtures, lineup sheets & squad roster controls
          </span>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="terms-check"
          type="checkbox"
          checked={agreedTerms}
          onChange={(e) => setAgreedTerms(e.target.checked)}
          className="mt-1 w-4 h-4 rounded bg-surface-container-lowest text-primary focus:ring-0 cursor-pointer accent-primary"
        />
        <label
          className="text-xs text-on-surface-variant select-none leading-relaxed"
          htmlFor="terms-check"
        >
          I agree to the Community{' '}
          <a
            className="text-secondary hover:underline font-medium"
            href="#"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            className="text-secondary hover:underline font-medium"
            href="#"
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Primary Athletic CTA */}
      <button
        type="submit"
        disabled={!agreedTerms || isLoading}
        className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary-container font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:pointer-events-none"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Create Admin Account</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
