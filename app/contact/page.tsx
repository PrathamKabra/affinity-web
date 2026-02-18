export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-slate-50 py-20 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            Contact <span className="text-blue-600 italic">Affinity</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find us in Pushkar for high-resolution imaging. Reach out directly for emergency scans or clinical inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Detailed Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Our Location</h2>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Clinic Address</p>
                    <p className="text-slate-600 leading-relaxed">Shop No 2, Salasar Market, Badi Basti, Pushkar, Ajmer, Rajasthan 305001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Phone Number</p>
                    <p className="text-slate-600 font-bold text-xl">+91-9785544332</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold mb-2">Emergency Scans?</h3>
              <p className="opacity-90 mb-6 text-sm">For urgent diagnostic requirements or same-day reports, please call our direct line immediately.</p>
              <a href="tel:+919785544332" className="inline-block px-6 py-3 bg-white text-blue-600 rounded-xl font-black uppercase text-sm tracking-widest">Call Now</a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.6231904791016!2d74.5513284!3d26.4839886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be17d48a3270b%3A0x299e95956ddee18d!2sAffinity%20diagnostics!5e0!3m2!1sen!2sin!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Section: Medical Experts */}
        <div className="border-t border-slate-100 pt-20">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Our Medical Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex gap-6 items-center">
              <div className="w-24 h-24 rounded-2xl bg-slate-200 shrink-0"></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 uppercase leading-none mb-2">Medical Director</h4>
                <p className="text-blue-600 font-bold mb-2">Specialist Radiologist</p>
                <p className="text-sm text-slate-500">Expert in Abdominal and Vascular Imaging with a focus on clinical accuracy.</p>
              </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex gap-6 items-center">
              <div className="w-24 h-24 rounded-2xl bg-slate-200 shrink-0"></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 uppercase leading-none mb-2">Lead Sonographer</h4>
                <p className="text-blue-600 font-bold mb-2">OB/GYN Specialist</p>
                <p className="text-sm text-slate-500">Dedicated to compassionate prenatal care and precise diagnostic screening.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}