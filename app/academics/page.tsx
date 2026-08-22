"use client";

import PageHero from "@/components/PageHero";
import { Download, BookOpen, Calendar, Award, FileText, CheckCircle } from "lucide-react";

const downloads = [
  {
    title: "বার্ষিক পরীক্ষার সিলেবাস ২০২৬",
    desc: "৬ষ্ঠ থেকে ১০ম শ্রেণীর বিষয়ভিত্তিক সিলেবাস ও মানবণ্টন",
    fileSize: "PDF • ২.৪ MB",
  },
  {
    title: "শ্রেণী রুটিন ও ক্লাস টাইমটেবিল",
    desc: "২০২৬ শিক্ষাবর্ষের সকল শ্রেণীর সাপ্তাহিক ক্লাস রুটিন",
    fileSize: "PDF • ১.১ MB",
  },
  {
    title: "বার্ষিক ছুটির তালিকা ও একাডেমিক ক্যালেন্ডার",
    desc: "সরকারি ছুটি, পরীক্ষা ও ইভেন্টের পূর্ণাঙ্গ ক্যালেন্ডার",
    fileSize: "PDF • ৮৫০ KB",
  },
  {
    title: "এসএসসি বিশেষ মডেল টেস্ট রুটিন",
    desc: "এসএসসি পরীক্ষার্থীদের চূড়ান্ত প্রস্তুতি ও মডেল টেস্ট সূচি",
    fileSize: "PDF • ১.৫ MB",
  },
];

export default function Academics() {
  return (
    <>
      <PageHero
        title="একাডেমিক তথ্য ও পাঠদান ব্যবস্থা"
        subtitle="পাঠদান, মূল্যায়ন, বিজ্ঞান ও মানবিক বিভাগ এবং শিক্ষাবর্ষের সাধারণ কাঠামো (৬ষ্ঠ শ্রেণী - এসএসসি)।"
      />
      <section className="container-site py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "মাধ্যমিক শাখা (৬ষ্ঠ - ১০ম শ্রেণী)",
              desc: "জাতীয় শিক্ষাক্রম অনুসরণ করে সৃজনশীল ও বাস্তবমুখী পাঠদান এবং শিক্ষার্থীদের ধারাবাহিক মূল্যায়ন।",
            },
            {
              num: "02",
              title: "বিজ্ঞান ও মানবিক বিভাগ",
              desc: "৯ম ও ১০ম শ্রেণীতে সুসজ্জিত ল্যাব ও অভিজ্ঞ শিক্ষক দ্বারা বিজ্ঞান ও মানবিক বিভাগের নিবিড় শিক্ষা।",
            },
            {
              num: "03",
              title: "এসএসসি বিশেষ প্রস্তুতি",
              desc: "নিয়মিত স্পেশাল ক্লাস, সাপ্তাহিক মডেল টেস্ট ও বিগত বছরের বোর্ড প্রশ্ন সমাধানের মাধ্যমে সেরা প্রস্তুতি।",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft hover:shadow-md transition">
              <div className="text-4xl font-black text-blue-600">{x.num}</div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">{x.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 text-sm">
                {x.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Downloadable Academic Resources */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
                <FileText className="h-3.5 w-3.5" /> ডকুমেন্টস ও সিলেবাস
              </span>
              <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                একাডেমিক রিসোর্স ডাউনলোড
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {downloads.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                    <span className="mt-2 inline-block text-[11px] font-semibold text-slate-400">
                      {item.fileSize}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`"${item.title}" ফাইলটি ডাউনলোড হচ্ছে...`)}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-600 transition"
                >
                  <Download className="h-3.5 w-3.5" /> ডাউনলোড
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

