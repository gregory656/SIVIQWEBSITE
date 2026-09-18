import { Route, Routes } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { AboutPage } from '../pages/AboutPage'
import { DeleteAccountPage, ForgotPasswordPage, LoginPage, OAuthAppHandoffPage, ResetPasswordPage } from '../pages/AccountAuthPages'
import { CommunityGuidelinesPage } from '../pages/CommunityGuidelinesPage'
import { ContactPage } from '../pages/ContactPage'
import { DataSafetyPage } from '../pages/DataSafetyPage'
import { HomePage } from '../pages/HomePage'
import { LeadershipPage } from '../pages/LeadershipPage'
import { MaintenancePage } from '../pages/MaintenancePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage'
import { SafetyStandardsPage } from '../pages/SafetyStandardsPage'
import { TermsPage } from '../pages/TermsPage'

export function AppRouter() {
  return (
    <PageShell>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<LeadershipPage />} path="/leadership" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<PrivacyPolicyPage />} path="/privacy-policy" />
        <Route element={<TermsPage />} path="/terms" />
        <Route element={<CommunityGuidelinesPage />} path="/community-guidelines" />
        <Route element={<DataSafetyPage />} path="/data-safety" />
        <Route element={<DeleteAccountPage />} path="/delete-account" />
        <Route element={<DeleteAccountPage />} path="/account-deletion" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ForgotPasswordPage />} path="/forgot-password" />
        <Route element={<ResetPasswordPage />} path="/reset-password" />
        <Route element={<OAuthAppHandoffPage />} path="/app/login" />
        <Route element={<MaintenancePage />} path="/maintenance" />
        <Route element={<SafetyStandardsPage />} path="/safety-standards" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </PageShell>
  )
}
