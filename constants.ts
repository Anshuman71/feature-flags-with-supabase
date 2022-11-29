const { createClient } = require("@supabase/supabase-js");
export const SUPABASE_CONFIG = {
  API_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYmtsZmNmdWh2Y2ZvcGptdndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0Mjc1NDEsImV4cCI6MTk3OTAwMzU0MX0.__o6FqbZJufUGVhARjV95Sz9ppMy-nVreP5SQd1iO_M",
  API_URL: "https://xlbklfcfuhvcfopjmvwj.supabase.co",
};

export const supabaseClient = createClient(
  SUPABASE_CONFIG.API_URL,
  SUPABASE_CONFIG.API_KEY
);
