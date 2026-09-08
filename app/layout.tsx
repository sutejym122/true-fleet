import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ConfigChecklist } from "@/components/site/ConfigChecklist";
import { company, displayLegalName, formattedAddress } from "@/data/company";
import "./globals.css";

/**
 * Both faces are self hosted variable fonts, latin subset only, roughly 73KB
 * in total. Nothing is fetched from a third party font CDN, which keeps the
 * first render fast and avoids a render blocking request.
 */
const manrope = localFont({
  src: "../assets/fonts/manrope-latin-variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
  preload: true,
});

const inter = localFont({
  src: "../assets/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const title = "TrueFleet | Commercial vehicle services and fleet platform";
const description =
  "TrueFleet brings fuel, tyres, insurance, roadside assistance, FASTag, finance and fleet records together in one platform built for commercial vehicle owners in India.";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: title,
    template: "%s | TrueFleet",
  },
  description,
  applicationName: "TrueFleet",
  keywords: [
    "commercial vehicle services",
    "fleet management India",
    "truck tyres",
    "commercial vehicle insurance",
    "FASTag",
    "transport owners club",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "TrueFleet",
    locale: "en_IN",
    url: company.siteUrl,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrueFleet: one platform for everything your fleet needs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const address = formattedAddress();

  /** Organisation data. Only fields that are actually configured are included. */
  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brand,
    legalName: displayLegalName(),
    url: company.siteUrl,
    description: company.descriptor,
    areaServed: "IN",
    ...(company.email || company.phone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            ...(company.email ? { email: company.email } : {}),
            ...(company.phone ? { telephone: company.phone } : {}),
            availableLanguage: ["en", "hi"],
          },
        }
      : {}),
    ...(address ? { address: { "@type": "PostalAddress", streetAddress: address } } : {}),
  };

  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {process.env.NODE_ENV !== "production" ? <ConfigChecklist /> : null}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
      </body>
    </html>
  );
}
