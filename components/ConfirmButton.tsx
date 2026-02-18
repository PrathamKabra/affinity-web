"use client";

import { useTransition } from "react";
import { updateBookingStatus } from "@/app/actions";

export default function ConfirmButton({ 
  bookingId, 
  currentStatus 
}: { 
  bookingId: number, 
  currentStatus: string 
}) {
  const [isPending, startTransition] = useTransition();

  // If the status is already confirmed, show the Green label
  if (currentStatus === 'confirmed') {
    return (
      <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100 animate-in fade-in zoom-in duration-300">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="text-[10px] font-black text-green-700 uppercase tracking-wider">
          Confirmed
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await updateBookingStatus(bookingId, 'confirmed');
        });
      }}
      disabled={isPending}
      className="px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95 disabled:opacity-50 uppercase tracking-widest"
    >
      {isPending ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-3 w-3 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Updating...
        </span>
      ) : (
        'Confirm Appointment'
      )}
    </button>
  );
}