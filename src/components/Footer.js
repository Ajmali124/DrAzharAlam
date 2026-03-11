import { ExternalLink, Heart, Mail, MapPin, Phone, Stethoscope } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const platforms = [
  { name: 'Marham.pk', url: 'https://www.marham.pk/doctors/lahore/general-surgeon/dr-azhar-alam' },
  { name: 'Oladoc.com', url: 'https://oladoc.com/pakistan/lahore/general-surgeon/dr-azhar-alam' },
  { name: 'Facebook', url: 'https://www.facebook.com/DrAzharAlam786/' },
  { name: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Dr%20Azhar%20Alam&query_place_id=ChIJcXn_J8YHGTkR6GjY_xZVWqI' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-14 pb-6">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white">Dr. Azhar Alam</p>
                <p className="text-[10px] text-gray-400">Consultant Surgeon</p>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              Expert in LASER & Minimal Invasive Surgery with 15+ years at Noor Hospital, Lahore.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="text-[13px] text-gray-400 hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Online */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Find Us On</h4>
            <ul className="space-y-2">
              {platforms.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] text-gray-400 hover:text-white transition-colors">
                    {p.name} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Contact</h4>
            <div className="space-y-2.5">
              <a href="tel:+923320761997" className="flex items-center gap-2 text-[13px] hover:text-white transition-colors"><Phone className="w-3.5 h-3.5" /> 0332-0761997</a>
              <a href="mailto:dr.azharalam@gmail.com" className="flex items-center gap-2 text-[13px] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /> dr.azharalam@gmail.com</a>
              <div className="flex items-start gap-2 text-[13px]"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" /> Noor Hospital, Ferozepur Rd, Lahore</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">© {new Date().getFullYear()} Dr. Azhar Alam. All rights reserved.</p>
          <p className="text-[11px] text-gray-500 flex items-center gap-1">Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for better healthcare</p>
        </div>
      </div>
    </footer>
  );
}
