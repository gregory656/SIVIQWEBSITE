# SIVIQ 2.0 — MASTER PRODUCT & DEVELOPMENT ROADMAP

**Project:** Siviq  
**Version:** 2.0  
**Project Type:** Campus-first Social Commerce & Freelance Marketplace  
**Initial Market:** Kenyan campuses and surrounding communities  
**Technology:** Flutter, Firebase and server-side cloud infrastructure  
**Website:** https://siviq.top  
**Development Approach:** Existing-codebase modernization, modular development and incremental releases.

---

# 1. PROJECT OVERVIEW

## 1.1 What is Siviq?

Siviq is a campus-first social commerce and freelance marketplace designed to connect buyers, independent service providers, student entrepreneurs and local businesses.

The platform enables people to discover services, offer professional skills, buy and sell products, communicate, transact and build trusted reputations within their communities.

Siviq combines:

- Social networking.
- Freelance services.
- Local commerce.
- Product discovery.
- Direct communication.
- Intelligent recommendations.
- Trust and reputation management.
- Transaction infrastructure.
- Digital platform utilities.

Siviq is not intended to become another conventional social networking application.

Its purpose is to transform social connections into meaningful economic opportunities.

## 1.2 Product Vision

To build a trusted digital ecosystem where anyone can discover opportunities, offer skills, find services, exchange products and grow a business through meaningful connections.

## 1.3 Product Mission

Make it easier for people to find trustworthy service providers, monetize their skills, discover products and participate in local commerce.

## 1.4 Brand Positioning

**SIVIQ**

*Your Campus. Your Market. Your Network.*

The platform starts with campuses but is designed to expand into towns, universities, communities and broader local commerce.

---

# 2. IMPORTANT DEVELOPMENT PRINCIPLE

Siviq is NOT being developed from scratch.

An existing Flutter application already contains substantial functionality, including:

- User authentication.
- User profiles.
- Social posting.
- Engagement.
- Direct messaging.
- Group chats.
- Notifications.
- Rankings.
- Projects functionality.
- Firebase integration.
- Existing backend logic and Cloud Functions.

The objective is to inspect, preserve, improve, refactor and repurpose existing functionality.

Do not unnecessarily rebuild working components.

Before implementing anything:

1. Inspect the existing repository.
2. Understand its architecture.
3. Identify existing Firebase services.
4. Inspect Cloud Functions and backend logic.
5. Identify reusable components.
6. Identify obsolete political features.
7. Identify security weaknesses.
8. Document existing functionality.
9. Compare existing functionality against the new requirements.
10. Create a migration plan.

Do not delete existing functionality before understanding its dependencies.

---

# 3. CORE PRODUCT PILLARS

Siviq will be built around seven major pillars.

### 3.1 Marketplace
A marketplace for services, freelance work, digital services and physical products.

### 3.2 Community
A social environment where users discover opportunities, share updates and interact.

### 3.3 Communication
Secure direct messaging, group conversations, hiring discussions and transaction-related communication.

### 3.4 Trust and Reputation
Verification, reviews, transaction histories, seller rankings and buyer reliability indicators.

### 3.5 Siviq Wallet
A platform utility system supporting credits, payments, earnings tracking and future gift functionality.

### 3.6 Siviq Intelligence
An intelligent system supporting content moderation, fraud detection, matching, recommendations and market analysis.

### 3.7 Business Infrastructure
Seller storefronts, analytics, promotions, integrations, administration and monetization.

---

# 4. APPLICATION NAVIGATION

The existing bottom navigation contains:

- Home
- Rankings
- Projects
- Chats
- Profile

Rankings and Projects will be removed from their current positions and their functionality will be redesigned or redistributed.

## Proposed Siviq bottom navigation

1. **Home**
   - Personalized social and marketplace feed.
   - Trending posts.
   - Buyer requests.
   - Seller listings.
   - Community updates.

2. **Explore**
   - Service categories.
   - Product categories.
   - Search.
   - Nearby providers.
   - Discover sellers.
   - Discover buyers.
   - Trending services.

3. **Create**
   - Publish a social post.
   - Offer a service.
   - Request a service.
   - Sell a product.
   - Create a buyer request.

4. **Chats**
   - Direct messages.
   - Group chats.
   - Hiring conversations.
   - Order-related conversations.
   - Message requests.

