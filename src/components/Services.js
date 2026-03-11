'use client';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  {
    title: 'Laparoscopic Surgery',
    tagline: 'Minimally Invasive',
    image: 'https://dr-azhar-alam.vercel.app/Vedio/Laparoscopic%20Surgery.png',
    accent: '#0C6478',
    accentLight: 'rgba(12,100,120,0.12)',
    services: [
      'Diagnostic & Operative Laparoscopy',
      'Laparoscopic Hernia Repair',
      'Laparoscopic Appendectomy',
      'Laparoscopic Cholecystectomy',
      'Gallbladder Removal',
      'Laparoscopic Tubal Ligation',
      'General Laparoscopic Surgery',
    ],
  },
  {
    title: 'Breast Surgery',
    tagline: 'Oncological & Cosmetic',
    image: 'https://icons.exarpro.com/Vedio/Breast%20Surgery.png',
    accent: '#be185d',
    accentLight: 'rgba(190,24,93,0.12)',
    services: [
      'Breast Cancer Surgery',
      'Breast Cosmetic Surgery',
      'Benign Breast Disease',
      'Mastectomy',
      'Modified Radical Mastectomy',
      'All Breast Related Issues',
    ],
  },
  {
    title: 'Hernia Repair',
    tagline: 'Open & Laparoscopic',
    image: 'https://icons.exarpro.com/Vedio/Hernia.png',
    accent: '#1d4ed8',
    accentLight: 'rgba(29,78,216,0.12)',
    services: [
      'Hernia Repair Surgery',
      'Inguinal Hernia Repairs',
      'Abdominal Wall Hernia Repair',
      'Laparoscopic Hernia Repair',
    ],
  },
  {
    title: 'Proctology & LASER',
    tagline: 'Piles, Fissure, Fistula',
    image: 'https://icons.exarpro.com/Vedio/Proctology%20LASER.png',
    accent: '#065f46',
    accentLight: 'rgba(6,95,70,0.12)',
    services: [
      'LASER Piles Treatment',
      'Haemorrhoidectomy',
      'Anal Fissure & Fistula Surgery',
      'Fistula Repair',
      'Pilonidal Sinus Surgery',
      'Colorectal Surgery',
    ],
  },
  {
    title: 'Abdominal Surgery',
    tagline: 'Comprehensive Care',
    image: 'https://icons.exarpro.com/Vedio/Abdominal%20Surgery.png',
    accent: '#92400e',
    accentLight: 'rgba(146,64,14,0.12)',
    services: [
      'Acute Abdomen Surgery',
      'Appendectomy',
      'Intestinal Surgery',
      'Partial Colectomy',
      'Ileostomy Colostomy',
      'Stoma Reversal',
      'Gall Bladder Surgery',
    ],
  },
  {
    title: 'Specialized',
    tagline: 'Thyroid · Bariatric · Vascular',
    image: 'https://icons.exarpro.com/Vedio/Speacial.png',
    accent: '#6d28d9',
    accentLight: 'rgba(109,40,217,0.12)',
    services: [
      'Thyroid & Parathyroid Surgery',
      'Thyroidectomy',
      'Bariatric / Obesity Surgery',
      'Varicose Veins Surgery',
      'Varicocele & Hydrocele',
      'Cancer Surgery',
      'Diabetic Foot Surgery',
      'Lipomas & Lymph Node Excision',
    ],
  },
];

/* ─── Sticky stack offset per card on mobile ─── */
const STICKY_TOP_BASE = 72; // px — below nav
const STICKY_OFFSET = 14;   // px — each card peeks this much above the one on top

