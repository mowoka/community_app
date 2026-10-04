'use client';

import { useState } from 'react';
import { Mail, Lock, LogIn, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormData, LoginSchema } from '@/constants/login.schema';
import { Input } from '@/components/commons/input';
import { Button } from '../commons/button';

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
      <Button
        variant="primary"
        btnText="Sign In as Admin"
        isLoading={isLoading}
        leftIcon={
          <LogIn className="w-5 h-5 transition-transform group-hover:scale-110" />
        }
        btnProps={{
          disabled: isLoading,
          type: 'submit',
        }}
      />
    </form>
  );
}
