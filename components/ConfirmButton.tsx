"use client";

import { useTransition } from "react";
import { updateBookingStatus } from "@/app/actions";

export default function ConfirmButton({ bookingId, currentStatus }: { bookingId: number, currentStatus: string }) {
  const [isPending, startTransition] = useTransition();

  // Convert status to lowercase for a foolproof check
  const isConfirmed = currentStatus?.toLowerCase() === 'confirmed';

  if (isConfirmed) {
    return (
      <div className="bg-green-600 text-white px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-green-200">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
        Confirmed
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
      className="px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 uppercase tracking-widest shadow-md shadow-blue-200"
    >
      {isPending ? 'Updating...' : 'Confirm Appointment'}
    </button>
  );
}