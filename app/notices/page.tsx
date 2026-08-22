import type { Metadata } from "next";
import NoticesClient from "@/components/NoticesClient";

export const metadata: Metadata = {
  title: "নোটিশ বোর্ড",
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতনের সকল অফিসিয়াল নোটিশ, ভর্তি বিজ্ঞপ্তি, পরীক্ষা সময়সূচি ও প্রশাসনিক নির্দেশনা।",
};

export default function NoticesPage() {
  return <NoticesClient />;
}
