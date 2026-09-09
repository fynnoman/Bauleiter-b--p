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

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          {job.eyebrow}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold leading-[1.02] text-white tracking-tight max-w-5xl">
          {job.headline1}
          <br />
          <span className="text-white/60">{job.headline2}</span>
          <br />
          <span className="text-gold">{job.headline3}</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-white/85 max-w-3xl leading-snug font-medium">
          {job.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base text-white/85 font-medium">
          {job.trustPoints.map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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

        <div className="mt-10">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-4 text-base font-bold hover:bg-white transition-colors"
          >
            Unverbindlich kennenlernen
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-sm text-white/60">
            Keine klassische Bewerbung notwendig. Erst einmal kennenlernen.
          </p>
        </div>
      </div>
    </section>
  );
}