5. **Profile**
   - Personal profile.
   - Seller profile.
   - Portfolio.
   - Reviews.
   - Verification.
   - Wallet.
   - Account settings.
   - Privacy and security.
   - Analytics.

The wallet should be easily accessible from the profile and relevant transaction screens.

Notifications should remain accessible from the application header.

---

# 5. PRODUCT DEVELOPMENT ROADMAP

## PHASE 0 — EXISTING APPLICATION AUDIT

**Objective:** Understand what already exists before changing the application.

Tasks:

- Inspect Flutter project structure.
- Inspect application architecture.
- Inspect routing and navigation.
- Inspect existing authentication.
- Inspect Firestore collections.
- Inspect Firebase Storage.
- Inspect Cloud Functions.
- Inspect security rules.
- Inspect existing chat functionality.
- Inspect social feed implementation.
- Inspect notifications.
- Inspect existing ranking algorithms.
- Inspect project-related functionality.
- Inspect existing user roles and permissions.
- Identify obsolete political functionality.
- Identify reusable components.
- Identify technical debt.

Deliverables:

- Existing Architecture Report.
- Existing Feature Inventory.
- Firebase Database Inventory.
- Security Audit.
- Reusable Components Report.
- Migration Plan.

**Completion requirement:** We understand what can be reused, what requires modification and what must be replaced.

---

## PHASE 1 — PRODUCT FOUNDATION AND BRANDING

**Objective:** Establish the new Siviq identity and application structure.

Tasks:

- Define the new Siviq design system.
- Establish brand colors and typography.
- Update application icon.
- Update splash screen.
- Update onboarding branding.
- Update application descriptions.
- Remove political terminology.
- Redesign navigation.
- Establish reusable UI components.
- Define responsive layouts.
- Establish loading, empty and error states.
- Establish application-wide design standards.

Deliverables:

- Siviq Design System.
- Updated Flutter Theme.
- New Navigation Architecture.
- Updated Application Branding.
- Reusable Component Library.

---

## PHASE 2 — ONBOARDING, AUTHENTICATION AND USER IDENTITY

**Objective:** Create a secure and personalized account experience.

Onboarding sequence:

1. Welcome to Siviq.
2. Introduction to the platform.
3. Campus or community selection.
4. Location and service-area preferences.
5. Interest selection.
6. Buyer, seller or both selection.
7. Account registration.
8. Email verification.
9. Profile creation.
10. Privacy explanation.
11. Community guidelines.
12. Personalized home feed.

Account functionality:

- Email and password authentication.
- Supported social sign-in.
- Email verification.
- Phone verification.
- Two-factor authentication.
- Password recovery.
- Secure session management.
- Login alerts.
- Account recovery.
- Device/session management.

User identity:

- Display name.
- Username.
- Profile photograph.
- Biography.
- Location.
- Skills.
- Interests.
- Professional information.
- Portfolio.
- Account status.

Users must be able to operate as buyers and sellers simultaneously.

Verification must be progressive rather than mandatory for every user at registration.

---

## PHASE 3 — SOCIAL AND MARKETPLACE EXPERIENCE

**Objective:** Transform the existing social feed into a social commerce discovery environment.

### Home feed

Retain and improve:

- For You.
- Trending.
- Discover.

Add:

- Recommended services.
- Recommended sellers.
- Buyer requests.
- New products.
- Community posts.
- Popular listings.
- Sponsored listings.

### Marketplace categories

**Personal Care**
- Hairdressers.
- Barbers.
- Makeup artists.
- Nail technicians.

**Home Services**
- Laundry.
- Cleaning.
- Gas delivery.
- Home repairs.

**Technology**
- Phone repairs.
- Computer repairs.
- Cyber services.
- Wi-Fi installation.
- Web development.
- Software development.

**Buy and Sell**
- Beds.
- Sofas.
- Electronics.
- Second-hand furniture.
- Clothes.
- Shoes.
- Accessories.

**Education**
- Online tutoring.
- Technical training.
- Educational coaching.

**Fashion**
- Clothing.
- Shoes.
- Accessories.
- Custom designs.

**Digital Services**
- Data bundles.
- Digital products.
- Other permitted digital services.

