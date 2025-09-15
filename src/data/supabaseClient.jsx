import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseURL, supabaseAnonKey);


