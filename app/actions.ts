'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { revalidatePath } from 'next/cache' // Required to refresh the Admin view

// 1. Define the validation schema
const BookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
  service: z.string().min(1, "Please select a service"),
  notes: z.string().max(500).optional(),
})

// Define the state type for the UI
export type FormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    phone?: string[];
    service?: string[];
    notes?: string[];
  };
  message?: string | null;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/**
 * Handles new patient bookings from the public form
 */
export async function submitBooking(prevState: FormState, formData: FormData): Promise<FormState> {
  const rawData = Object.fromEntries(formData.entries())
  const validatedFields = BookingSchema.safeParse(rawData)

  // 2. Return errors if validation fails
  if (!validatedFields.success) {
    return { 
      success: false, 
      errors: validatedFields.error.flatten().fieldErrors 
    }
  }

  // 3. Insert into Supabase (include default status for table if it has status column)
  const { error } = await supabase.from('bookings').insert([{ ...validatedFields.data, status: 'pending' }])

  if (error) {
    return { success: false, message: "Clinic database is temporarily offline." }
  }

  return { success: true, message: "Appointment request received!" }
}

/**
 * Updates the status of an existing booking (Admin only)
 */
export async function updateBookingStatus(id: number, status: string) {
  const { error } = await supabase
    .from('bookings')
    .update({ status: status }) // This sends 'confirmed' to the 'status' column
    .eq('id', id);

  if (error) {
    console.error('Update failed:', error.message);
    return { success: false };
  }
  
  // This is the magic line. It forces the Admin page to fetch fresh data.
  revalidatePath('/admin'); 
  return { success: true };
}