import { images } from "../lib/content";

export function VisualBreak() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.break}
          alt="Zwei Bauleiter auf der Baustelle im Saarland"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Deine Baustelle.
          <br />
          Deine Truppe.
          <br />
          <span className="text-gold">Deine Verantwortung.</span>
        </h2>

        <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
          Deponieerweiterungen, Rekultivierungen, Erd-, Tief- und
          Infrastrukturmaßnahmen.
        </p>
      </div>
    </section>
  );
}
