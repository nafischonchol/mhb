import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Facebook,
  GraduationCap,
  Megaphone,
  Sparkles,
  Trophy,
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

const successStats = [
  { label: "পাসের গড় হার", value: "৯৮.৫%", desc: "বিগত এসএসসি পরীক্ষার সাফল্য" },
  { label: "জিপিএ-৫ প্রাপ্তি", value: "৪০+", desc: "কৃতি শিক্ষার্থীদের অনন্য অর্জন" },
  { label: "অভিজ্ঞ শিক্ষকমণ্ডলী", value: "২৫+", desc: "দক্ষ ও নিবেদিতপ্রাণ শিক্ষক" },
  { label: "শিক্ষার্থী সংখ্যা", value: "১২০০+", desc: "উৎসাহী ও অনুশাসিত শিক্ষার্থী" },
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
            <div key={title} className="rounded-2xl bg-white p-6 shadow-soft border border-slate-100">
              <Icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SSC Achievements & Stats Section */}
      <section className="container-site py-16">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                  <Trophy className="h-3.5 w-3.5" /> আমাদের গর্ব ও সাফল্য
                </span>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  এসএসসি ও বোর্ড পরীক্ষার সাফল্য
                </h2>
                <p className="mt-2 text-slate-300 max-w-xl text-sm sm:text-base">
                  মাহমুদুল হাসান বিদ্যানিকেতনের শিক্ষার্থীরা প্রতি বছরই এসএসসি ও সমমানের বোর্ড পরীক্ষায় চমৎকার ফল অর্জন করে প্রতিষ্ঠানের সুনাম বয়ে আনছে।
                </p>
              </div>
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition"
              >
                একাডেমিক সাফল্য দেখুন <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {successStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="text-3xl font-black text-amber-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-bold text-white">{stat.label}</div>
                  <div className="mt-1 text-xs text-slate-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-10 py-10 lg:grid-cols-[1fr_.9fr]">
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
            {notices.map((notice) => (
              <div
                key={notice}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200 transition"
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
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 hover:border-emerald-200 transition"
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

      {/* Facebook Community & Alumni Banner */}
      <section className="container-site pb-20 pt-6">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" /> অফিশিয়াল সোশ্যাল কমিউনিটি
            </span>
            <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
              যুক্ত থাকুন আমাদের ফেসবুক গ্রুপ ও পেজে
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              মাহমুদুল হাসান বিদ্যানিকেতনের প্রাক্তন ও বর্তমান শিক্ষক, শিক্ষার্থী ও অভিভাবকদের অফিশিয়াল ফেসবুক গ্রুপে ২০,০০০+ সদস্য নিয়মিত তথ্য, স্কুলের খবর ও স্মৃতি শেয়ার করেন।
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> তাৎক্ষণিক নোটিশ ও আপডেট</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> কৃতি শিক্ষার্থী পরিচিতি</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> অ্যালামনাই নেটওয়ার্ক</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://www.facebook.com/groups/1979843445634332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition"
            >
              <Users className="h-4 w-4" />
              <span>ফেসবুক গ্রুপে যুক্ত হন</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552153681588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition"
            >
              <Facebook className="h-4 w-4 text-blue-600" />
              <span>অফিশিয়াল পেজ ফলো করুন</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

