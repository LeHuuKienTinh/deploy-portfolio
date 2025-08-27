import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://bkvluluamjybttmxgmoz.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdmx1bHVhbWp5YnR0bXhnbW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjc5NDAsImV4cCI6MjA3MTcwMzk0MH0.t-V-iDHx-2zgwO6C4Gmc9xKIfWzeA-BkMwNOnXYFXmc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
