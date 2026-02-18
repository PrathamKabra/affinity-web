import Image from "next/image";
import Link from "next/link";
import { services } from "./data/services";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION - Light Gradient */}
      <section className="relative bg-white border-b border-gray-200 py-24 sm:py-32 overflow-hidden">
        {/* Subtle Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
            Advanced Imaging.<br />
            <span className="text-blue-600">Clinical Precision.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-600 max-w-5xl mx-auto mb-10 leading-8 text-balance">
            State-of-the-art diagnostic sonography services delivered with compassionate care. <br />
            Specializing in Abdominal, OB/GYN, and Vascular imaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
            >
              Schedule Appointment
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border border-gray-200 hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              
              {/* Image Container - Light Gray Background */}
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="bg-blue-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Why Patients Trust <span className="text-blue-600">Affinity</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Same-Day Reports</h3>
                    <p className="text-slate-600 mt-1">We understand the anxiety of waiting. Get your diagnostic reports delivered digitally within hours of your scan.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Certified Radiologists</h3>
                    <p className="text-slate-600 mt-1">All scans are performed by licensed sonographers and reviewed by board-certified specialists.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Hospital-Grade Tech</h3>
                    <p className="text-slate-600 mt-1">We utilize the latest GE and Philips ultrasound systems for crystal-clear imaging resolution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual/Stats Block */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-black text-blue-600 mb-2">5k+</div>
                  <div className="text-sm font-bold text-slate-700">Patients Scanned</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-black text-blue-600 mb-2">5+</div>
                  <div className="text-sm font-bold text-slate-700">Years Experience</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-black text-blue-600 mb-2">5</div>
                  <div className="text-sm font-bold text-slate-700">Google Rating</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-black text-blue-600 mb-2">24h</div>
                  <div className="text-sm font-bold text-slate-700">Turnaround Time</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 2. Add FAQ Section Here */}
      <Faq />
    </div>
  );
}