"use client";

import { useActionState } from 'react';
import { submitBooking } from '../actions';

export default function BookingForm() {
  // state will hold our success/error messages from the server
  const [state, formAction, isPending] = useActionState(submitBooking, { 
    message: null, 
    errors: {} 
  });

  if (state.success) {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center animate-in fade-in">
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Sent!</h3>
        <p className="text-slate-600">We will call you shortly to confirm.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Patient Name</label>
        <input 
          name="name" 
          type="text" 
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all ${state.errors?.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:ring-2 focus:ring-blue-600'}`} 
          placeholder="Full Name" 
        />
        {/* Render Name Error */}
        {state.errors?.name && (
          <p className="mt-1 text-xs font-bold text-red-600 animate-in slide-in-from-top-1">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Phone Number</label>
        <input 
          name="phone" 
          type="tel" 
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all ${state.errors?.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:ring-2 focus:ring-blue-600'}`} 
          placeholder="10-digit Mobile" 
        />
        {/* Render Phone Error */}
        {state.errors?.phone && (
          <p className="mt-1 text-xs font-bold text-red-600">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      {/* Global error message (like Database issues) */}
      {state.message && !state.success && (
        <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg text-center">
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-50"
      >
        {isPending ? 'VALIDATING...' : 'CONFIRM APPOINTMENT REQUEST'}
      </button>
    </form>
  );
}