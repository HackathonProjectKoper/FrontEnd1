// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wlcrwjpofybupwxcwkte.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsY3J3anBvZnlidXB3eGN3a3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMjYyMjUsImV4cCI6MjA2MjkwMjIyNX0.jUrUi1k-yu986SDxOyEPTz2m9WwWdLrUDHvvirYdtck'; // replace with actual anon key from Supabase > Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
