import type { Metadata } from "next";
import { Playfair_Display, Lato, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "700"],
  variable: "--font-noto-malayalam",
});

export const metadata: Metadata = {
  title: "Sree Murugan Hotel & Restaurant | South Indian Breakfast | Tisca, Ponda, Goa",
  description: "Authentic homemade South Indian breakfast in Tisca, Ponda, Goa. Puttu, Appam, Egg Curry, Idly, Porotta & more. Open 6 AM–12 PM daily. 30 years of fresh, hygienic cooking.",
  keywords: "South Indian breakfast Goa, Puttu Kadala Goa, Appam egg curry Goa, breakfast Ponda Goa, Tisca restaurant, homemade breakfast Goa, Kerala food Goa, roadside restaurant NH4A Goa, morning breakfast North Goa route",
  openGraph: {
    title: "Sree Murugan Hotel & Restaurant | Tisca, Goa",
    description: "30-year-old family-run South Indian breakfast spot. Homemade Puttu, Appam, Idly & more. Open 6 AM–12 PM.",
    type: "website",
    url: "https://sreemurugantisca.in",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sreemurugantisca.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Sree Murugan Hotel and Restaurant",
              "description": "30-year-old family-run South Indian breakfast restaurant in Tisca, Ponda, Goa. Fresh homemade Puttu, Appam, Egg Curry, Idly, Porotta daily from 6 AM.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C37J+6QR, Tisk Usgao, Tisca, Darbandora",
                "addressLocality": "Goa",
                "addressRegion": "Goa",
                "postalCode": "403406",
                "addressCountry": "IN"
              },
              "telephone": "+917875680641",
              "openingHours": "Mo-Su 06:00-12:00",
              "servesCuisine": ["South Indian", "Kerala", "Indian Breakfast"],
              "priceRange": "₹",
              "paymentAccepted": "Cash, UPI",
              "foundingDate": "1994",
              "hasMap": "https://maps.app.goo.gl/9XdQyx5gHGezLLFH9"
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} ${notoMalayalam.variable} font-body`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
