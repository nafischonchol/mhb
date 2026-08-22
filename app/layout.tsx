import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "মাহমুদুর হাসান বিদ্যানিকেতন | MHB",
    template: "%s | MHB"
  },
  description: "মাহমুদুর হাসান বিদ্যানিকেতন — আউটিয়া, ঘারিন্দা, টাঙ্গাইল।",
  keywords: ["MHB", "মাহমুদুর হাসান বিদ্যানিকেতন", "স্কুল", "টাঙ্গাইল", "আউটিয়া"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}