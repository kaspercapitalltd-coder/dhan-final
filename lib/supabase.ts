import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Initialize the Supabase client
// For the preview environment, if keys are not provided, it will use placeholders structure perfectly fine without throwing fatal errors.
export const supabase = createClient(supabaseUrl, supabaseKey);
