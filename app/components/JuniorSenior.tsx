import { juniorSenior } from "../lib/content";

export function JuniorSenior() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Junior oder erfahren
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-[1.1] tracking-tight">
            {juniorSenior.intro}
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            {juniorSenior.paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div className="mt-10 rounded-2xl bg-page border border-line p-8 text-center">
          <p className="text-xl md:text-2xl font-extrabold text-ink leading-snug tracking-tight">
            Das Ziel ist dasselbe:{" "}
            <span className="text-accent">
              deine eigenen Projekte, deine eigene Verantwortung.
            </span>
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
      className={`rounded-2xl border p-8 ${
        isGold ? "bg-gold/10 border-gold/40" : "bg-accent/5 border-accent/30"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${
          isGold ? "text-gold-dark" : "text-accent"
        }`}
      >
        {isGold ? "Weg 1" : "Weg 2"}
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-ink leading-tight mb-5 tracking-tight">
        {label}
      </h3>
      <p className="text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
