import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ভর্তি তথ্য",
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতনে নতুন শিক্ষাবর্ষে ভর্তির যোগ্যতা, প্রয়োজনীয় কাগজপত্র ও প্রক্রিয়া সংক্রান্ত তথ্য।",
};

export default function Admission() {
  return (
    <>
      <PageHero
        title="ভর্তি তথ্য"
        subtitle="নতুন শিক্ষাবর্ষে ভর্তি সংক্রান্ত প্রয়োজনীয় তথ্য এক জায়গায়।"
      />
      <section className="container-site grid gap-6 py-16 md:grid-cols-3">
        {[
          [
            "যোগ্যতা",
            "শ্রেণিভেদে নির্ধারিত বয়স ও পূর্ববর্তী শ্রেণির ফলাফল অনুযায়ী ভর্তি।",
          ],
          [
            "প্রয়োজনীয় কাগজপত্র",
            "জন্মনিবন্ধন, পূর্ববর্তী প্রতিষ্ঠানের সনদ/প্রশংসাপত্র ও ছবি।",
          ],
          [
            "ভর্তি প্রক্রিয়া",
            "ফরম সংগ্রহ → আবেদন → যাচাই → ভর্তি নিশ্চিতকরণ।",
          ],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl bg-white p-7 shadow-soft">
            <h2 className="text-xl font-bold">{t}</h2>
            <p className="mt-3 leading-7 text-slate-600">{d}</p>
          </div>
        ))}
      </section>
      <div className="container-site pb-16">
        <div className="rounded-3xl bg-blue-600 p-8 text-white md:p-10">
          <h2 className="text-2xl font-black">ভর্তি সংক্রান্ত সহায়তা</h2>
          <p className="mt-2 text-blue-100">
            নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম সম্পর্কে বিস্তারিত জানতে আমাদের
            সাথে যোগাযোগ করুন।
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-bold text-blue-700"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </>
  );
}
