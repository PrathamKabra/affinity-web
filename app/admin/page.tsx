import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'; // Ensures data is fresh on every visit

export default async function AdminDashboard() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // Fetch all bookings from the 'bookings' table
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-black text-slate-900 uppercase">Patient Bookings</h1>
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
            {bookings?.length} Total
          </span>
        </header>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings?.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-xs text-slate-400">
                    {new Date(booking.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">{booking.name}</td>
                  <td className="px-6 py-4 text-slate-600">{booking.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase">
                      {booking.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block mr-2 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Pending</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}