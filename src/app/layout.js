import "./globals.css";

export const metadata = {
  title: "Dr. Azhar Alam | Best General & Laparoscopic Surgeon in Lahore",
  description:
    "Dr. Muhammad Azhar Alam — Consultant General & Laparoscopic Surgeon at Noor Hospital, Lahore. Expert in LASER Surgery, Hernia Repair, Piles Treatment, Gallbladder Removal, Appendectomy, Breast Surgery & more. 15+ years experience. 4.9★ Google Rating. Book appointment: 0332-0761997.",
  keywords: [
    // Doctor identity
    "Dr Azhar Alam", "Dr Muhammad Azhar Alam", "Dr Azhar Alam Lahore",
    "Dr Azhar Alam Noor Hospital", "Dr Azhar Alam surgeon",
    // Specialties
    "general surgeon Lahore", "laparoscopic surgeon Lahore",
    "LASER surgery Lahore", "minimally invasive surgery Lahore",
    "best surgeon Lahore", "consultant surgeon Lahore",
    // Procedures
    "hernia repair Lahore", "piles treatment Lahore", "LASER piles Lahore",
    "gallbladder surgery Lahore", "appendectomy Lahore",
    "laparoscopic cholecystectomy Lahore", "breast surgery Lahore",
    "thyroid surgery Lahore", "bariatric surgery Lahore",
    "varicose veins surgery Lahore", "fissure fistula surgery Lahore",
    "pilonidal sinus surgery Lahore", "haemorrhoids Lahore",
    "circumcision Lahore", "lipoma removal Lahore",
    // Hospital & location
    "Noor Hospital Lahore", "Noor Hospital Ferozepur Road",
    "surgeon Ferozepur Road Lahore", "surgeon Shadab Garden Lahore",
    "surgeon Gulberg Lahore", "surgeon DHA Lahore",
    "surgeon Model Town Lahore", "surgeon Johar Town Lahore",
    "surgeon Garden Town Lahore", "surgeon Iqbal Town Lahore",
    "surgeon Raiwind Road Lahore", "surgeon Wapda Town Lahore",
    "surgeon Punjab Lahore", "surgeon Pakistan",
    // Intent
    "book surgeon Lahore", "online appointment surgeon Lahore",
    "video consultation surgeon Pakistan", "best laparoscopic surgeon Pakistan",
  ].join(", "),
  authors: [{ name: "Dr. Muhammad Azhar Alam" }],
  creator: "Dr. Muhammad Azhar Alam",
  publisher: "Noor Hospital Lahore",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Dr. Azhar Alam | Best General & Laparoscopic Surgeon in Lahore",
    description:
      "Expert in LASER & Minimally Invasive Surgery. 15+ years at Noor Hospital, Ferozepur Road, Lahore. 4.9★ on Google (222+ reviews). Book online.",
    type: "website",
    locale: "en_PK",
    siteName: "Dr. Azhar Alam — Consultant Surgeon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Azhar Alam | Best Surgeon Lahore",
    description:
      "Consultant General & Laparoscopic Surgeon. LASER Surgery Expert. Noor Hospital, Lahore. 4.9★ Google Rating.",
  },
  alternates: {
    canonical: "https://dr-azhar-alam.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