**Delivery and Errands**
- Shopping collection.
- Parcel delivery.
- Local errands.

Categories must be configurable from the backend.

Each category must support customized listing fields and workflows.

---

## PHASE 4 — LISTING AND REQUEST ENGINE

**Objective:** Build a flexible system for publishing services, products and buyer requests.

Two primary publishing modes:

### A. Request a Service

Structured template:

"I'm currently around [Location] looking for [Service].

My preferred budget is [Price].

Preferred time: [Date/Time].

If you're available, send me your offer!"

Fields:

- Service category.
- Description.
- Location or service area.
- Budget.
- Preferred date.
- Availability.
- Images where relevant.

### B. Offer a Service

Structured template:

"I'm offering [Service A, B, C].

Available around [Location].

Starting price: [Price].

Portfolio: [Portfolio Link].

Availability: [Availability].

Interested? Message me on Siviq."

Fields:

- Service category.
- Service description.
- Pricing.
- Images and videos.
- Portfolio.
- Availability.
- Service area.
- Delivery or completion conditions.

### Product listings

Support:

- Product title.
- Description.
- Original photographs.
- Product condition.
- Price.
- Defects and disclosures.
- Availability.
- Delivery or collection arrangements.

The listing engine must support category-specific fields.

---

## PHASE 5 — DISCOVERY AND INTELLIGENT MATCHING

**Objective:** Connect the right buyers with the right providers.

Introduce Siviq Match.

Matching considerations:

- Service compatibility.
- Skills.
- Location.
- Budget.
- Availability.
- Portfolio relevance.
- Reviews.
- Completed transactions.
- Provider reliability.
- User preferences.

Discovery functionality:

- Search.
- Category filters.
- Location filters.
- Price filters.
- Availability filters.
- Seller profiles.
- Buyer profiles.
- Trending services.
- Recommended providers.

Recommendations must be explainable and must not rely exclusively on engagement metrics.

---

## PHASE 6 — MESSAGING AND COMMUNICATION

**Objective:** Upgrade existing chat functionality into a marketplace communication system.

Retain:

- Direct messaging.
- Group chats.
- Message notifications.
- Existing reusable chat functionality.

Add:

- Buyer inquiries.
- Seller responses.
- Quotation requests.
- Hiring conversations.
- Listing references inside conversations.
- Order references.
- Image and file sharing.
- Message requests.
- Blocking.
- Reporting.
- Spam detection.

### Siviq Credits

Proposed initial credit model:

- Starting a new conversation: 1 credit.
- Publishing a promotional listing: 2 credits.
- Replying to existing conversations: Free.
- Responding to buyer requests: Free.
- Reporting suspicious activity: Free.
- Contacting support: Free.

All limits must be configurable.

Do not charge users for essential safety functionality.

Implement server-side credit consumption and atomic balance updates.

---

## PHASE 7 — ORDER MANAGEMENT AND HIRING

**Objective:** Convert conversations into structured transactions.

Order lifecycle:

1. Request created.
2. Seller expresses interest.
3. Quotation submitted.
4. Buyer and seller negotiate.
5. Order accepted.
6. Payment confirmed, where required.
7. Work or delivery begins.
8. Completion submitted.
9. Buyer confirms or disputes.
10. Transaction completed.
11. Eligible reviews become available.

Additional states:

- Cancelled.
- Expired.
- Payment failed.
- Refund pending.
- Disputed.
- Under investigation.
- Partially completed.

Build different transaction workflows for:

- Physical products.
- Laundry.
- Gas delivery.
- Repairs.
- Digital services.
- Freelance development.
- Online tutoring.
- Delivery services.

---

## PHASE 8 — SIVIQ WALLET AND FINANCIAL INFRASTRUCTURE

**Objective:** Introduce platform credits, financial records and compliant payment functionality.

Separate the following balances:

### Siviq Credits
Used for eligible platform actions.

### Siviq Gift Coins
Potentially used for profile gifts and appreciation, subject to regulatory and payment-provider approval.

### Siviq Earnings
Records eligible money earned from completed transactions.

### Siviq Financial Ledger
An auditable record of financial transactions.

Wallet functionality:

- Transaction history.
- Credit purchases.
- Credit consumption.
- Payment records.
- Earnings tracking.
- Withdrawals where supported.
- Refund tracking.
- Platform fees.
- Transaction statements.

