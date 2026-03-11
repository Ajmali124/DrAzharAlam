'use client';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '15+', label: 'Years Exp.' },
    { value: '4.9', label: 'Google Rating', accent: true },
    { value: '222+', label: 'Happy Patients' },
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden bg-dark">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/Vedio/HeroMobile.png"
        className="absolute inset-0 w-full h-full object-cover object-[65%_25%] sm:object-center"
      >
        <source src="/Vedio/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/30 hidden sm:block" />
      
      {/* Mobile overlays: left panel darkens text area, bottom up darkens ticker/CTA zone */}
      {/* Layer 1: left-to-right — strong left where text is, fully transparent on right so doctor is clear */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background: 'linear-gradient(100deg, rgba(4,10,24,0.85) 0%, rgba(4,10,24,0.65) 38%, rgba(4,10,24,0.15) 60%, rgba(4,10,24,0) 75%)'
        }}
      />
      {/* Layer 2: bottom-up — ensures ticker strip and CTA always readable */ }
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background: 'linear-gradient(to top, rgba(4,10,24,0.97) 0%, rgba(4,10,24,0.7) 18%, rgba(4,10,24,0) 38%)'
        }}
      />

      {/* Desktop-only subtle glow */}
      <div className="hidden sm:block absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />


      {/* ======================== MOBILE LAYOUT ======================== */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track { animation: ticker 22s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      {/* TOP CONTENT BLOCK */}
      <motion.div
        className="sm:hidden absolute top-24 left-2 right-0 z-20 ml-2 pr-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Live indicator */}
        {/* <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span style={{
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em',
            color: '#22c9e8', textTransform: 'uppercase',
            textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)'
          }}>
            Now Accepting Patients
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-white"
          style={{
            fontSize: '34px', lineHeight: 1.06, letterSpacing: '-0.02em',
            marginBottom: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.8), 0 0 48px rgba(0,0,0,0.6)'
          }}
        >
          Minimally Invasive.<br />Maximum Care.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="font-medium"
          style={{
            fontSize: '12px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)',
            marginBottom: '22px',
            textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.8)'
          }}
        >
          Advanced LASER &amp; Minimally Invasive Techniques
        </motion.p>

        {/* Doctor identity */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col mr-1"
          style={{ borderLeft: '2px solid #0E8098', paddingLeft: '12px' }}
        >
          <h2 className="font-bold text-white" style={{
            fontSize: '16px', lineHeight: 1.3, letterSpacing: '-0.01em',
            marginBottom: '6px',
            textShadow: '0 2px 8px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.8)'
          }}>
            Dr. Muhammad Azhar Alam
          </h2>
          <p className="font-bold uppercase" style={{
            fontSize: '9.5px', letterSpacing: '0.18em', color: '#22c9e8',
            marginBottom: '5px',
            textShadow: '0 2px 8px rgba(0,0,0,0.95)'
          }}>
            MBBS · MS General Surgery
          </p>
          <p className="font-medium" style={{
            fontSize: '11.5px', color: 'rgba(255,255,255,0.65)',
            textShadow: '0 2px 8px rgba(0,0,0,0.95)'
          }}>
            Consultant General &amp; Laparoscopic Surgeon
          </p>
        </motion.div>

        {/* Stats row — glass chips, no opaque background */}
        
      </motion.div>

      {/* ── PROCEDURE TICKER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="sm:hidden absolute z-30 left-0 right-0 overflow-hidden"
        style={{ bottom: '88px', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(4,12,28,0.65)', backdropFilter: 'blur(8px)' }}
      >
        <div className="ticker-track flex items-center gap-0 py-2" style={{ width: 'max-content' }}>
          {[
            'Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Removal',
            'Appendectomy', 'Haemorrhoids', 'Pilonidal Sinus',
            'Thyroid Surgery', 'Varicose Veins', 'Fissure Treatment',
            'Lipoma Removal', 'LASER Surgery', 'Circumcision',
            // duplicate for seamless loop
            'Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Removal',
            'Appendectomy', 'Haemorrhoids', 'Pilonidal Sinus',
            'Thyroid Surgery', 'Varicose Veins', 'Fissure Treatment',
            'Lipoma Removal', 'LASER Surgery', 'Circumcision',
          ].map((proc, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="text-white/80 text-[11px] font-semibold tracking-wide whitespace-nowrap">{proc}</span>
              <span className="text-primary-light/60 text-[8px]">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Floating CTA — black, sharp, confident */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 25 }}
        className="sm:hidden absolute bottom-5 left-5 right-5 z-50 flex gap-3"
      >
        <a
          href="#booking"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-sm text-white text-[14px] font-bold tracking-[0.06em] active:scale-[0.98] transition-all"
          style={{
            background: '#0a0f1a',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 0 1px rgba(12,100,120,0.3), 0 8px 32px -4px rgba(0,0,0,0.6)'
          }}
        >
          Book Consultation
        </a>
        <a
          href="tel:+923320761997"
          className="flex items-center justify-center w-12 h-12 rounded-sm active:scale-[0.98] transition-all"
          style={{
            background: 'rgba(12,100,120,0.85)',
            border: '1px solid rgba(34,201,232,0.3)',
          }}
        >
          <Phone className="w-4 h-4 text-white" />
        </a>
      </motion.div>


      {/* ======================== DESKTOP LAYOUT ======================== */}
      <div className="hidden sm:flex flex-col flex-1 justify-center relative z-10 min-h-[100svh]">
        <div className="container-custom py-20">
          <motion.div 
            className="max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[13px] font-semibold tracking-wide uppercase mb-6"
            >
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Accepting New Patients
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[56px] lg:text-[72px] font-bold text-white leading-[1.05] mb-4"
            >
              Dr. Muhammad<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-300">
                Azhar Alam
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-[20px] lg:text-[22px] font-medium text-white/90 mb-4"
            >
              Consultant General & Laparoscopic Surgeon
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[16px] text-white/60 mb-10 max-w-lg leading-relaxed"
            >
              Specializing in LASER and Minimal Invasive Surgery with over 15+ years of delivering precision, safety, and excellence.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 mb-10"
            >
              {stats.map((s, i) => (
                <div key={i} className="flex-1 max-w-[160px] px-6 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-lg border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <p className="text-[28px] font-bold text-white leading-none mb-2 flex items-center gap-1">
                    {s.value}
                    {s.accent && <span className="text-accent text-[14px]">★</span>}
                  </p>
                  <p className="text-[12px] text-white/50 font-medium tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 mb-10"
            >
              <a
                href="#booking"
                className="group flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white text-[16px] font-bold tracking-wide shadow-[0_0_30px_-5px_rgba(12,100,120,0.4)] hover:shadow-[0_0_40px_-5px_rgba(12,100,120,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                Book Consultation <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/923320761997?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[16px] font-bold tracking-wide hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-white/50 font-medium"
            >
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40" /> Noor Hospital, Ferozepur Road</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-white/40" /> Mon–Sat · 5:00 – 7:00 PM</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
