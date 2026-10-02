import { MobileScreenWrapper } from '@/components/commons/mobile-screen-wrapper';
import { RegistrationForm } from '@/components/register/register-form';
import { RegistrationHeader } from '@/components/register/register-header';
import { SocialProofAndFooter } from '@/components/register/social-proof-n-footer';

export default function RegisterPage() {
  return (
    <MobileScreenWrapper>
      <RegistrationHeader />
      <RegistrationForm />
      <SocialProofAndFooter />
    </MobileScreenWrapper>
  );
}
