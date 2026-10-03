'use client';

import { useState } from 'react';
import { Mail, Lock, LogIn, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormData, LoginSchema } from '@/constants/login.schema';
import { Input } from '@/components/commons/input';

export function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (_data: LoginFormData) => {
    setIsLoading(true);
    console.log(_data);
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Email Input */}
      <Input
        inputId="emailInput"
        label="Email Address"
        subLabel="Verified ID"
        icon={
          <Mail className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
        }
        inputProps={{
          ...register('email'),
          type: 'email',
          placeholder: 'admin@communitysports.id',
        }}
        errorMessage={errors?.email?.message}
      />

      {/* Password Input */}
      <Input
        inputId="passwordInput"
        label="Password"
        icon={
          <Lock className="absolute left-3.5 text-on-surface-variant pointer-events-none w-5 h-5" />
        }
        inputProps={{
          type: 'password',
          placeholder: '••••••••',
          ...register('passowrd'),
        }}
        errorMessage={errors?.passowrd?.message}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-5 relative overflow-hidden w-full h-12 rounded-lg bg-primary hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-on-primary text-sm font-semibold shadow-lg group disabled:opacity-70"
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
