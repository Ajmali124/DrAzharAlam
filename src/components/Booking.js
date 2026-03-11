'use client';
import { Calendar, CheckCircle, ChevronDown, Clock, FileText, MessageCircle, Phone, User } from 'lucide-react';
import { useState } from 'react';

const serviceOptions = [
  'Laparoscopic Surgery', 'Breast Surgery', 'Hernia Repair',
  'Piles / Hemorrhoids (LASER)', 'Fissure / Fistula Surgery',
  'Pilonidal Sinus Surgery', 'Thyroid Surgery', 'Appendectomy',
  'Gallbladder Surgery', 'Varicose Veins Surgery', 'General Consultation', 'Other',
];

const timeSlots = ['5:00 PM', '5:15 PM', '5:30 PM', '5:45 PM', '6:00 PM', '6:15 PM', '6:30 PM', '6:45 PM'];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Assalam o Alaikum, I want to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}${form.message ? `\nMessage: ${form.message}` : ''}`;
    window.open(`https://wa.me/923320761997?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const set = (k, v) => setForm({ ...form, [k]: v });

  return (
    <section id="booking" className="section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Appointment</p>
          <h2 className="section-title">Book Your Visit</h2>
          <p className="section-desc mx-auto">Fill the form and we&apos;ll connect you via WhatsApp for confirmation</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                    <User className="w-3.5 h-3.5 text-primary" /> Full Name
                  </label>
                  <input type="text" required placeholder="Muhammad Ali" value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary" /> Phone
                  </label>
                  <input type="tel" required placeholder="0300-1234567" value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" /> Service
                </label>
                <div className="relative">
                  <select required value={form.service} onChange={(e) => set('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none bg-white">
                    <option value="">Select a service...</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Date
                  </label>
                  <input type="date" required value={form.date} onChange={(e) => set('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Time
                  </label>
                  <div className="relative">
                    <select value={form.time} onChange={(e) => set('time', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none bg-white">
                      <option value="">Select time...</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[13px] font-semibold text-dark mb-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" /> Message (optional)
                </label>
                <textarea rows={3} placeholder="Describe your condition..." value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" />
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#20BD5A] transition-colors shadow-lg shadow-green-500/20">
                {sent ? <><CheckCircle className="w-4 h-4" /> Opening WhatsApp...</> : <><MessageCircle className="w-4 h-4" /> Book via WhatsApp</>}
              </button>
              <p className="text-[11px] text-gray-400 text-center">Your details are sent to Dr. Azhar Alam&apos;s WhatsApp for confirmation</p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* Fees */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-[15px] font-bold text-dark mb-4">Consultation Fees</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                  <div>
                    <p className="text-[13px] font-semibold text-dark">In-Person</p>
                    <p className="text-[11px] text-gray-400">Noor Hospital</p>
                  </div>
                  <span className="text-[18px] font-bold text-primary">₨ 1,500</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                  <div>
                    <p className="text-[13px] font-semibold text-dark">Video Call</p>
                    <p className="text-[11px] text-gray-400">Via Marham.pk</p>
                  </div>
                  <span className="text-[18px] font-bold text-primary">₨ 2,200</span>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-[15px] font-bold text-dark mb-4">Clinic Hours</h3>
              <div className="space-y-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                  <div key={d} className="flex justify-between text-[13px]">
                    <span className="text-gray-500">{d}</span>
                    <span className="font-semibold text-dark">5:00 – 7:00 PM</span>
                  </div>
                ))}
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-400">Sun</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-[11px] text-primary font-medium">
                  📹 Video consultation: Mon–Sun, 2 PM – 11:50 PM via Marham.pk
                </p>
              </div>
            </div>

            {/* Quick action */}
            <a href="tel:+923320761997"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <Phone className="w-4 h-4 text-primary" /> Call: 0332-0761997
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
