'use client';
import { motion, useInView } from 'framer-motion';
import { Award, BadgeCheck, Clock, GraduationCap, MapPin, Star, Stethoscope, Zap } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

// ─── Animation variants ────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Data ──────────────────────────────────────────────────────────
const stats = [
  { value: '15+', label: 'Years\nExperience' },
  { value: '4.9', label: 'Google\nRating', accent: true },
  { value: '222+', label: 'Patient\nReviews' },
  { value: '5K+', label: 'Surgeries\nPerformed' },
];

const credentials = [
  {
    icon: GraduationCap,
    color: '#0C6478',
    bg: 'rgba(12,100,120,0.08)',
    title: 'MBBS',
    subtitle: 'University of Health Sciences, Lahore',
  },
  {
    icon: Award,
    color: '#E8A838',
    bg: 'rgba(232,168,56,0.08)',
    title: 'MS — General Surgery',
    subtitle: 'University of Health Sciences, Lahore',
  },
];

const highlights = [
  { icon: Zap,         text: 'LASER Surgery Expert' },
  { icon: Stethoscope, text: 'Laparoscopic Specialist' },
  { icon: MapPin,      text: 'Noor Hospital, Lahore' },
  { icon: Clock,       text: 'Mon – Sat · 5 – 7 PM' },
  { icon: BadgeCheck,  text: 'Trusted by 5,000+ Patients' },
  { icon: Star,        text: '4.9 ★ Google Verified' },
];

// ─── Component ─────────────────────────────────────────────────────
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-alt overflow-hidden">
      <div className="container-custom" ref={ref}>

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
        >
          <motion.p variants={fadeUp} className="section-label">About the Doctor</motion.p>
          <motion.h2
            variants={fadeUp}
            className="section-title"
          >
            Meet Dr.{' '}
            <span style={{ color: '#0C6478' }}>Azhar Alam</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-desc mx-auto">
            A compassionate surgeon delivering precision, safety, and excellence through modern minimally invasive techniques.
          </motion.p>
        </motion.div>

        {/* ── Main grid ── */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
        >

          {/* ══ LEFT — Photo + floating cards ══ */}
          <motion.div variants={scaleIn} className="relative flex justify-center">

            {/* Photo */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[400px] rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 24px 80px -12px rgba(12,100,120,0.25), 0 4px 24px rgba(0,0,0,0.08)',
                aspectRatio: '3/4',
              }}
            >
              <Image
                src="/Vedio/about.png"
                alt="Dr. Muhammad Azhar Alam — Consultant Surgeon"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.4) 35%, transparent 65%)',
                }}
              />

              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-[18px] sm:text-[20px] leading-tight mb-1">
                  Dr. Muhammad Azhar Alam
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', letterSpacing: '0.03em' }}>
                  MBBS · MS (General Surgery)
                </p>
                {/* <div
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{ background: 'rgba(12,100,120,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(34,201,232,0.25)' }}
                >
                  {/* <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  <span className="text-white text-[11px] font-semibold tracking-wide">
                    Accepting Patients
                  </span> */}
                {/* </div> */} 
              </div>
            </div>

            {/* Floating stat badge – top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.55, type: 'spring', stiffness: 220, damping: 20 }}
              className="hidden sm:flex absolute -right-6 top-10 flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl"
              style={{
                background: '#0C6478',
                boxShadow: '0 12px 40px rgba(12,100,120,0.4)',
              }}
            >
              <p className="text-white font-bold text-[26px] leading-none">15+</p>
              <p className="text-white/70 text-[10px] font-semibold text-center leading-tight mt-1">Years Exp.</p>
            </motion.div>

            {/* Floating rating badge – bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 22 }}
              className="hidden sm:flex absolute -left-6 bottom-[30%] items-center gap-2.5 px-4 py-3 rounded-2xl"
              style={{
                background: '#fff',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(232,168,56,0.12)' }}
              >
                <Star className="w-4 h-4" style={{ color: '#E8A838', fill: '#E8A838' }} />
              </div>
              <div>
                <p className="font-bold text-[18px] leading-none" style={{ color: '#0F172A' }}>4.9</p>
                <p className="text-[10px] font-medium" style={{ color: '#94A3B8' }}>222+ Reviews</p>
              </div>
            </motion.div>

          </motion.div>

          {/* ══ RIGHT — Content ══ */}
          <div className="flex flex-col gap-6">

            {/* Bio */}
            <motion.div variants={fadeUp}>
              <p className="text-[15px] leading-relaxed mb-3" style={{ color: '#475569' }}>
                Dr. Muhammad Azhar Alam is a highly experienced{' '}
                <strong style={{ color: '#0F172A' }}>Consultant General & Laparoscopic Surgeon</strong>{' '}
                with over <strong style={{ color: '#0F172A' }}>15 years of surgical practice</strong> at Noor Hospital, Lahore.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#475569' }}>
                He specializes in <strong style={{ color: '#0F172A' }}>LASER and Minimally Invasive Surgery</strong>,
                delivering procedures that reduce recovery time and maximize patient outcomes. Known for his
                compassionate bedside manner, he has earned a remarkable{' '}
                <strong style={{ color: '#E8A838' }}>4.9-star</strong> rating from 222+ verified Google reviews.
              </p>
            </motion.div>

            {/* Stats row — mobile compact */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-4 gap-2 sm:gap-3"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-3 sm:py-4 rounded-2xl"
                  style={{
                    background: s.accent ? '#0C6478' : '#fff',
                    boxShadow: s.accent
                      ? '0 8px 28px rgba(12,100,120,0.28)'
                      : '0 2px 16px rgba(0,0,0,0.06)',
                    border: s.accent ? 'none' : '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  <p
                    className="font-bold text-[18px] sm:text-[22px] leading-none"
                    style={{ color: s.accent ? '#fff' : '#0C6478' }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[9px] sm:text-[10px] font-semibold text-center leading-tight mt-1"
                    style={{
                      color: s.accent ? 'rgba(255,255,255,0.75)' : '#94A3B8',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
              <p
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: '#94A3B8' }}
              >
                Qualifications
              </p>
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.bg }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[13px] sm:text-[14px] truncate" style={{ color: '#0F172A' }}>
                      {c.title}
                    </p>
                    <p className="text-[11px] sm:text-[12px] truncate" style={{ color: '#94A3B8' }}>
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Highlights grid */}
            <motion.div variants={fadeUp}>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-3"
                style={{ color: '#94A3B8' }}
              >
                Specialties & Details
              </p>
              <div className="grid grid-cols-2 gap-2">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                    style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)' }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(12,100,120,0.08)' }}
                    >
                      <h.icon className="w-3.5 h-3.5" style={{ color: '#0C6478' }} />
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-medium leading-tight" style={{ color: '#334155' }}>
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex gap-3 pt-1">
              <a
                href="#booking"
                className="flex-1 flex items-center justify-center h-12 rounded-2xl text-white font-bold text-[14px] tracking-wide transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #0C6478, #0E8098)',
                  boxShadow: '0 8px 28px rgba(12,100,120,0.35)',
                }}
              >
                Book a Consultation
              </a>
              <a
                href="https://wa.me/923320761997?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-200 active:scale-[0.97] shrink-0"
                style={{
                  background: 'rgba(37,211,102,0.1)',
                  border: '1.5px solid rgba(37,211,102,0.35)',
                }}
              >
                {/* WhatsApp icon inline SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
