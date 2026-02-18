'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

// 1. Define a strict schema for your data
const BookingSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(50),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid 10-digit phone number"),
  service: z.string().min(1, "Please select a service"),
  notes: z.string().max(500).optional(),
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitBooking(formData: FormData) {
  // 2. Extract and Validate
  const rawData = Object.fromEntries(formData.entries())
  const validatedFields = BookingSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return { 
      success: false, 
      error: validatedFields.error.flatten().fieldErrors 
    }
  }

  // 3. Insert into Supabase
  const { error } = await supabase
    .from('bookings')
    .insert([validatedFields.data])

  if (error) {
    console.error('Supabase Error:', error.message)
    return { success: false, error: "Database connection failed" }
  }

  return { success: true }
}