Payment integrations:

- M-PESA through an appropriate payment arrangement.
- Additional supported payment providers in future.

Financial security requirements:

- Server-side payment verification.
- Idempotent transaction processing.
- Immutable double-entry ledger.
- Reconciliation.
- Audit logs.
- Withdrawal authorization.
- Fraud monitoring.

Do not implement unrestricted user-to-user cash transfers or cash-convertible coins without confirming the applicable Kenyan regulatory requirements and obtaining suitable authorized payment partners.

---

## PHASE 9 — VERIFICATION AND REPUTATION

**Objective:** Establish trust between buyers and service providers.

Verification levels:

1. Basic account.
2. Email verified.
3. Phone verified.
4. Identity verified.
5. Seller verified.
6. Campus affiliation verified.

Badges must clearly communicate what has actually been verified.

### Siviq Reputation

Reputation must be based on legitimate activity.

Consider:

- Completed orders.
- Customer satisfaction.
- Delivery reliability.
- Responsiveness.
- Cancellation history.
- Portfolio quality.
- Verification status.

### Weekly rankings

Retain the ranking concept from the original Siviq but transform it into marketplace rankings.

Proposed rankings:

- Top Service Providers.
- Rising Sellers.
- Reliable Buyers.
- Top Campus Businesses.
- Emerging Talent.
- Community Contributors.

Rankings must resist fake reviews, artificial engagement and paid manipulation.

Only eligible transactions should generate verified reviews.

---

## PHASE 10 — SIVIQ INTELLIGENCE

**Objective:** Introduce AI-assisted trust, discovery and operational intelligence.

Five engines:

### 1. Siviq Content Intelligence

Analyzes:

- Posts.
- Listings.
- Descriptions.
- Comments.
- Images where appropriate.

Detects:

- Spam.
- Prohibited content.
- Suspicious external-contact solicitation.
- Scam indicators.
- Impersonation indicators.
- Misleading listing content.

Provides explanations and suggested corrections.

### 2. Siviq Trust Intelligence

Identifies:

- Suspicious registration patterns.
- Account takeover indicators.
- Unusual messaging behavior.
- Transaction anomalies.
- Coordinated abuse.

### 3. Siviq Match Intelligence

Matches buyers and sellers using relevant preferences and marketplace information.

### 4. Siviq Reputation Intelligence

Analyzes eligible transaction outcomes, review quality and service reliability.

### 5. Siviq Market Intelligence

Identifies:

- Popular service categories.
- Emerging demand.
- Underserved locations.
- Market trends.
- Seller performance.

AI must not independently issue irreversible permanent bans.

High-impact enforcement decisions require documented evidence, appropriate human review and appeals.

---

## PHASE 11 — SECURITY, PRIVACY AND SAFETY

**Objective:** Build security into every module.

Security requirements:

- Firebase Security Rules.
- Server-side authorization.
- Firebase App Check.
- Secure authentication.
- Two-factor authentication.
- Rate limiting.
- Abuse detection.
- Secret management.
- Secure file uploads.
- Restricted administrative access.
- Audit logging.
- Session revocation.
- Data encryption.
- Backup and recovery procedures.
- Security monitoring.
- Incident response.

Privacy requirements:

- Privacy policy.
- User consent management.
- Public/private profile controls.
- Location privacy.
- Data export.
- Account deletion.
- Data retention policies.
- Access controls for personal information.
- Restricted identity-document processing.
- Transparent data processing disclosures.

Build a Siviq Safety Centre supporting:

- User reports.
- Listing reports.
- Message reports.
- Scam reports.
- Blocking.
- Appeals.
- Dispute assistance.
- Safety education.

Assess applicable Kenyan Data Protection Act and ODPC requirements before launch.

---

## PHASE 12 — LENTECH AND EXTERNAL INTEGRATIONS

**Objective:** Connect Siviq with complementary service providers rather than rebuilding every service internally.

Initial integration: Lentech.

Use case: Online tutoring and other supported remote services.

Proposed workflow:

Siviq booking → Payment confirmation → Lentech session creation → Meeting access → Session completion → Siviq review.

Integration requirements:

- Secure API authentication.
- Server-side credentials.
- Session identifiers.
- Booking management.
- Cancellation handling.
- Attendance events.
- Webhook verification.
- Error handling.
- Transaction reconciliation.

