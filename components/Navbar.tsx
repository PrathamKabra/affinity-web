"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36"> 
          
          {/* Logo & Text Block */}
          <Link href="/" className="flex items-center gap-6 group">
            <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.3)] border-2 border-transparent group-hover:border-blue-600/80 group-hover:shadow-[0_4px_25px_rgba(37,99,235,0.6)] transition-all duration-300">
              <Image 
                src="/logo.jpg" 
                alt="Affinity Diagnostics Logo" 
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-black text-slate-900 tracking-wide uppercase leading-none">
                Affinity Diagnostics
              </h1>
              <span className="text-lg md:text-2xl font-medium text-blue-600 tracking-normal mt-1.5">
                & Sonography Center
              </span>
              <p className="text-sm md:text-base text-gray-600 font-medium mt-1 tracking-wide">
                Precision Imaging, Trusted Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
            >
              Services
            </Link>
            
            {/* Added Contact Us Button */}
            <Link 
              href="/contact" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all duration-200"
            >
              Contact Us
            </Link>

            <Link 
              href="/booking" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:scale-105 transition-all duration-200"
            >
              Book Scan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-4 pb-8 space-y-4">
            <Link 
              href="/" 
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            {/* Added Mobile Contact Link */}
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-xl text-center hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link 
              href="/booking" 
              className="block px-4 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl text-center shadow-lg hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Scan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}