import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  Megaphone,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "মাহমুদুল হাসান বিদ্যানিকেতন | আউটিয়া, ঘারিন্দা, টাঙ্গাইল",
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতন (EIIN: 114704) — আউটিয়া, ঘারিন্দা, টাঙ্গাইলে অবস্থিত একটি সুপ্রসিদ্ধ মাধ্যমিক শিক্ষা প্রতিষ্ঠান।",
};

const events = [
  {
    date: "১২",
    month: "অক্টোবর",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    text: "শিক্ষার্থীদের অংশগ্রহণে দিনব্যাপী ক্রীড়া অনুষ্ঠান।",
  },
  {
    date: "২১",
    month: "অক্টোবর",
    title: "অভিভাবক সমাবেশ",
    text: "শিক্ষার্থী ও অভিভাবকদের সঙ্গে মতবিনিময় সভা।",
  },
  {
    date: "০৫",
    month: "নভেম্বর",
    title: "বিজ্ঞান ও প্রযুক্তি মেলা",
    text: "শিক্ষার্থীদের উদ্ভাবনী প্রকল্প প্রদর্শনী।",
  },
];

const notices = [
  "বার্ষিক পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে।",
  "নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শীঘ্রই শুরু হবে।",
  "অভিভাবক সমাবেশের তারিখ ও সময় ঘোষণা করা হয়েছে।",
];

export default function Home() {
  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-site grid min-h-[620px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              MHB • শিক্ষা, শৃঙ্খলা ও স্বপ্ন
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              জ্ঞানের আলোয় গড়ি
              <br />
              আগামীর মানুষ
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              মাহমুদুল হাসান বিদ্যানিকেতন একটি আধুনিক, শিক্ষার্থী-কেন্দ্রিক
              শিক্ষা প্রতিষ্ঠান। আমরা জ্ঞান, নৈতিকতা ও সৃজনশীলতার সমন্বয়ে
              ভবিষ্যৎ প্রজন্ম গড়ে তুলতে কাজ করি।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admission"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition hover:-translate-y-0.5"
              >
                ভর্তি তথ্য দেখুন <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/15"
              >
                আমাদের সম্পর্কে
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/campus.jpg"
                  alt="MHB Campus - মাহমুদুল হাসান বিদ্যানিকেতন"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-6 flex flex-col justify-between">
                  <img
                    src="/images/logo.jpg"
                    alt="MHB Logo"
                    className="h-12 w-12 rounded-xl object-cover shadow border border-white/20"
                  />
                  <div>
                    <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold tracking-wider text-white backdrop-blur">
                      OUR CAMPUS
                    </span>
                    <p className="mt-2 text-xl font-bold text-white">
                      শিক্ষার জন্য সুন্দর ও মনোরম পরিবেশ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 relative z-10">
        <div className="container-site grid gap-4 md:grid-cols-3">
          {[
            [
              GraduationCap,
              "আধুনিক শিক্ষা",
              "শিক্ষার্থীবান্ধব পাঠদান ও সৃজনশীল শিক্ষার পরিবেশ।",
            ],
            [
              Users,
              "অভিজ্ঞ শিক্ষক",
              "দক্ষ ও যত্নশীল শিক্ষকবৃন্দের নিবিড় পরিচর্যা।",
            ],
            [
              CalendarDays,
              "সহশিক্ষা কার্যক্রম",
              "খেলাধুলা, সাংস্কৃতিক ও বিজ্ঞানভিত্তিক কার্যক্রম।",
            ],
          ].map(([Icon, title, text]: any) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-soft">
              <Icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-10 py-20 lg:grid-cols-[1fr_.9fr]">
        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Notice Board
              </p>
              <h2 className="mt-2 text-3xl font-black">সর্বশেষ নোটিশ</h2>
            </div>
            <Link href="/notices" className="text-sm font-bold text-blue-600">
              সব নোটিশ →
            </Link>
          </div>
          <div className="mt-6 space-y-3">
            {notices.map((notice, i) => (
              <div
                key={notice}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{notice}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    প্রকাশিত: ০৮ আগস্ট ২০২৬
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Upcoming
          </p>
          <h2 className="mt-2 text-3xl font-black">আসন্ন ইভেন্ট</h2>
          <div className="mt-6 space-y-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="w-16 shrink-0 rounded-xl bg-slate-900 p-2 text-center text-white">
                  <div className="text-xl font-black">{event.date}</div>
                  <div className="text-[10px]">{event.month}</div>
                </div>
                <div>
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
