export type Feature = {
  title: string
  description: string
  imageKey: 'services' | 'campus' | 'chat' | 'security' | 'market'
  kicker: string
}

export const features: Feature[] = [
  {
    title: 'Social Commerce Feed',
    description: 'A personalized feed blending community posts, buyer requests, seller listings, and trending services — where social connections turn into real economic opportunities.',
    imageKey: 'services',
    kicker: 'Home layer',
  },
  {
    title: 'Service Marketplace',
    description: 'Offer and discover services across personal care, home services, technology, education, fashion, digital services, and delivery — from hairdressers to web developers.',
    imageKey: 'campus',
    kicker: 'Marketplace layer',
  },
  {
    title: 'Buyer Requests',
    description: 'Post what you need with your budget, location, and timing. Providers respond with structured offers instead of scattered chat messages.',
    imageKey: 'market',
    kicker: 'Demand layer',
  },
  {
    title: 'Siviq Match',
    description: 'Intelligent matching connects buyers with providers using skills, location, budget, availability, reviews, and reliability — not just popularity.',
    imageKey: 'services',
    kicker: 'Discovery layer',
  },
  {
    title: 'Secure Messaging',
    description: 'Direct chats, group conversations, hiring discussions, and order-related messaging with listing and order references built in.',
    imageKey: 'chat',
    kicker: 'Communication layer',
  },
  {
    title: 'Siviq Wallet',
    description: 'Platform credits, earnings tracking, and a transparent financial ledger — designed for compliant, auditable transactions.',
    imageKey: 'security',
    kicker: 'Payments layer',
  },
  {
    title: 'Trust & Reputation',
    description: 'Progressive verification, verified reviews from completed transactions, seller rankings, and badges that show exactly what was verified.',
    imageKey: 'campus',
    kicker: 'Trust layer',
  },
  {
    title: 'Siviq Safety Centre',
    description: 'Report scams, block users, appeal decisions, and get dispute help. Safety features are always free — monetization never gates protection.',
    imageKey: 'security',
    kicker: 'Safety layer',
  },
]

export const appSections = [
  'Home personalized social & marketplace feed',
  'Explore categories, search & nearby providers',
  'Create posts, services, products & requests',
  'Chats direct, group & hiring conversations',
  'Profile identity, portfolio, wallet & settings',
]

export const securityHighlights = [
  'Secure authentication with two-factor support',
  'Progressive identity & seller verification',
  'Verified reviews from completed transactions only',
  'Server-side payment verification and audit logs',
  'Siviq Safety Centre with reporting and appeals',
  'Privacy controls, data export and account deletion',
]