function ServiceCard({ cat, index, total }) {
  const [expanded, setExpanded] = useState(false);
  const preview = cat.services.slice(0, 3);
  const rest = cat.services.slice(3);

  /* z-index increases so later cards sit on top; scale shrinks slightly */
  const zIndex = index + 1;
  const stickyTop = STICKY_TOP_BASE + index * STICKY_OFFSET;

  return (
    <div
      className="group relative rounded-3xl overflow-hidden bg-white
                 shadow-[0_4px_24px_rgba(0,0,0,0.09)]
                 hover:shadow-[0_8px_40px_rgba(0,0,0,0.14)]
                 transition-shadow duration-300
                 /* mobile sticky */ max-sm:sticky"
      style={{
        /* Mobile: sticky stacking */
        ['--sticky-top']: `${stickyTop}px`,
        zIndex,
      }}
    >
      {/* ── Image ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(8,12,26,0.88) 0%, rgba(8,12,26,0.38) 55%, transparent 100%)',
          }}
        />
        {/* Tagline pill */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md"
            style={{
              background: cat.accentLight,
              color: cat.accent,
              border: `1px solid ${cat.accent}50`,
            }}
          >
            {cat.tagline}
          </span>
        </div>
        {/* Count pill */}
        <div className="absolute top-3 right-3">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
            {cat.services.length} procedures
          </span>
        </div>
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <h3
            className="text-[18px] font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cat.title}
          </h3>
        </div>
      </div>

      {/* ── Procedure list ── */}
      <div className="px-4 pt-3 pb-1">
        {preview.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-2.5 border-b border-gray-100 last:border-0"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: cat.accent }}
            />
            <span className="text-[13px] text-gray-600 leading-snug">{s}</span>
          </div>
        ))}

        {/* Expandable rest */}
        <div
          style={{
            maxHeight: expanded ? `${rest.length * 46}px` : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {rest.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-2.5 border-b border-gray-100 last:border-0"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: cat.accent }}
              />
              <span className="text-[13px] text-gray-600 leading-snug">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Toggle button ── */}
      {rest.length > 0 && (
        <div className="px-4 pb-4 pt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-200 active:scale-[0.97]"
            style={{
              background: '#0a0f1a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            }}
          >
            {expanded ? 'Show less' : `See all ${cat.services.length} procedures`}
            <ChevronDown
              className="w-3.5 h-3.5 transition-transform duration-300"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="section-label">Surgical Expertise</p>
          <h2 className="section-title">
            47+ Procedures,
            <br className="sm:hidden" /> 6 Specialties
          </h2>
          <p className="section-desc mx-auto">
            From minimally invasive laparoscopic surgeries to advanced LASER treatments —
            comprehensive surgical care under one roof.
          </p>
        </div>

        {/*
          ── MOBILE: single column, cards are position:sticky so they stack ──
          ── DESKTOP: standard 2-col / 3-col grid ──

          We use a wrapper <div> per card that controls sticky on mobile.
          The outer stack div needs enough height for the sticky effect to work.
        */}

        {/* Mobile stack container — only visible < sm */}
        <div className="sm:hidden flex flex-col">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="sticky mb-4"
              style={{ top: `${STICKY_TOP_BASE + i * STICKY_OFFSET}px`, zIndex: i + 1 }}
            >
              <ServiceCard cat={cat} index={i} total={categories.length} />
            </div>
          ))}
          {/* Spacer so last card can scroll fully into view */}
          <div style={{ height: `${categories.length * STICKY_OFFSET + 40}px` }} />
        </div>

        {/* Desktop grid — only visible ≥ sm */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <ServiceCard key={i} cat={cat} index={i} total={categories.length} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 text-center mt-10"
          style={{
            background: 'linear-gradient(135deg, #0C6478 0%, #065f46 100%)',
          }}
        >
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-white/5" />
          <div className="absolute -bottom-14 -right-8 w-56 h-56 rounded-full bg-white/5" />
          <div className="relative z-10">
            <p className="text-white/70 text-[12px] font-semibold uppercase tracking-widest mb-2">
              Not sure which service you need?
            </p>
            <p
              className="text-white text-[20px] sm:text-[24px] font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get a Free Consultation in Minutes
            </p>
            <a
              href="https://wa.me/923320761997?text=Assalam%20o%20Alaikum%2C%20I%20need%20consultation%20regarding%20my%20condition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#25D366] text-white text-[14px] font-bold hover:bg-[#20BD5A] transition-colors shadow-lg shadow-black/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Dr. Azhar Alam
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
