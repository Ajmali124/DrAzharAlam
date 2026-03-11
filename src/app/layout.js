import "./globals.css";

export const metadata = {
  title: "Dr. Azhar Alam | Consultant Surgeon — Lahore",
  description: "Dr. Muhammad Azhar Alam — Consultant General & Laparoscopic Surgeon at Noor Hospital, Lahore. LASER & Minimal Invasive Surgery Expert. 15+ years experience. Book appointment: 0332-0761997",
  keywords: "Dr Azhar Alam, surgeon Lahore, laparoscopic surgery, laser surgery, Noor Hospital, general surgeon Pakistan",
  openGraph: {
    title: "Dr. Azhar Alam | Consultant Surgeon",
    description: "Expert General & Laparoscopic Surgeon at Noor Hospital, Lahore. 15+ years experience.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
