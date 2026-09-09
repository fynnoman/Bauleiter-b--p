import { images } from "../lib/content";

export function VisualBreak() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.break}
          alt="Bagger und Maschinenpark auf der Baustelle"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.02] tracking-tight text-white">
          Deine Baustelle.
          <br />
          Deine Mannschaft.
          <br />
          <span className="text-gold">Deine Verantwortung.</span>
        </h2>

        <p className="mt-10 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
          Von Deponieerweiterungen über Rekultivierungen bis zu anspruchsvollen
          Erd-, Tief- und Infrastrukturmaßnahmen.
        </p>
      </div>
    </section>
  );
}
