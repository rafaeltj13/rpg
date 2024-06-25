// import type { Database } from "~/lib/supabase";

import { createClient, SupabaseClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://gjdcsvwpxorvysqmhwym.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZGNzdndweG9ydnlzcW1od3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NjY3NjksImV4cCI6MjAzMDI0Mjc2OX0.MB1kP97k2V_O1D7T9guQU9s2KxohQSfLF1o37ZRPyxk"
);

export const useSupabase = () => supabase;
// export const useSupabase = () => {
// const config = useRuntimeConfig();

// const supabaseUrl = config.public.SUPABASE_URL as string;
// const supabaseKey = config.public.SUPABASE_KEY as string;

//   return supabase;
// };
