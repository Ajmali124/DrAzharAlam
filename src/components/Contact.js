import { Accessibility, Building2, Clock, CreditCard, ExternalLink, Mail, MapPin, Navigation, Phone } from 'lucide-react';

const profiles = [
  { name: 'Facebook', url: 'https://www.facebook.com/DrAzharAlam786/', info: '23K+ Followers' },
  { name: 'Marham.pk', url: 'https://www.marham.pk/doctors/lahore/general-surgeon/dr-azhar-alam', info: '4.5★' },
  { name: 'Oladoc.com', url: 'https://oladoc.com/pakistan/lahore/general-surgeon/dr-azhar-alam', info: '97%' },
  { name: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Dr%20Azhar%20Alam&query_place_id=ChIJcXn_J8YHGTkR6GjY_xZVWqI', info: '4.9★' },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Contact & Location</p>
          <h2 className="section-title">Visit Noor Hospital</h2>
          <p className="section-desc mx-auto">Ferozepur Road, opposite Descon Head Office, Lahore</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[280px] sm:h-[360px] lg:h-full min-h-[280px] shadow-sm border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1!2d74.3571344!3d31.424459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907c627ff7971%3A0xa25a5516ffd868e8!2sDr%20Azhar%20Alam!5e0!3m2!1sen!2spk!4v1709800000000!5m2!1sen!2spk"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              title="Noor Hospital Location" />
          </div>

          {/* Info */}
          <div className="space-y-4">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-dark mb-1">NOOR Hospital</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Lahore – Kasur Rd, opp. Descon Head Office, Shadab Garden, Lahore 54000</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Dr%20Azhar%20Alam&query_place_id=ChIJcXn_J8YHGTkR6GjY_xZVWqI"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary mt-2 hover:text-primary-dark">
                    <Navigation className="w-3.5 h-3.5" /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact methods */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="tel:+923320761997" className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="w-4 h-4 text-primary" /></div>
                <div><p className="text-[11px] text-gray-400">Phone</p><p className="text-[13px] font-bold text-dark">0332-0761997</p></div>
              </a>
              <a href="mailto:dr.azharalam@gmail.com" className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
                <div><p className="text-[11px] text-gray-400">Email</p><p className="text-[13px] font-bold text-dark break-all">dr.azharalam@gmail.com</p></div>
              </a>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-[14px] font-bold text-dark mb-3">Facilities</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: Accessibility, t: 'Wheelchair Access' },
                  { icon: CreditCard, t: 'Card Payment' },
                  { icon: Building2, t: 'Air Conditioned' },
                  { icon: Clock, t: 'Open 24/7' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[12px] text-gray-500">
                    <f.icon className="w-3.5 h-3.5 text-green-500" /> {f.t}
                  </div>
                ))}
              </div>
            </div>

            {/* Online profiles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-[14px] font-bold text-dark mb-3">Find Online</h3>
              <div className="space-y-1.5">
                {profiles.map((p) => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-[13px] font-medium text-gray-700">{p.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-400">{p.info}</span>
                      <ExternalLink className="w-3 h-3 text-gray-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
