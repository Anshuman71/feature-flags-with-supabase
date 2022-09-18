const { createClient } = require("@supabase/supabase-js");
export const SUPABASE_CONFIG = {
  API_KEY: "FROM_SUPABASE_DASHBOARD",

  API_URL: "FROM_SUPABASE_DASHBOARD",
};

export const supabaseClient = createClient(
  SUPABASE_CONFIG.API_URL,
  SUPABASE_CONFIG.API_KEY
);
