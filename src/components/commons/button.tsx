import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface Props {
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  btnText: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export function Button({
  onClick = () => {},
  variant = 'primary',
  leftIcon,
  rightIcon,
  btnText,
  isLoading = false,
  btnProps,
}: Props) {
  const style = {
    primary:
      'w-full h-12 rounded-lg bg-gradient-to-r from-primary-container to-primary flex items-center justify-center gap-2 text-white text-sm font-semibold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform',
    secondary: '',
  };

  const btnStyle = style[variant];

  return (
    <button
      onClick={onClick}
      type="button"
      className={btnStyle}
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
