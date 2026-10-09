import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface Props {
  inputId: string;
  label?: string;
  subLabel?: string;
  errorMessage?: string;
  icon: React.ReactNode;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export function Input({
  inputId,
  icon,
  label = '',
  subLabel = '',
  errorMessage = '',
  inputProps,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 text-left">
      {label && (
        <label
          className="text-sm text-on-surface-variant flex items-center justify-between"
          htmlFor={inputId}
        >
          <span>{label}</span>
          {subLabel && (
            <span className="text-xs text-primary font-semibold">
              Verified ID
            </span>
          )}
        </label>
      )}
      <div className="relative flex items-center">
        {icon}
        <input
          className="w-full h-12 pl-11 pr-4 bg-surface-container-highest rounded-lg text-on-surface text-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-all"
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
