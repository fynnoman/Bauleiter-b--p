import { tasksNew } from "../lib/content";

export function Tasks() {
  return (
    <section id="aufgaben" className="bg-page">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Was du machst
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Deine Baustelle,{" "}
            <span className="text-accent">deine Entscheidungen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tasksNew.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-line p-5 hover:border-accent transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                <span className="text-xs font-extrabold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-bold text-ink mb-1.5 leading-snug">
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
