"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["হোম", "/"], ["আমাদের সম্পর্কে", "/about"], ["প্রিন্সিপালের বার্তা", "/principal"],
  ["একাডেমিক", "/academics"], ["শিক্ষকবৃন্দ", "/teachers"], ["ইভেন্ট", "/events"],
  ["নোটিশ", "/notices"], ["গ্যালারি", "/gallery"], ["যোগাযোগ", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 font-black text-white">MHB</div>
          <div><div className="font-black text-slate-900">মাহমুদুর হাসান</div><div className="text-xs font-semibold text-slate-500">বিদ্যানিকেতন</div></div>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-slate-600 hover:text-blue-600">{label}</Link>)}
          <Link href="/admission" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700">ভর্তি আবেদন</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-xl border p-2 xl:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="border-t bg-white px-4 py-4 xl:hidden">
        <div className="container-site grid gap-2">
          {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-lg px-3 py-3 font-semibold hover:bg-slate-50">{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/admission" className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white">ভর্তি আবেদন</Link>
        </div>
      </nav>}
    </header>
  );
}