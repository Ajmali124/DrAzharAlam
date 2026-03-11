'use client';
import { Activity, Bone, ChevronDown, Heart, MessageCircle, Scissors, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';

const categories = [
  {
    icon: Sparkles, title: 'Laparoscopic Surgery', tagline: 'Minimally Invasive',
    color: 'bg-teal-500', colorLight: 'bg-teal-50 text-teal-700',
    services: ['Diagnostic & Operative Laparoscopy', 'Laparoscopic Hernia Repair', 'Laparoscopic Appendectomy',
      'Laparoscopic Cholecystectomy', 'Gallbladder Removal', 'Laparoscopic Tubal Ligation', 'General Laparoscopic Surgery'],
  },
  {
    icon: Heart, title: 'Breast Surgery', tagline: 'Oncological & Cosmetic',
    color: 'bg-rose-500', colorLight: 'bg-rose-50 text-rose-700',
    services: ['Breast Cancer Surgery', 'Breast Cosmetic Surgery', 'Benign Breast Disease', 'Mastectomy',
      'Modified Radical Mastectomy', 'All Breast Related Issues'],
  },
  {
    icon: Shield, title: 'Hernia Repair', tagline: 'Open & Laparoscopic',
    color: 'bg-blue-500', colorLight: 'bg-blue-50 text-blue-700',
    services: ['Hernia Repair Surgery', 'Inguinal Hernia Repairs', 'Abdominal Wall Hernia Repair', 'Laparoscopic Hernia Repair'],
  },
  {
    icon: Activity, title: 'Proctology & LASER', tagline: 'Piles, Fissure, Fistula',
    color: 'bg-emerald-500', colorLight: 'bg-emerald-50 text-emerald-700',
    services: ['LASER Piles Treatment', 'Haemorrhoidectomy', 'Anal Fissure & Fistula Surgery', 'Fistula Repair',
      'Pilonidal Sinus Surgery', 'Colorectal Surgery'],
  },
  {
    icon: Bone, title: 'Abdominal Surgery', tagline: 'Comprehensive Care',
    color: 'bg-amber-500', colorLight: 'bg-amber-50 text-amber-700',
    services: ['Acute Abdomen Surgery', 'Appendectomy', 'Intestinal Surgery', 'Partial Colectomy',
      'Ileostomy Colostomy', 'Stoma Reversal', 'Gall Bladder Surgery'],
  },
  {
    icon: Scissors, title: 'Specialized', tagline: 'Thyroid, Bariatric, Vascular',
    color: 'bg-purple-500', colorLight: 'bg-purple-50 text-purple-700',
    services: ['Thyroid & Parathyroid Surgery', 'Thyroidectomy', 'Bariatric / Obesity Surgery',
      'Varicose Veins Surgery', 'Varicocele & Hydrocele', 'Cancer Surgery', 'Diabetic Foot Surgery',
      'Lipomas & Lymph Node Excision'],
  },
];

function ServiceCard({ cat }) {
  const [expanded, setExpanded] = useState(false);
  const preview = cat.services.slice(0, 3);
  const rest = cat.services.slice(3);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center`}>
            <cat.icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] font-bold text-dark">{cat.title}</h3>
            <p className="text-[11px] text-gray-400">{cat.tagline}</p>
          </div>
          <span className={`text-[11px] font-bold rounded-full px-2.5 py-1 ${cat.colorLight}`}>
            {cat.services.length}
          </span>
        </div>

        {/* Services list */}
        <div className="space-y-2">
          {preview.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full ${cat.color} shrink-0`} />
              {s}
            </div>
          ))}
          {expanded && rest.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full ${cat.color} shrink-0`} />
              {s}
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <button onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-3 text-[12px] font-semibold text-primary hover:text-primary-dark transition-colors">
            {expanded ? 'Show less' : `+${rest.length} more procedures`}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Services</p>
          <h2 className="section-title">47+ Surgical Procedures</h2>
          <p className="section-desc mx-auto">From minimally invasive laparoscopic surgeries to advanced LASER treatments — comprehensive surgical care under one roof</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {categories.map((cat, i) => (
            <ServiceCard key={i} cat={cat} />
          ))}
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-6 sm:p-8">
          <p className="text-[14px] text-gray-500 mb-4">Not sure which service you need?</p>
          <a href="https://wa.me/923320761997?text=Assalam%20o%20Alaikum%2C%20I%20need%20consultation%20regarding%20my%20condition"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#20BD5A] transition-colors">
            <MessageCircle className="w-4 h-4" /> Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
