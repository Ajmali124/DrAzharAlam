'use client';
import { Menu, Phone, Stethoscope, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#booking', label: 'Appointment' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-[64px] sm:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-dark leading-tight">Dr. Azhar Alam</p>
              <p className="text-[11px] text-primary font-medium">Consultant Surgeon</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium text-gray-600 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a href="tel:+923320761997" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors">
              <Phone className="w-3.5 h-3.5" /> 0332-0761997
            </a>
            <a href="#booking" className="hidden sm:block ml-3 px-4 py-2 rounded-lg bg-primary text-white text-[13px] font-semibold hover:bg-primary-dark transition-colors">
              Book Now
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-700" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 space-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-[14px] font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex gap-2">
              <a href="tel:+923320761997" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-700">
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a href="#booking" onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-lg bg-primary text-white text-[13px] font-semibold text-center">
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
