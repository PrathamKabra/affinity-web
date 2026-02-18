"use client";

import { useState } from 'react';
import { submitBooking } from '../app/actions'; // Relative path to avoid alias errors

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    await submitBooking(formData);
    
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Sent!</h3>
        <p className="text-slate-600 mb-6 text-balance">
          Our team will call you at the provided number within 2 hours to confirm your appointment slot.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sm font-bold text-blue-600 hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Patient Name</label>
          <input name="name" type="text" required placeholder="Full Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Phone Number</label>
          <input name="phone" type="tel" required placeholder="+91-0000000000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Requested Service</label>
        <select name="service" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all">
          <option>Abdominal Sonography</option>
          <option>OB/GYN Imaging</option>
          <option>Vascular Doppler</option>
          <option>Thyroid / Neck Scan</option>
          <option>Other Consultation</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Preferred Time / Special Notes</label>
        <textarea name="notes" rows={4} placeholder="e.g., Requesting morning slot between 10 AM - 12 PM..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-blue-200"
      >
        {status === 'submitting' ? 'PROCESSING...' : 'CONFIRM APPOINTMENT REQUEST'}
      </button>
    </form>
  );
}