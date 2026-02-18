'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

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

  // 3. Insert into Supabase
  const { error } = await supabase.from('bookings').insert([validatedFields.data])

  if (error) {
    return { success: false, message: "Clinic database is temporarily offline." }
  }

  return { success: true, message: "Appointment request received!" }
}