import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-black text-slate-950">MHB</div><div className="font-bold text-white">মাহমুদুর হাসান বিদ্যানিকেতন</div></div><p className="mt-5 max-w-md text-sm leading-7 text-slate-400">আউটিয়া, ঘারিন্দা, টাঙ্গাইল। জ্ঞান, শৃঙ্খলা ও মানবিক মূল্যবোধের সমন্বয়ে শিক্ষার্থী গড়ে তোলাই আমাদের লক্ষ্য।</p></div>
        <div><h3 className="font-bold text-white">দ্রুত লিংক</h3><div className="mt-4 grid gap-3 text-sm"><Link href="/about">আমাদের সম্পর্কে</Link><Link href="/admission">ভর্তি</Link><Link href="/notices">নোটিশ</Link><Link href="/contact">যোগাযোগ</Link></div></div>
        <div><h3 className="font-bold text-white">যোগাযোগ</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><p>📍 আউটিয়া, ঘারিন্দা, টাঙ্গাইল</p><p>☎ 01700-000000</p><p>✉ info@mhb.edu.bd</p></div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between container-site gap-2">
        <span>© 2026 MHB — মাহমুদুর হাসান বিদ্যানিকেতন। সর্বস্বত্ব সংরক্ষিত।</span>
        <span>Developed by <a href="https://www.facebook.com/nafis.chonchol/" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-medium hover:underline hover:text-white transition-colors">Nafis Chonchol</a></span>
      </div>
    </footer>
  );
}