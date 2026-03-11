import About from '@/components/About';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
