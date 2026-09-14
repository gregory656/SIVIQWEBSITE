# SIVIQ website implementation brief

Paste the following into the `siviqwebsite` project assistant. It is written to keep the website and Flutter app connected to the same Supabase project without exposing privileged credentials.

```text
Implement the production SIVIQ account website at https://siviq.top. This website is a client of the existing Supabase project, not a separate database or authentication system.

Build responsive, accessible routes:
- /login — email/password login, username/password login through the Supabase Edge Function `sign-in-with-username`, and Continue with Google.
- /forgot-password — email form that calls supabase.auth.resetPasswordForEmail(email, { redirectTo: 'https://siviq.top/reset-password' }). Always show a generic success message.
- /reset-password — exchange the recovery URL/hash for a Supabase session, collect a new password and confirmation, call supabase.auth.updateUser({ password }), then show a Return to SIVIQ button.
- /delete-account — require an active Supabase session. Require the user to type DELETE and re-authenticate (email/password users with signInWithPassword; Google-only users with Google OAuth) immediately before calling POST /functions/v1/delete-account with the current Authorization Bearer token. Never let the submitted email choose the account. Explain permanence before confirmation.
- /app/login — a small hand-off page. If SIVIQ Android is installed, open `siviq://login`; otherwise show a button to install/open SIVIQ. Do not put access tokens in URLs.

Use the existing project’s public values only, as environment variables:
VITE_SUPABASE_URL=https://jbydwuvdxbmadyrfuljk.supabase.co
VITE_SUPABASE_ANON_KEY=<the existing public anon key>
Never use SUPABASE_SERVICE_ROLE_KEY, a database password, or a Google client secret in browser code.

Use @supabase/supabase-js. Configure Google with signInWithOAuth({ provider: 'google', options: { redirectTo: 'https://siviq.top/app/login' } }). For username sign-in call the Edge Function with `{ username, password }`; if it returns `{ session }`, set the returned refresh token through the Supabase client. Display the same “Invalid username or password” result for an unknown username and a bad password.

Add a public `.well-known/assetlinks.json` endpoint for Android App Links. Its package_name is `com.siviq.africa`; leave a clearly marked placeholder for the release signing SHA-256 fingerprint. It must be served as application/json with no redirect. The Flutter Android manifest already handles https://siviq.top/app/... and siviq://login.

Keep a clean SIVIQ visual style. Add loading, success, expired-link, offline, and generic error states. Do not expose raw Supabase errors. Preserve query strings and URL hash fragments on auth callback pages.
```

## Follow-up configuration

1. In Supabase Auth → URL Configuration, set Site URL to `https://siviq.top` and add these redirect URLs: `https://siviq.top/reset-password`, `https://siviq.top/app/login`, and `siviq://login`.
2. In Google Cloud Console, create separate OAuth clients. Android: package `com.siviq.africa` plus the **release keystore SHA-1**. Web: origins `https://siviq.top` and redirect URI `https://jbydwuvdxbmadyrfuljk.supabase.co/auth/v1/callback`.
3. In Supabase Auth → Providers → Google, paste the Web client ID and secret. The secret stays in Supabase, never in Flutter or the website.
4. Set the Edge Function secret `SUPABASE_SERVICE_ROLE_KEY` only in Supabase, then deploy `delete-account` and `sign-in-with-username`.
5. Replace the SHA-256 placeholder in `assetlinks.json` with the SHA-256 from the same **Play release signing certificate**. Test Android App Links using a release build.
6. Apply the new database migration before publishing the app. Test password recovery, Google sign-in, username sign-in, location edits, interests, and deletion using test accounts first.

## Deployment confirmation checklist

The production domain currently redirects `https://siviq.top` to `https://www.siviq.top`. Configure both hosts in Supabase Auth URL Configuration and Google OAuth, then deploy the website before testing:

- Supabase redirect URLs: `https://siviq.top/reset-password`, `https://siviq.top/app/login`, `https://www.siviq.top/reset-password`, `https://www.siviq.top/app/login`, and `siviq://login`.
- Google Web OAuth origins: `https://siviq.top` and `https://www.siviq.top`.
- Google OAuth callback remains `https://jbydwuvdxbmadyrfuljk.supabase.co/auth/v1/callback`.
- After Vercel deploys, open `https://www.siviq.top/.well-known/assetlinks.json`. It must return JSON—not the website HTML—and must include the supplied SHA-256 fingerprint.
- The Download App button targets `https://play.google.com/store/apps/details?id=com.siviq.africa`. It becomes an install page once that package is published to Google Play. If SIVIQ is still only in Firebase App Distribution, use its tester link separately; an Android App Bundle cannot be downloaded and installed from a browser.