Future integrations may include delivery services, verification providers, analytics and additional payment partners.

---

## PHASE 13 — MONETIZATION AND BUSINESS MODEL

Potential revenue streams:

1. Marketplace transaction commissions.
2. Promoted listings.
3. Credit purchases.
4. Premium seller subscriptions.
5. Optional gifts, subject to compliant implementation.
6. Institutional partnerships.
7. Advanced business analytics.

Prioritize transaction revenue and promoted listings after marketplace activity becomes meaningful.

Do not compromise user safety or access to essential protections for monetization.

---

## PHASE 14 — SIVIQ ADMIN CONSOLE

**Objective:** Build an independent administrative system.

Modules:

- Overview dashboard.
- User management.
- Seller verification.
- Listing moderation.
- Order management.
- Payment reconciliation.
- Wallet inspection.
- Dispute management.
- Reports and appeals.
- Siviq Intelligence dashboard.
- Rankings configuration.
- Promotions management.
- Support management.
- Audit logs.
- System configuration.

Administrative roles:

- Super Administrator.
- Trust and Safety Moderator.
- Customer Support.
- Finance Officer.
- Verification Officer.
- Content Moderator.
- Analytics Viewer.

Enforce role-based permissions and audit every sensitive action.

---

## PHASE 15 — TESTING, RELEASE AND EXPANSION

**Objective:** Launch a reliable marketplace and establish a repeatable improvement process.

Testing:

- Unit testing.
- Widget testing.
- Integration testing.
- Firebase Rules testing.
- Authentication testing.
- Payment testing.
- Messaging testing.
- Transaction lifecycle testing.
- Security testing.
- Performance testing.
- Device compatibility testing.
- Backup and recovery testing.

Initial release strategy:

1. Internal testing.
2. Small campus pilot.
3. Controlled beta.
4. Feedback collection.
5. Bug fixes.
6. Security review.
7. Public launch.
8. Gradual expansion.

Measure:

- User activation.
- Listing creation.
- Buyer inquiries.
- Successful matches.
- Completed orders.
- Repeat transactions.
- Seller retention.
- Dispute rate.
- Scam reports.
- Customer satisfaction.

---

# 6. PROPOSED DATABASE ARCHITECTURE

The existing Firebase database must be audited before making schema changes.

Proposed logical collections:

- users
- profiles
- campuses
- verifications
- categories
- listings
- service_requests
- conversations
- messages
- orders
- order_events
- payments
- wallet_accounts
- wallet_ledger
- reviews
- reports
- moderation_cases
- notifications
- promotions
- subscriptions
- audit_logs
- intelligence_events

Sensitive financial, verification and administrative records must be protected by server-side authorization.

Do not place all application data inside a single user document.

Use appropriate indexes, data ownership rules, retention policies and transactional consistency.

---

# 7. REQUIRED ENGINEERING DOCUMENTATION

Maintain these project documents throughout development:

1. PRODUCT_SPEC.md
2. ARCHITECTURE.md
3. DATABASE_SCHEMA.md
4. SECURITY_MODEL.md
5. API_DOCUMENTATION.md
6. UI_DESIGN_SYSTEM.md
7. DEVELOPMENT_ROADMAP.md
8. TESTING_STRATEGY.md
9. PRIVACY_REQUIREMENTS.md
10. CHANGELOG.md

Each document must be updated when the corresponding system changes.

---

# 8. AI CODING AGENT RULES

Any AI agent contributing to Siviq must follow these rules.

1. Inspect existing code before modifying it.
2. Never assume a feature does not exist.
3. Reuse existing working functionality.
4. Avoid unnecessary architectural rewrites.
5. Do not modify unrelated modules.
6. Do not introduce hardcoded credentials.
7. Never expose API secrets in Flutter.
8. Enforce sensitive operations server-side.
9. Follow existing naming conventions unless a documented migration is approved.
10. Write tests for important functionality.
11. Explain database migrations.
12. Preserve existing user data.
13. Document breaking changes.
14. Avoid introducing unnecessary dependencies.
15. Do not claim implementation is complete without verification.

Every development task must include:

