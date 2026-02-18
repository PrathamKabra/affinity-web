import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Branding Section */}
          <div className="flex flex-col items-start gap-4">
            <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.15)] border-2 border-blue-600/30">
              <Image 
                src="/logo.jpg" 
                alt="Affinity Diagnostics Logo" 
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                Affinity Diagnostics <br/>
                <span className="text-blue-600 text-lg">& Sonography Center</span>
              </h3>
              <p className="text-base leading-relaxed max-w-xs text-gray-500">
                Providing high-resolution diagnostic sonography services with a focus on patient care and clinical precision.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold text-slate-800 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors font-bold text-blue-600">Contact Us</Link></li>
              <li><Link href="/booking" className="hover:text-blue-600 transition-colors">Book Appointment</Link></li>
              <li><span className="text-gray-400 cursor-not-allowed">Patient Portal (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold text-slate-800 mb-4">Contact</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span> 
                <span className="leading-tight">Shop No 2, Salasar Market, Badi Basti, Pushkar, Ajmer, Rajasthan 305001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span> 
                <span className="font-bold text-slate-900">+91-9785544332</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📧</span> 
                <span>contact@affinitydiagnostics.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Affinity Diagnostics & Sonography Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}