import { tasksNew } from "../lib/content";

export function Tasks() {
  return (
    <section id="aufgaben" className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Was du hier bewegst
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Du bekommst Verantwortung,
            <br />
            <span className="text-accent">die man auch wirklich sieht.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Gemeinsam mit Oberbauleitung und Baustellenmannschaften steuerst du
            die praktische Umsetzung langfristiger Bauprojekte an den eigenen
            Standorten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasksNew.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-line p-6 hover:border-accent transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                <span className="text-sm font-extrabold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2 leading-snug">
                {t.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
