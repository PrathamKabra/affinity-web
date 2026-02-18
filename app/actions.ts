'use server'

export async function submitBooking(formData: FormData) {
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    notes: formData.get('notes'),
    timestamp: new Date().toISOString(),
  };

  // Log to terminal for verification
  console.log('--- NEW APPOINTMENT REQUEST ---');
  console.log(data);

  // Artificial delay for UI feedback
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}