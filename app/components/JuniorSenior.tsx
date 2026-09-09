import { juniorSenior, profileFits } from "../lib/content";

export function JuniorSenior() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Passt zu dir?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-[1.1] tracking-tight">
            {juniorSenior.intro}
          </h2>
          <p className="mt-5 text-base text-ink-soft leading-relaxed">
            {juniorSenior.paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <PathCard
            label={juniorSenior.junior.label}
            body={juniorSenior.junior.body}
            variant="gold"
          />
          <PathCard
            label={juniorSenior.senior.label}
            body={juniorSenior.senior.body}
            variant="blue"
          />
        </div>

        <div className="mt-8 rounded-2xl bg-page border border-line p-6">
          <div className="text-sm font-semibold text-ink mb-3">
            Aus einem dieser Bereiche? Dann meld dich einfach:
          </div>
          <div className="flex flex-wrap gap-2">
            {profileFits.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-full bg-white border border-line px-3.5 py-1.5 text-sm font-medium text-ink"
              >
                {f}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Erfahrung im Deponiebau brauchst du nicht.
          </p>
        </div>
      </div>
    </section>
  );
}

function PathCard({
  label,
  body,
  variant
}: {
  label: string;
  body: string;
  variant: "gold" | "blue";
}) {
  const isGold = variant === "gold";
  return (
    <div
      className={`rounded-2xl border p-6 ${
        isGold ? "bg-gold/10 border-gold/40" : "bg-accent/5 border-accent/30"
      }`}
    >
      <h3 className="text-lg md:text-xl font-extrabold text-ink leading-tight mb-3 tracking-tight">
        {label}
      </h3>
      <p className="text-sm text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
