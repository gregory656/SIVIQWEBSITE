import { Route, Routes } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { AboutPage } from '../pages/AboutPage'
import { AccountDeletionPage } from '../pages/AccountDeletionPage'
import { CommunityGuidelinesPage } from '../pages/CommunityGuidelinesPage'
import { ContactPage } from '../pages/ContactPage'
import { DataSafetyPage } from '../pages/DataSafetyPage'
import { HomePage } from '../pages/HomePage'
import { LeadershipPage } from '../pages/LeadershipPage'
import { MaintenancePage } from '../pages/MaintenancePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage'
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
        <Route element={<AccountDeletionPage />} path="/account-deletion" />
        <Route element={<MaintenancePage />} path="/maintenance" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </PageShell>
  )
}
