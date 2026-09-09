import { whyDifferent } from "../lib/content";

export function WhyDifferent() {
  return (
    <section id="warum" className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Warum dieser Job anders ist
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Hier leitest du Baustellen.
            <br />
            <span className="text-accent">Nicht Papier.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Du arbeitest nicht ständig für wechselnde Auftraggeber an
            wechselnden Orten. Du entwickelst die eigenen Standorte langfristig
            weiter und hast direkten Einfluss darauf, wie gebaut wird.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyDifferent.map((item) => (
            <div
              key={item.n}
              className="rounded-2xl bg-white border border-line p-7 hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gold/15 flex items-center justify-center">
                  <span className="text-lg font-extrabold text-gold-dark">
                    {item.n}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
