'use client';
import { ChevronLeft, ChevronRight, Clock, Quote, Star, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const reviews = [
  {
    text: "Very experienced, kind hearted doctor, treating his patients with extreme care.",
    platform: 'Marham.pk', rating: 5, wait: '10 min',
    tags: ['Great Experience', 'Good Staff', 'Good Clinic'],
  },
  {
    text: "I had an infected wound of appendectomy. He treated that very carefully. He is so conscious for his patients. He treated me as he was suffering with that wound. I didn't see any doctor like this kind of behavior in Pakistan.",
    platform: 'Marham.pk', rating: 5, wait: 'No Wait',
    tags: ['Great Experience'],
  },
  {
    text: "He is so caring. I didn't meet with this kind of soft hearted doctors specially in Pakistan. He treated me very carefully with no pain.",
    platform: 'Marham.pk', rating: 5, wait: 'No Wait',
    tags: ['Great Experience', 'Good Staff', 'Good Clinic'],
  },
  {
    text: "Doctor sy unky treatment sy 100% satisfy hn. Doctor Alam bohat tawaja dety apny patient ko. Pakistan main aesy caring or friendly doctor nai Milty. Full cooperate krty hain.",
    platform: 'Marham.pk', rating: 5, wait: 'No Wait',
    tags: ['100% Satisfied'],
  },
  {
    text: "Praised his polite and friendly behavior. Appreciated his advice and prescription, hoping for a cure with medication.",
    platform: 'Oladoc.com', rating: 5, wait: null,
    tags: ['97% Satisfaction', 'Verified'],
  },
];

const platforms = [
  { name: 'Google Maps', rating: '4.9★', reviews: '222', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  { name: 'Oladoc', rating: '97%', reviews: '99', bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  { name: 'Marham', rating: '4.5★', reviews: '15', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  { name: 'ApkaMuaalij', rating: '100%', reviews: '—', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
];

const tags = [
  // Patient sentiment (Google verified)
  { tag: 'Cooperative', count: 12 },
  { tag: 'Compassionate', count: 11 },
  { tag: 'Careful listening', count: 4 },
  { tag: 'Attention to detail', count: 4 },
  { tag: 'Clean environment', count: 3 },
  { tag: 'Hygiene', count: 3 },
  { tag: 'No Pain', count: 5 },
  { tag: 'Quick Recovery', count: 7 },
  { tag: 'Minimal Scarring', count: 4 },
  { tag: 'Friendly Staff', count: 6 },
  { tag: '100% Recommended', count: 9 },
  { tag: 'Best in Lahore', count: 8 },
  // Procedure tags
  { tag: 'LASER Surgery', count: 15 },
  { tag: 'Laparoscopic Expert', count: 13 },
  { tag: 'Hernia Specialist', count: 6 },
  { tag: 'Piles Treatment', count: 8 },
  { tag: 'Gallbladder Removal', count: 5 },
  { tag: 'Appendectomy', count: 4 },
  { tag: 'Thyroid Surgery', count: 3 },
  // Location tags
  { tag: 'Noor Hospital Lahore', count: 20 },
  { tag: 'Ferozepur Road', count: 10 },
  { tag: 'Serving Gulberg', count: 5 },
  { tag: 'Serving DHA', count: 4 },
  { tag: 'Serving Model Town', count: 4 },
  { tag: 'Serving Johar Town', count: 3 },
  { tag: 'Serving Garden Town', count: 3 },
  { tag: 'Serving Iqbal Town', count: 3 },
  { tag: 'Serving Wapda Town', count: 2 },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[current];

  return (
    <section id="reviews" className="section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Reviews</p>
          <h2 className="section-title">Trusted by Hundreds</h2>
          <p className="section-desc mx-auto">Real reviews from verified patients across multiple platforms</p>
        </div>

        {/* Platform stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {platforms.map((p) => (
            <div key={p.name} className={`rounded-xl p-4 text-center border ${p.bg} ${p.border}`}>
              <p className={`text-[24px] font-bold ${p.text}`}>{p.rating}</p>
              <p className="text-[13px] font-semibold text-dark mt-0.5">{p.name}</p>
              <p className="text-[11px] text-gray-400">{p.reviews} reviews</p>
            </div>
          ))}
        </div>

        {/* Review card */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative">
            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
            
            <div className="flex gap-0.5 mb-4">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-[15px] text-gray-700 leading-relaxed mb-5 min-h-[72px]">
              &ldquo;{r.text}&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge bg-primary/10 text-primary">{r.platform}</span>
              {r.wait && (
                <span className="badge bg-gray-100 text-gray-500">
                  <Clock className="w-3 h-3" /> Wait: {r.wait}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {r.tags.map((t, i) => (
                <span key={i} className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 rounded-full px-2.5 py-1 border border-gray-100">
                  <ThumbsUp className="w-3 h-3 text-green-500" /> {t}
                </span>
              ))}
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-primary' : 'w-1.5 bg-gray-200'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setCurrent((p) => (p - 1 + reviews.length) % reviews.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>
                <button onClick={() => setCurrent((p) => (p + 1) % reviews.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google tags */}
        <div className="text-center">
          <p className="text-[13px] font-semibold text-dark mb-3">Most Mentioned on Google</p>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <span key={t.tag} className="text-[12px] text-gray-500 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
                {t.tag} <strong className="text-primary ml-1">{t.count}×</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
