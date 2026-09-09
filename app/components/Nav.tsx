export function Nav() {
  return (
    <header className="border-b border-line bg-page">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center" aria-label="B+P Beratung und Personal">
          <img
            src="/bp-logo.jpg"
            alt="B+P Beratung und Personal"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        <a
          href="#kontakt"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
        >
          Kennenlernen
        </a>
      </div>
    </header>
  );
}
