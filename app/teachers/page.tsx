import PageHero from "@/components/PageHero";

const teachers = [
  "মোঃ নজরুল ইসলাম (Md Najrul Islam)",
  "মোঃ আলাউদ্দিন (Md. Alauddin)",
  "মোঃ আজাদ (MD. Azad)",
  "মোছাঃ নাজমা (MST. Najma)",
];

export default function Teachers() {
  return (
    <>
      <PageHero
        title="শিক্ষকবৃন্দ"
        subtitle="আমাদের নিবেদিত শিক্ষক ও কর্মীদের সঙ্গে পরিচিত হোন।"
      />
      <section className="container-site grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t, i) => (
          <div key={t} className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="h-48 rounded-2xl bg-slate-100" />
            <h2 className="mt-5 font-bold">{t}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {
                [
                  "সহকারী শিক্ষক",
                  "সহকারী শিক্ষক",
                  "সহকারী শিক্ষক",
                  "সহকারী শিক্ষক",
                ][i % 4]
              }
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
