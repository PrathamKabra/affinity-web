"use client";

import { useTransition } from "react";
import { updateBookingStatus } from "@/app/actions";

export default function ConfirmButton({ bookingId, currentStatus }: { bookingId: string | number; currentStatus: string }) {
  const [isPending, startTransition] = useTransition();

  if (currentStatus === 'confirmed') {
    return (
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        <span className="text-[10px] font-bold text-green-600 uppercase">Confirmed</span>
      </span>
    );
  }

  return (
    <button
      onClick={() => startTransition(() => void updateBookingStatus(bookingId, 'confirmed'))}
      disabled={isPending}
      className="px-4 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 uppercase tracking-tighter"
    >
      {isPending ? 'Updating...' : 'Confirm'}
    </button>
  );
}