import { benefitsNew } from "../lib/content";

const iconPaths: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  site: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20V10l6-4 6 4v10" />
      <path d="M10 20v-5h4v5" />
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
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
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
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Was du davon hast
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Was du davon hast.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefitsNew.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-line p-7 hover:border-accent transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                <svg
                  width="22"
                  height="22"
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
              <h3 className="text-xl font-bold text-ink mb-2 leading-snug tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-line bg-white p-6 flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2F6DB3"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 13l2-5h11l3 3h2v5h-2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-ink">
              Dienstwagen möglich
            </div>
            <div className="text-sm text-ink-soft mt-0.5">
              Je nach Position und Erfahrung.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
