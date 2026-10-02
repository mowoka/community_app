'use client';

import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { AdminHeader } from '@/components/login/admin-header';
import { AdminLoginForm } from '@/components/login/admin-login-form';
import { SecurityBadge } from '@/components/login/security-badge';
import { SocialAuth } from '@/components/login/social-auth';

export default function Login() {
  return (
    <MobileScreenWrapper>
      <AdminHeader />
      <AdminLoginForm />
      <SocialAuth />
      <SecurityBadge />
    </MobileScreenWrapper>
  );
}
