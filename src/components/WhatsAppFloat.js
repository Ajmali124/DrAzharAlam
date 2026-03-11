'use client';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById('home');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setVisible(heroBottom < 100);
      } else {
        setVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/923320761997?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20book%20an%20appointment%20with%20Dr.%20Azhar%20Alam"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${visible ? 'whatsapp-float-visible' : 'whatsapp-float-hidden'}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
    </a>
  );
}
