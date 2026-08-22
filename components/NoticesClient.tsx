"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import {
  Megaphone,
  Calendar,
  Eye,
  Download,
  FileText,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  category: string;
  isImportant?: boolean;
  image?: string;
  description?: string;
}

const noticeData: NoticeItem[] = [
  {
    id: 1,
    title: "জরুরী ভর্তি ও পাঠদান সংক্রান্ত অফিসিয়াল বিজ্ঞপ্তি",
    date: "০৮ আগস্ট ২০২৬",
    category: "ভর্তি ও পাঠদান",
    isImportant: true,
    image: "/images/notice/notice.jpg",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতনের ভর্তি কার্যক্রম ও পাঠদান সংক্রান্ত সর্বশেষ অফিসিয়াল নোটিশ।",
  },
  {
    id: 2,
    title: "বার্ষিক পরীক্ষার সময়সূচি ও নির্দেশনা",
    date: "০৫ আগস্ট ২০২৬",
    category: "পরীক্ষা",
    isImportant: false,
    description:
      "আগামী মাসের বার্ষিক পরীক্ষা সংক্রান্ত সময়সূচি ও পরীক্ষার্থীদের জন্য গুরুত্বপূর্ণ নির্দেশাবলী।",
  },
  {
    id: 3,
    title: "অভিভাবক সমাবেশ ও মতবিনিময় সভা",
    date: "০১ আগস্ট ২০২৬",
    category: "সমাবেশ",
    isImportant: false,
    description:
      "শিক্ষার্থীদের সার্বিক অগ্রগতি নিয়ে সকল অভিভাবকদের উপস্থিতিতে মতবিনিময় সভার আয়োজন।",
  },
  {
    id: 4,
    title: "বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতার তারিখ ঘোষণা",
    date: "২৫ জুলাই ২০২৬",
    category: "ইভেন্ট",
    isImportant: false,
    description:
      "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ও দিনব্যাপী সাংস্কৃতিক অনুষ্ঠানের সময়সূচি।",
  },
  {
    id: 5,
    title: "জাতীয় দিবস উদযাপন ও বিশেষ ছুটি",
    date: "১৫ জুলাই ২০২৬",
    category: "ছুটি",
    isImportant: false,
    description:
      "জাতীয় দিবস উদযাপনে আলোচনা সভা ও পরবর্তী কার্যদিবসে স্বাভাবিক পাঠদান শুরুর বিজ্ঞপ্তি।",
  },
];

