import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mhb.mohimaa.shop",
  ),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "মাহমুদুল হাসান বিদ্যানিকেতন | MHB School",
    template: "%s | মাহমুদুল হাসান বিদ্যানিকেতন",
  },
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতন (EIIN: 114704) — আউটিয়া, ঘারিন্দা, টাঙ্গাইলে অবস্থিত একটি সুপ্রসিদ্ধ শিক্ষা প্রতিষ্ঠান।",
  keywords: [
    "মাহমুদুল হাসান বিদ্যানিকেতন",
    "MHB School",
    "Mahmudul Hasan Bidyaniketon",
    "EIIN 114704",
    "আউটিয়া",
    "ঘারিন্দা",
    "টাঙ্গাইল স্কুল",
    "Tangail School",
    "মাধ্যমিক বিদ্যালয় টাঙ্গাইল",
  ],
  authors: [
    { name: "মাহমুদুল হাসান বিদ্যানিকেতন" },
    { name: "Nafis Chonchol", url: "https://www.facebook.com/nafis.chonchol/" },
  ],
  creator: "Nafis Chonchol",
  publisher: "মাহমুদুল হাসান বিদ্যানিকেতন",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "মাহমুদুল হাসান বিদ্যানিকেতন | MHB School",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতন (EIIN: 114704) — আউটিয়া, ঘারিন্দা, টাঙ্গাইল। মানসম্মত শিক্ষা ও নৈতিক শিক্ষার অঙ্গীকার।",
    url: "/",
    siteName: "মাহমুদুল হাসান বিদ্যানিকেতন",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/images/campus.jpg",
        width: 1200,
        height: 630,
        alt: "মাহমুদুল হাসান বিদ্যানিকেতন ক্যাম্পাস",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "মাহমুদুল হাসান বিদ্যানিকেতন | MHB School",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতন (EIIN: 114704) — আউটিয়া, ঘারিন্দা, টাঙ্গাইল।",
    images: ["/images/campus.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "মাহমুদুল হাসান বিদ্যানিকেতন",
    alternateName: ["MHB School", "Mahmudul Hasan Bidyaniketon"],
    identifier: "114704",
    url: "https://mhb.mohimaa.shop",
    logo: "https://mhb.mohimaa.shop/images/logo.jpg",
    image: "https://mhb.mohimaa.shop/images/campus.jpg",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতন (EIIN: 114704) আউটিয়া, ঘারিন্দা, টাঙ্গাইলে অবস্থিত একটি সুপ্রসিদ্ধ মাধ্যমিক শিক্ষা প্রতিষ্ঠান।",
    address: {
      "@type": "PostalAddress",
      streetAddress: "আউটিয়া, ঘারিন্দা",
      addressLocality: "টাঙ্গাইল সদর",
      addressRegion: "টাঙ্গাইল",
      addressCountry: "BD",
    },
  };

  return (
    <html lang="bn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
