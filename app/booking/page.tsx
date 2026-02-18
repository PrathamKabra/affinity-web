import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">
              Precision Care <br/>
              <span className="text-blue-600 italic">Starts Here</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-md">
              Secure your diagnostic appointment today. We use high-resolution ultrasound technology to provide accurate results.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl">📍</div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">Clinic Location</h4>
                  <p className="text-slate-500 text-sm">Shop No 2, Salasar Market, Pushkar, Rajasthan</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl">📞</div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">Direct Line</h4>
                  <p className="text-slate-500 text-sm">+91-9785544332</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-2 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
              <div className="bg-white p-8 md:p-12 rounded-[1.8rem] border border-slate-50">
                <BookingForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}