- Objective.
- Existing functionality to preserve.
- Files or modules involved.
- Required changes.
- Database implications.
- Security requirements.
- Acceptance criteria.
- Tests.
- Explicit exclusions.

---

# 9. DEVELOPMENT PRIORITIES

The development sequence must follow dependencies rather than excitement.

**Foundation**
- Existing-codebase audit.
- Product definition.
- Branding.
- Navigation.
- Architecture.

**Marketplace**
- Onboarding.
- Profiles.
- Categories.
- Listings.
- Requests.
- Discovery.

**Communication**
- Direct messaging.
- Group messaging.
- Hiring conversations.
- Credits and rate limits.

**Transactions**
- Orders.
- Quotations.
- Payment-provider integration.
- Completion.
- Reviews.
- Disputes.

**Trust**
- Verification.
- Moderation.
- Siviq Intelligence.
- Reputation.
- Rankings.

**Financial ecosystem**
- Wallet.
- Credits ledger.
- Earnings.
- Promotions.
- Approved settlement functionality.

**Expansion**
- Lentech.
- Delivery integrations.
- Analytics.
- Campus partnerships.
- Additional markets.

---

# 10. INITIAL MVP DEFINITION

The first public MVP should not attempt to implement the entire ecosystem.

It must support the complete basic marketplace journey.

### Required MVP functionality

- Secure registration and login.
- User profiles.
- Campus and location preferences.
- Buyer and seller capabilities.
- Service and product categories.
- Service listings.
- Product listings.
- Buyer requests.
- Personalized feed.
- Search and discovery.
- Seller profiles.
- Direct messaging.
- Basic moderation.
- Reporting and blocking.
- Basic verification.
- Structured order management.
- A suitable payment integration where required.
- Reviews after eligible completed transactions.
- Administrative moderation.

### Post-MVP

- Advanced Siviq Intelligence.
- Weekly reputation rankings.
- Premium seller analytics.
- Advanced promotions.
- Gift coins.
- Cash-convertible rewards, subject to regulatory approval.
- Lentech integration.
- Advanced delivery tracking.
- Additional financial integrations.
- Broader geographic expansion.

---

# 11. PROJECT EXECUTION METHOD

Siviq will be developed incrementally, one module at a time.

For every module:

1. Understand the requirements.
2. Inspect existing implementation.
3. Identify reusable components.
4. Design the target architecture.
5. Define database requirements.
6. Define security requirements.
7. Implement.
8. Test.
9. Review.
10. Document.
11. Integrate with the existing application.
12. Mark the module complete only after verification.

Avoid implementing multiple unrelated modules simultaneously.

Maintain a visible development status:

- NOT STARTED
- AUDITING
- PLANNED
- IN DEVELOPMENT
- TESTING
- BLOCKED
- COMPLETED

Completed functionality must not be rebuilt without a clear technical reason.

---

# 12. FIRST TASK IN THE NEW PROJECT CONVERSATION

The first task is NOT to start coding.

Begin with:

**SIVIQ 2.0 — EXISTING APPLICATION AUDIT AND MIGRATION PLANNING**

The AI assistant must first understand the existing Flutter repository.

It should request or inspect:

- Project folder structure.
- pubspec.yaml.
- Existing navigation implementation.
- Authentication implementation.
- Firebase configuration.
- Firestore schema.
- Cloud Functions.
- Security Rules.
- Existing social feed.
- Chat implementation.
- Profile implementation.
- Rankings and Projects implementation.

Then produce:

1. Existing architecture analysis.
2. Reusable functionality inventory.
3. Obsolete functionality inventory.
4. Required modifications.
5. Database migration requirements.
6. Security gaps.
7. Proposed implementation order.

Do not begin major implementation until the audit is complete and the migration approach is approved.

---

# FINAL PROJECT DIRECTIVE

Siviq is intended to become a serious, scalable technology business.

The objective is not merely to redesign an existing social application.

The objective is to evolve the existing application into an intelligent, trusted marketplace and social commerce ecosystem.

Preserve what works.

Replace what no longer serves the vision.

Build what is missing.

Protect users and their data.

Make every major feature serve a clear business or user need.

Prioritize a functional, secure marketplace before introducing complex financial and AI systems.

**SIVIQ 2.0**

*Your Campus. Your Market. Your Network.*

**END OF MASTER ROADMAP**

