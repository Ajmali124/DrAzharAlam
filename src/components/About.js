import { Award, Clock, GraduationCap, MapPin, Stethoscope, Zap } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">About</p>
          <h2 className="section-title">Meet Dr. Azhar Alam</h2>
          <p className="section-desc mx-auto">A compassionate surgeon dedicated to providing the highest standard of surgical care through modern techniques</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/doctor-portrait.jpg" alt="Dr. Azhar Alam" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <p className="text-white font-bold text-lg">Dr. Muhammad Azhar Alam</p>
                <p className="text-white/80 text-sm">MBBS, MS (General Surgery)</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Dr. Muhammad Azhar Alam is a highly experienced <strong className="text-dark">Consultant General Surgeon</strong> with 
              over <strong className="text-dark">15 years of surgical practice</strong> at Noor Hospital, Lahore.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              He specializes in LASER and Minimal Invasive Surgery, providing advanced laparoscopic procedures 
              that minimize recovery time and maximize outcomes. Known for his <strong className="text-dark">compassionate approach</strong> and 
              <strong className="text-dark"> careful listening</strong>, he has earned a remarkable 4.9-star Google rating with 222+ reviews.
            </p>

            {/* Qualifications */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-dark">MBBS</p>
                  <p className="text-[12px] text-gray-400">University of Health Sciences, Lahore</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-dark">MS (General Surgery)</p>
                  <p className="text-[12px] text-gray-400">University of Health Sciences, Lahore</p>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Zap, text: 'LASER Surgery Expert' },
                { icon: Stethoscope, text: 'Laparoscopic Specialist' },
                { icon: MapPin, text: 'Noor Hospital, Lahore' },
                { icon: Clock, text: 'Mon–Sat: 5–7 PM' },
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px] text-gray-600">
                  <h.icon className="w-4 h-4 text-primary shrink-0" />
                  {h.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
