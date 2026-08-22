"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  date?: string;
  description?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "প্রাক্তন শিক্ষার্থী - ২০১৩ ব্যাচ",
    category: "প্রাক্তন শিক্ষার্থী",
    src: "/images/gallery/2013_ssc_batch.jpg",
    date: "২০১৩",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতনের ২০১৩ ব্যাচের প্রাক্তন শিক্ষার্থীদের স্মৃতিময় চিত্র।",
  },
  {
    id: 2,
    title: "ফ্রি মেডিকেল ও স্বাস্থ্য ক্যাম্প",
    category: "স্বাস্থ্য ও সেবা",
    src: "/images/gallery/medical-camp.jpg",
    date: "২০২৬",
    description:
      "শিক্ষার্থী ও স্থানীয়দের স্বাস্থ্য সেবায় ফ্রি মেডিকেল ক্যাম্পের আয়োজন।",
  },
  {
    id: 3,
    title: "আমাদের শ্রদ্ধেয় শিক্ষকমণ্ডলী",
    category: "শিক্ষকমণ্ডলী",
    src: "/images/gallery/teachers.jpg",
    date: "২০২৬",
    description:
      "মাহমুদুল হাসান বিদ্যানিকেতনের নিবেদিতপ্রাণ শিক্ষক ও শিক্ষিকাবৃন্দ।",
  },
  {
    id: 4,
    title: "ফুটবল টুর্নামেন্টে চ্যাম্পিয়ন ও রানার্সআপ টিম",
    category: "ক্রীড়া",
    src: "/images/gallery/t-2.jpg",
    date: "২০২৬",
    description:
      "বিদ্যালয়ের বার্ষিক ফুটবল টুর্নামেন্টে অংশগ্রহণকারী খেলোয়াড় ও শিক্ষকমণ্ডলীর যৌথ মুহূর্ত।",
  },
  {
    id: 5,
    title: "আন্তঃশ্রেণী ফুটবল টুর্নামেন্ট খেলোয়াড়বৃন্দ",
    category: "ক্রীড়া",
    src: "/images/gallery/t-3.jpg",
    date: "২০২৬",
    description:
      "মাঠে ফুটবল প্রতিযোগিতা শেষে অংশগ্রহণকারী সকল শিক্ষার্থীদের বাঁধভাঙ্গা আনন্দের ছবি।",
  },
  {
    id: 6,
    title: "বিদ্যালয় ক্যাম্পাস ও পরিবেশ",
    category: "ক্যাম্পাস",
    src: "/images/campus.jpg",
    date: "২০২৬",
    description: "মনোমুগ্ধকর ও সুসংগঠিত শিক্ষাবান্ধব ক্যাম্পাস।",
  },
  {
    id: 7,
    title: "বার্ষিক ফুটবল টুর্নামেন্ট",
    category: "ক্রীড়া",
    src: "/images/gallery/football_tournament.jpg",
    date: "২০২৩",
    description:
      "বিদ্যালয়ের শিক্ষার্থীদের অংশগ্রহণে আয়োজিত আনন্দঘন ফুটবল টুর্নামেন্ট",
  },
];

const categories = [
  "সব",
  "শিক্ষকমণ্ডলী",
  "প্রাক্তন শিক্ষার্থী",
  "ক্রীড়া",
  "সাংস্কৃতিক",
  "স্বাস্থ্য ও সেবা",
  "ক্যাম্পাস",
];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "সব"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filteredItems.length) % filteredItems.length,
      );
    }
  };

  const activeItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <>
      <PageHero
        title="ফটো গ্যালারি"
        subtitle="মাহমুদুল হাসান বিদ্যানিকেতনের বিভিন্ন ইভেন্ট, ক্রীড়া, সাংস্কৃতিক কর্মকাণ্ড ও স্মরণীয় মুহূর্ত।"
      />

      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="container-site">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="flex items-center gap-1 text-sm font-semibold text-slate-500 mr-2">
              <Filter className="w-4 h-4" /> ফিল্টার:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg backdrop-blur">
                      <ZoomIn className="h-4 w-4" /> বড় করে দেখুন
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 rounded-lg bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.date && (
                    <p className="mt-4 text-xs font-semibold text-slate-400">
                      সাল: {item.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={showPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-3 text-white hover:bg-blue-600 transition shadow-lg backdrop-blur"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-3 text-white hover:bg-blue-600 transition shadow-lg backdrop-blur"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Description */}
            {activeItem.description && (
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-sm text-slate-300 flex justify-between items-center">
                <p>{activeItem.description}</p>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedIndex! + 1} / {filteredItems.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
