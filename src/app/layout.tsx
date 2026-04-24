import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Africentric Professional Services | Empowering Business Growth in Africa",
  description: "High-end corporate professional services tailored for the African market. Strategic consulting, financial advisory, and market entry solutions.",
  keywords: ["African market consulting", "business strategy Africa", "financial advisory Nigeria", "market entry Africa", "Africentric services"],
  openGraph: {
    title: "Africentric Professional Services",
    description: "Institutional Integrity. Modern Expertise.",
    url: "https://africentric.com",
    siteName: "Africentric Professional Services",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Africentric Professional Services",
    "description": "Strategic Accounting, Audit and Tax Advisory Firm in Nigeria.",
    "url": "https://africentric.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 40 Aswan Street, Wuse Zone 3",
      "addressLocality": "Abuja",
      "addressRegion": "FCT",
      "postalCode": "900281",
      "addressCountry": "NG"
    },
    "serviceType": ["Strategic Consulting", "Financial Advisory", "Market Entry"],
    "areaServed": "Africa"
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
