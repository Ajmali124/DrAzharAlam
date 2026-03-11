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

// ── JSON-LD Structured Data ──────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://dr-azhar-alam.vercel.app/#doctor",
      "name": "Dr. Muhammad Azhar Alam",
      "alternateName": ["Dr. Azhar Alam", "Dr Azhar Alam Lahore"],
      "description": "Consultant General & Laparoscopic Surgeon with 15+ years of experience. Expert in LASER Surgery, Minimally Invasive Surgery, Hernia Repair, Piles Treatment, Gallbladder Removal, Appendectomy, Breast Surgery, Thyroid Surgery, and more.",
      "image": "https://dr-azhar-alam.vercel.app/Vedio/about.png",
      "url": "https://dr-azhar-alam.vercel.app",
      "telephone": "+923320761997",
      "email": "dr.azharalam@gmail.com",
      "gender": "Male",
      "jobTitle": "Consultant General & Laparoscopic Surgeon",
      "honorificPrefix": "Dr.",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBBS", "recognizedBy": { "@type": "Organization", "name": "University of Health Sciences, Lahore" } },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MS (General Surgery)", "recognizedBy": { "@type": "Organization", "name": "University of Health Sciences, Lahore" } }
      ],
      "medicalSpecialty": [
        "General Surgery", "Laparoscopic Surgery", "LASER Surgery",
        "Minimal Invasive Surgery", "Proctology", "Breast Surgery",
        "Hernia Repair", "Bariatric Surgery", "Thyroid Surgery",
        "Vascular Surgery", "Abdominal Surgery"
      ],
      "availableService": [
        "Laparoscopic Cholecystectomy", "Laparoscopic Hernia Repair",
        "Laparoscopic Appendectomy", "LASER Piles Treatment",
        "Haemorrhoidectomy", "Anal Fissure Surgery", "Fistula Repair",
        "Pilonidal Sinus Surgery", "Thyroidectomy", "Breast Cancer Surgery",
        "Mastectomy", "Varicose Veins Surgery", "Bariatric Surgery",
        "Gallbladder Removal", "Intestinal Surgery", "Lipoma Removal",
        "Varicocele Surgery", "Hydrocele Surgery", "Circumcision",
        "Diabetic Foot Surgery", "Cancer Surgery", "Lymph Node Excision"
      ],
      "worksFor": {
        "@type": "Hospital",
        "@id": "https://dr-azhar-alam.vercel.app/#hospital",
        "name": "Noor Hospital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lahore–Kasur Rd, opp. Descon Head Office, Shadab Garden",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54000",
          "addressCountry": "PK"
        },
        "telephone": "+923320761997",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.424459",
          "longitude": "74.3571344"
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=Dr%20Azhar%20Alam&query_place_id=ChIJcXn_J8YHGTkR6GjY_xZVWqI"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "222",
        "bestRating": "5",
        "worstRating": "1",
        "ratingExplanation": "Google Maps verified rating from 222+ patient reviews"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "17:00",
          "closes": "19:00",
          "description": "In-person clinic at Noor Hospital"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "14:00",
          "closes": "23:50",
          "description": "Online video consultation via Marham.pk"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "AdministrativeArea", "name": "Punjab, Pakistan" },
        "Gulberg", "DHA Lahore", "Model Town", "Johar Town",
        "Garden Town", "Iqbal Town", "Shadab Garden", "Wapda Town",
        "Raiwind Road", "Ferozepur Road", "Allama Iqbal Town",
        "Bahria Town Lahore", "Township Lahore"
      ],
      "sameAs": [
        "https://www.facebook.com/DrAzharAlam786/",
        "https://www.marham.pk/doctors/lahore/general-surgeon/dr-azhar-alam",
        "https://oladoc.com/pakistan/lahore/general-surgeon/dr-azhar-alam",
        "https://www.google.com/maps/search/?api=1&query=Dr%20Azhar%20Alam&query_place_id=ChIJcXn_J8YHGTkR6GjY_xZVWqI"
      ],
      "priceRange": "₨1,500 – ₨2,200",
      "currenciesAccepted": "PKR",
      "paymentAccepted": "Cash, Card"
    },
    {
      "@type": "WebSite",
      "@id": "https://dr-azhar-alam.vercel.app/#website",
      "url": "https://dr-azhar-alam.vercel.app",
      "name": "Dr. Azhar Alam — Consultant Surgeon Lahore",
      "description": "Official website of Dr. Muhammad Azhar Alam, Consultant General & Laparoscopic Surgeon at Noor Hospital, Lahore.",
      "inLanguage": "en-PK"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Dr. Azhar Alam's consultation fee in Lahore?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dr. Azhar Alam charges ₨1,500 for in-person consultations at Noor Hospital, Lahore, and ₨2,200 for video consultations via Marham.pk." }
        },
        {
          "@type": "Question",
          "name": "What are Dr. Azhar Alam's clinic timings at Noor Hospital?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dr. Azhar Alam sees patients Monday to Saturday from 5:00 PM to 7:00 PM at Noor Hospital, Ferozepur Road, Lahore. Online video consultations are available daily 2:00 PM – 11:50 PM via Marham.pk." }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Azhar Alam perform laparoscopic surgery in Lahore?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dr. Azhar Alam is a specialist in laparoscopic (minimally invasive) surgery including gallbladder removal, hernia repair, appendectomy, and more at Noor Hospital, Lahore." }
        },
        {
          "@type": "Question",
          "name": "What is Dr. Azhar Alam's Google rating?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dr. Azhar Alam has a 4.9-star rating on Google Maps from 222+ verified patient reviews." }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Azhar Alam treat piles with LASER?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dr. Azhar Alam is an expert in LASER treatment for piles (haemorrhoids), fissure, and fistula — offering painless, fast-recovery procedures at Noor Hospital, Lahore." }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
