import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/class-merge';

interface Props {
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'filled';
  btnText: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}

export function Button({
  onClick = () => {},
  variant = 'primary',
  leftIcon,
  rightIcon,
  btnText,
  isLoading = false,
  btnProps,
  className = '',
}: Props) {
  const style = {
    primary:
      'w-full h-12 rounded-lg bg-gradient-to-r from-primary-container to-primary flex items-center justify-center gap-2 text-white text-sm font-semibold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform',
    secondary: '',
    filled:
      'flex-shrink-0 flex items-center justify-center gap-space-xs bg-primary-container text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-xl shadow-md active:scale-95 transition-all',
  };

  const btnStyle = style[variant];

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(btnStyle, className)}
      {...btnProps}
    >
      {leftIcon}
      <span>
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : btnText}
      </span>
      {rightIcon}
    </button>
  );
}
