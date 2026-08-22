import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "ফটো গ্যালারি",
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতনের বিভিন্ন ইভেন্ট, ক্রীড়া প্রতিযোগিতা, শিক্ষক ও প্রাক্তন শিক্ষার্থীদের স্মরণীয় মুহূর্তের ফটো গ্যালারি।",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
