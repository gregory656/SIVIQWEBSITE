import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.')
}

export const supabase = createClient(url, anonKey, {
  auth: {
    detectSessionInUrl: true,
    persistSession: true,
  },
})

export const appLoginUrl = 'https://siviq.top/app/login?intent=login&kenyan=true'
