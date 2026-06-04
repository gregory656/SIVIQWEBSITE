export type Feature = {
  title: string
  description: string
  imageKey: 'socialFeed' | 'projects' | 'messaging' | 'security'
  kicker: string
}

export const features: Feature[] = [
  {
    title: 'Social Feed',
    description: 'I want citizens to discover local posts, photos, comments, replies, shares, and profile activity without the app feeling like political noise.',
    imageKey: 'socialFeed',
    kicker: 'Community layer',
  },
  {
    title: 'Project Tracking',
    description: 'Projects will carry county, sub-county, location, status, description, evidence images, approvals, disputes, comments, and reports.',
    imageKey: 'projects',
    kicker: 'Evidence layer',
  },
  {
    title: 'Stalled Project Reporting',
    description: 'When a project is stranded or stalled, SIVIQ should help people document it clearly instead of leaving the issue scattered in casual talk.',
    imageKey: 'projects',
    kicker: 'Follow-up layer',
  },
  {
    title: 'Completed Project Showcase',
    description: 'Completed and excellent projects also deserve visibility, because accountability should include proof of delivery, not only complaints.',
    imageKey: 'projects',
    kicker: 'Delivery layer',
  },
  {
    title: 'Rankings System',
    description: 'Rankings are community SIVIQ sentiment analytics with weekly snapshots. They are not official government truth or election results.',
    imageKey: 'socialFeed',
    kicker: 'Sentiment layer',
  },
  {
    title: 'Private Messaging',
    description: 'Direct messaging will help users follow up with each other through search, unread states, favorites, archives, and delivery indicators.',
    imageKey: 'messaging',
    kicker: 'Conversation layer',
  },
  {
    title: 'Group Chats',
    description: 'Group chats are for responsible local coordination around civic issues, public projects, and community follow-up.',
    imageKey: 'messaging',
    kicker: 'Coordination layer',
  },
  {
    title: 'Secure Authentication',
    description: 'The app uses email and password access, records legal acceptance during signup, and supports active sessions and trusted devices.',
    imageKey: 'security',
    kicker: 'Account layer',
  },
  {
    title: 'PIN and Biometric App Lock',
    description: 'Users can protect the app with a 4-digit PIN, biometric unlock, PIN fallback, password reauthentication, and session timeout.',
    imageKey: 'security',
    kicker: 'Device layer',
  },
  {
    title: 'Moderation and Appeals',
    description: 'Moderation includes reports, reviews, enforcement actions, appeals, and clear platform roles: user, moderator, admin, and super_admin.',
    imageKey: 'security',
    kicker: 'Safety layer',
  },
]

export const appSections = [
  'Home community discussion layer',
  'Projects civic evidence layer',
  'Rankings civic intelligence layer',
  'Chats direct and group messaging',
  'Profile public identity and controls',
]

export const securityHighlights = [
  'Secure account access',
  'Biometric login',
  'PIN app lock',
  'Session timeout',
  'Trusted devices',
  'Security activity history',
  'Secure cloud infrastructure powered by Supabase',
]
