import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/utils/class-merge';

interface Props {
  inputId: string;
  label?: string;
  subLabel?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  inputStyle?: string;
}

export function Input({
  inputId,
  icon,
  label = '',
  subLabel = '',
  errorMessage = '',
  inputProps,
  inputStyle = '',
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 text-left">
      {label && (
        <label
          className="text-sm text-on-surface-variant flex items-center justify-between"
          htmlFor={inputId}
        >
          <span>
            {label}{' '}
            {inputProps.required && <span className="text-error">*</span>}
          </span>
          {subLabel && (
            <span className="text-xs text-primary font-semibold">
              {subLabel}
            </span>
          )}
        </label>
      )}
      <div className="relative flex items-center">
        {icon}
        <input
          className={cn(
            'w-full h-12 pl-11 pr-4 bg-surface-container-highest rounded-lg text-on-surface text-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-all',
            inputStyle,
          )}
          id={inputId}
          {...inputProps}
          type={showPassword ? 'text' : inputProps.type}
        />
        {inputId === 'passwordInput' && (
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
        )}
      </div>
      {errorMessage && <p className="text-error text-sm">{errorMessage}</p>}
    </div>
  );
}
