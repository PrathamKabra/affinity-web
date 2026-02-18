'use server'

import { createClient } from '@supabase/supabase-js'

// 1. Initialize Supabase using your .env.local variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitBooking(formData: FormData) {
  // 2. Extract data from the form
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    notes: formData.get('notes'),
    // Supabase usually adds a 'created_at' automatically, 
    // but you can include timestamp if your table requires it.
  };

  // 3. Insert into the 'bookings' table in Supabase
  const { error } = await supabase
    .from('bookings')
    .insert([data])

  // 4. Handle Errors
  if (error) {
    console.error('Supabase Error:', error.message);
    return { success: false, error: error.message };
  }

  // 5. Log for your own verification in the terminal
  console.log('--- DATA SAVED TO SUPABASE ---');
  console.log(data);

  return { success: true };
}