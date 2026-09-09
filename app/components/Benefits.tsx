import { benefitsNew } from "../lib/content";

const iconPaths: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M15 20c0-2 2-3.5 4-3.5s2 1.5 2 3.5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  )
};

export function Benefits() {
  return (
    <section id="benefits" className="bg-page">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Was du davon hast
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Kurz gesagt.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {benefitsNew.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-line p-5 hover:border-accent transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C88526"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconPaths[b.icon]}
                </svg>
              </div>
              <h3 className="text-base font-bold text-ink mb-1 leading-snug tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          Dienstwagen je nach Position und Erfahrung möglich.
        </p>
      </div>
    </section>
  );
}