export default function NoticesClient() {
  const [selectedNoticeImage, setSelectedNoticeImage] = useState<string | null>(
    null,
  );
  const [selectedNoticeTitle, setSelectedNoticeTitle] = useState<string>("");
  const [zoomScale, setZoomScale] = useState<number>(1);

  const openImageModal = (imageSrc: string, title: string) => {
    setSelectedNoticeImage(imageSrc);
    setSelectedNoticeTitle(title);
    setZoomScale(1);
  };

  const closeImageModal = () => {
    setSelectedNoticeImage(null);
    setSelectedNoticeTitle("");
    setZoomScale(1);
  };

  const zoomIn = () => setZoomScale((prev) => Math.min(prev + 0.3, 3));
  const zoomOut = () => setZoomScale((prev) => Math.max(prev - 0.3, 0.8));
  const resetZoom = () => setZoomScale(1);
  const toggleZoom = () => setZoomScale((prev) => (prev === 1 ? 1.8 : 1));

  return (
    <>
      <PageHero
        title="নোটিশ বোর্ড"
        subtitle="মাহমুদুল হাসান বিদ্যানিকেতনের সকল গুরুত্বপূর্ণ বিজ্ঞপ্তি, সময়সূচি ও প্রশাসনিক নির্দেশনা।"
      />

      <section className="py-12 bg-slate-50 min-h-[65vh]">
        <div className="container-site space-y-10">
          {/* Featured Notice Banner with Image */}
          {noticeData
            .filter((n) => n.image)
            .map((featured) => (
              <div
                key={featured.id}
                className="overflow-hidden rounded-3xl bg-white border border-blue-100 shadow-xl grid md:grid-cols-12"
              >
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-extrabold text-red-700">
                        <Megaphone className="w-3.5 h-3.5" /> জরুরি নোটিশ
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {featured.date}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                      {featured.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={featured.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                    >
                      <ExternalLink className="w-4 h-4" /> নতুন ট্যাবে বড় করে
                      খুলুন
                    </a>
                    <a
                      href={featured.image}
                      download="MHB_Notice.jpg"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                    >
                      <Download className="w-4 h-4" /> ডাউনলোড
                    </a>
                  </div>
                </div>

                {/* Notice Image Preview Container */}
                <div
                  onClick={() =>
                    openImageModal(featured.image!, featured.title)
                  }
                  className="md:col-span-5 relative bg-slate-950 overflow-hidden cursor-pointer group min-h-[280px] flex items-center justify-center p-4"
                >
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="max-h-[340px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center"></div>
                </div>
              </div>
            ))}

          {/* All Notices List */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" /> সকল বিজ্ঞপ্তি ও
              সময়সূচি
            </h3>

            <div className="space-y-4">
              {noticeData.map((notice) => (
                <div
                  key={notice.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                        {notice.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        প্রকাশিত: {notice.date}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-800">
                      {notice.title}
                    </h4>
                    {notice.description && (
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {notice.description}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {notice.image ? (
                      <button
                        onClick={() =>
                          openImageModal(notice.image!, notice.title)
                        }
                        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> নোটিশ জুম করে দেখুন
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />{" "}
                        সময়সূচি
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal Lightbox with Full Zoom & Scroll Control */}
      {selectedNoticeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-2 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-5xl w-full h-[92vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Topbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/90 shrink-0">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-blue-600/30 text-blue-300 border border-blue-500/30 px-2.5 py-1 text-xs font-bold">
                  অফিসিয়াল নোটিশ
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {selectedNoticeTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedNoticeImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> নতুন উইন্ডোতে খুলুন
                </a>
                <button
                  onClick={closeImageModal}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                  title="বন্ধ করুন"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Interactive Zoom Toolbar */}
            <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={zoomIn}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow"
                  title="জুম ইন (+)"
                >
                  <ZoomIn className="w-4 h-4" /> বড় করুন (+)
                </button>
                <button
                  onClick={zoomOut}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition border border-slate-700"
                  title="জুম আউট (-)"
                >
                  <ZoomOut className="w-4 h-4" /> ছোট করুন (-)
                </button>
                <button
                  onClick={resetZoom}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition border border-slate-700"
                  title="রিসেট"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> রিসেট (
                  {Math.round(zoomScale * 100)}%)
                </button>
              </div>

              <span className="hidden md:inline-block text-slate-400 text-xs">
                💡 ছবির ওপর ক্লিক করেও বড় বা ছোট করে স্পষ্টভাবে পড়া যাবে
              </span>
            </div>

            {/* Modal Scrollable Image View */}
            <div className="flex-1 bg-black overflow-auto p-4 sm:p-8 flex items-start justify-center cursor-grab active:cursor-grabbing">
              <div
                className="transition-transform duration-200 ease-out origin-top flex justify-center"
                style={{ transform: `scale(${zoomScale})` }}
                onClick={toggleZoom}
              >
                <img
                  src={selectedNoticeImage}
                  alt={selectedNoticeTitle}
                  className="max-w-none w-[900px] sm:w-[1000px] h-auto object-contain rounded-lg shadow-2xl border border-slate-800 cursor-zoom-in"
                  title="ক্লিক করে বড় করুন"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
              <span>
                লেখাগুলো স্পষ্ট না মনে হলে "নতুন উইন্ডোতে খুলুন" অথবা "ডাউনলোড"
                করতে পারেন।
              </span>
              <a
                href={selectedNoticeImage}
                download="MHB_Notice.jpg"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 transition shadow"
              >
                <Download className="w-3.5 h-3.5" /> অফিশিয়াল নোটিশ ডাউনলোড
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
