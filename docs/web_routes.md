# Website auth return routes

The Flutter app sends Google OAuth users to:

`https://siviq.top/app/login?intent=login|signup&kenyan=true|false`

The website must consume the Supabase OAuth callback, exchange its code or
token for a session, and then use `intent` and `kenyan` to choose the correct
destination. It must not send every successful callback to the first
onboarding screen.

## Supabase deployment

Run these commands from this repository:

```powershell
supabase login
supabase link --project-ref jbydwuvdxbmadyrfuljk
supabase db push
supabase functions deploy delete-account
supabase functions deploy export-user-data
supabase functions deploy log-security-event
supabase functions deploy sign-in-with-username
```

`supabase db push` applies `20260916100000_global_audience_profiles.sql`,
which adds `profiles.is_kenyan`. Review the migration list before confirming.
`sign-in-with-username` deliberately has `verify_jwt = false` in
`supabase/config.toml` because it begins an unauthenticated login attempt; the
other functions remain JWT-protected.

For editor type-checking, restart VS Code after installing Deno. The workspace
includes `deno.json` and `.vscode/settings.json`; Edge Functions use
`npm:@supabase/supabase-js@2` rather than the old `esm.sh` URL imports.

## Prompt for the website implementation agent

> Implement the Supabase OAuth return handler for `/app/login` on SIVIQ. Keep
> all callback query/hash parameters intact while exchanging the callback for a
> session. Read `intent` (`login` or `signup`) and `kenyan` (`true` or `false`)
> from the URL. Fetch the signed-in user's `profiles` row. If a completed
> profile exists (non-empty `display_name` and `username`), show a clear
> success state and redirect to the web Home feed for both intents. If no
> completed profile exists, send the new OAuth user to profile setup, preserving
> the authenticated user's name, email, and `kenyan` value. For
> `kenyan=false`, county and sub-county must be optional; do not restrict the
> rest of the product. Do not redirect successful callbacks to Intro, Audience,
> Terms, or generic Login. An existing user who chooses "continue with Google"
> from the sign-up view must go to Home, never profile setup. Replace the
> callback URL after exchanging it so Back cannot replay it or expose tokens.
> Keep password recovery on its existing reset-password route.
