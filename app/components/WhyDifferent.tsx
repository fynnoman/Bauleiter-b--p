import { whyDifferent } from "../lib/content";

export function WhyDifferent() {
  return (
    <section id="warum" className="bg-page">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Warum diese Stelle
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Was diese Stelle{" "}
            <span className="text-accent">besonders macht.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {whyDifferent.map((item) => (
            <div
              key={item.n}
              className="rounded-2xl bg-white border border-line p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-gold/15 flex items-center justify-center">
                  <span className="text-sm font-extrabold text-gold-dark">
                    {item.n}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink mb-2 leading-snug">
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
