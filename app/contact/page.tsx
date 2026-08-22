import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "মাহমুদুল হাসান বিদ্যানিকেতনের ঠিকানা (আউটিয়া, ঘারিন্দা, টাঙ্গাইল), ফোন, ইমেইল ও যোগাযোগের সময়সূচি।",
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="যোগাযোগ"
        subtitle="যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
      />
      <section className="container-site grid gap-8 py-16 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-black">MHB Campus</h2>
          <div className="mt-6 space-y-5 text-slate-300">
            <p>📍 আউটিয়া, ঘারিন্দা, টাঙ্গাইল, বাংলাদেশ</p>
            <p>☎ 01700-000000</p>
            <p>✉ info@mhb.edu.bd</p>
            <p>🕘 শনি–বৃহস্পতি: সকাল ৯টা – বিকেল ৪টা</p>
          </div>
        </div>
        <form className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black">মেসেজ পাঠান</h2>
          <div className="mt-6 grid gap-4">
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="আপনার নাম"
            />
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="ইমেইল"
              type="email"
            />
            <textarea
              className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="আপনার মেসেজ"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              মেসেজ পাঠান
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
