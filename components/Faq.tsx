"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "Do I need to drink water before my scan?",
    answer: "For Abdominal and Pelvic scans, a full bladder is often required to get clear images. We recommend drinking 1 liter of water 1 hour before your appointment. For other scans, no prep is needed."
  },
  {
    question: "How long does a typical ultrasound take?",
    answer: "Most diagnostic sessions last between 15 to 30 minutes. Complex vascular studies may take up to 45 minutes. We respect your time and aim to stay strictly on schedule."
  },
  {
    question: "Is the procedure painful?",
    answer: "No. Ultrasound is a non-invasive, painless procedure. It uses sound waves to create images. You may feel slight pressure from the transducer probe, but there is no radiation or pain involved."
  },
  {
    question: "When will I get my report?",
    answer: "We provide immediate digital reports in most cases. A printed summary and high-resolution film are provided within 24 hours (or instantly for emergency cases)."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600">Common questions about your visit and preparation.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-blue-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                {faq.question}
              </span>
              <span className={`transform transition-transform duration-200 text-blue-500 font-bold text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}