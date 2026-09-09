import { profileFits, profileNote } from "../lib/content";

export function Profile() {
  return (
    <section id="profil" className="bg-white border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Passt der Job zu dir?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-[1.1] tracking-tight">
            Kommst du aus dem Bau?
            <br />
            <span className="text-accent">Dann sollten wir sprechen.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Erfahrung im Deponiebau brauchst du nicht. Entscheidend ist, dass du
            Bauabläufe verstehst, Verantwortung übernehmen möchtest und Lust auf
            anspruchsvolle Projekte hast.
          </p>
        </div>

        <div className="rounded-2xl bg-page border border-line p-8">
          <div className="text-sm font-semibold text-ink mb-5">
            Besonders gut passt die Position, wenn du aus einem dieser Bereiche
            kommst:
          </div>
          <div className="flex flex-wrap gap-2">
            {profileFits.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-full bg-white border border-line px-4 py-2 text-sm font-medium text-ink"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-muted leading-relaxed max-w-2xl">
          {profileNote}
        </p>
      </div>
    </section>
  );
}
