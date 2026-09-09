export function Footer() {
  return (
    <footer className="bg-page border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/bp-logo.jpg"
              alt="B+P Beratung und Personal"
              className="h-12 w-auto"
            />
            <div className="text-xs text-ink-muted hidden sm:block">
              B+P Beratung und Personal
            </div>
          </div>

          <div className="flex gap-6 text-sm text-ink-soft">
            <a href="#" className="hover:text-accent">
              Impressum
            </a>
            <a href="#" className="hover:text-accent">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-line text-xs text-ink-muted">
          © {new Date().getFullYear()} b+p Beratung und Personal. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
