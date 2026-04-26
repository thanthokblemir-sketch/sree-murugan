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
  metadataBase: new URL("https://sreemurugan.vercel.app"),
  title: "Sree Murugan Hotel & Restaurant | South Indian Breakfast | Tisca, Ponda, Goa",
  description: "Authentic homemade South Indian breakfast in Tisca, Ponda, Goa. Puttu, Appam, Egg Curry, Idly, Porotta & more. Open 6 AM–12 PM daily. 30 years of fresh, hygienic cooking.",
  keywords: "South Indian breakfast Goa, Puttu Kadala Goa, Appam egg curry Goa, breakfast Ponda Goa, Tisca restaurant, homemade breakfast Goa, Kerala food Goa, roadside restaurant NH4A Goa, morning breakfast North Goa route",
  openGraph: {
    title: "Sree Murugan Hotel & Restaurant | Tisca, Goa",
    description: "30-year-old family-run South Indian breakfast spot. Homemade Puttu, Appam, Idly & more. Open 6 AM–12 PM.",
    type: "website",
    url: "https://sreemurugan.vercel.app",
    siteName: "Sree Murugan Hotel",
    images: [
      {
        url: "/og-image.jpg", // Assuming we might add one or use a placeholder
        width: 1200,
        height: 630,
        alt: "Sree Murugan South Indian Breakfast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Murugan Hotel & Restaurant | Tisca, Goa",
    description: "Authentic homemade South Indian breakfast in Tisca, Ponda, Goa. Fresh Puttu, Appam, and Chai from 6 AM.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sreemurugan.vercel.app",
  },
  verification: {
    google: "ib3eR1X83Vfo3Nle7Vxtv-MCXQzEFKIIuhXu1bgLVGQ",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "@id": "https://sreemurugan.vercel.app",
                "name": "Sree Murugan Hotel and Restaurant",
                "image": "https://sreemurugan.vercel.app/og-image.jpg",
                "description": "30-year-old family-run South Indian breakfast restaurant in Tisca, Ponda, Goa. Fresh homemade Puttu, Appam, Egg Curry, Idly, Porotta daily from 6 AM.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "C37J+6QR, Tisk Usgao, Tisca, Darbandora",
                  "addressLocality": "Ponda",
                  "addressRegion": "Goa",
                  "postalCode": "403406",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 15.4414,
                  "longitude": 74.0722
                },
                "url": "https://sreemurugan.vercel.app",
                "telephone": "+917875680641",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "06:00",
                    "closes": "12:00"
                  }
                ],
                "servesCuisine": ["South Indian", "Kerala", "Indian Breakfast"],
                "hasMenu": {
                  "@type": "Menu",
                  "name": "Breakfast Menu",
                  "hasMenuItem": [
                    { "@type": "MenuItem", "name": "Puttu & Kadala Curry" },
                    { "@type": "MenuItem", "name": "Appam & Egg Curry" },
                    { "@type": "MenuItem", "name": "Idiyappam" },
                    { "@type": "MenuItem", "name": "Kerala Porotta" },
                    { "@type": "MenuItem", "name": "Idly & Sambar" }
                  ]
                },
                "priceRange": "₹",
                "paymentAccepted": "Cash, UPI",
                "foundingDate": "1994",
                "hasMap": "https://maps.app.goo.gl/9XdQyx5gHGezLLFH9"
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sreemurugan.vercel.app"
                  }
                ]
              }
            ]),
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
