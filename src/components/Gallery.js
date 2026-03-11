'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/images/doctor-portrait.jpg', alt: 'Dr. Azhar Alam at conference', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/poster-laser.jpg', alt: 'Minimal Invasive Surgery', span: '' },
  { src: '/images/poster-varicose.jpg', alt: 'Varicose veins treatment', span: '' },
  { src: '/images/doctor-clinic.jpg', alt: 'Dr. Azhar with patient', span: '' },
  { src: '/images/poster-laparoscopic.jpg', alt: 'Laparoscopic surgery info', span: '' },
  { src: '/images/poster-pilonidal.jpg', alt: 'Pilonidal sinus info', span: 'sm:col-span-2' },
  { src: '/images/doctor-surgery.jpg', alt: 'Dr. Azhar performing surgery', span: '' },
  { src: '/images/poster-info.jpg', alt: 'Clinic information', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Gallery</p>
          <h2 className="section-title">Inside the Practice</h2>
          <p className="section-desc mx-auto">A glimpse into Dr. Azhar Alam&apos;s practice and professional activities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div key={i} className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => setLightbox(img)}>
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="relative w-full max-w-3xl aspect-[3/4] sm:aspect-video rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
