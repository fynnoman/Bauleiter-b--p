import { images, job } from "../lib/content";

export function Hero() {
  return (
    <section id="top" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Baustelle im Saarland"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-14 pb-20 md:pt-16 md:pb-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          {job.eyebrow}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white tracking-tight">
          {job.headline1}
          <br />
          <span className="text-gold">{job.headline2}</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-snug">
          {job.subheadline}
        </p>

        <div className="mt-8">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-4 text-base font-bold hover:bg-white transition-colors"
          >
            Jetzt online bewerben
            <span aria-hidden>→</span>
          </a>
          <p className="mt-3 text-sm text-white/60">
            Kein Anschreiben, kein Lebenslauf nötig.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
          {job.trustPoints.map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7l3 3 7-7"
                  stroke="#EDA53F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
