"use client";

import { useState } from "react";
import { brand, images } from "../lib/content";

export function CTA() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/bewerbung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Fehler");
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="kontakt" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.cta}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5">
            Jetzt bewerben
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-white">
            Klingt gut?
            <br />
            <span className="text-gold">Dann bewirb dich online.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
            Nicht sicher, ob's passt? Musst du auch nicht. Fülle das Formular
            aus, wir melden uns telefonisch bei dir — danach entscheidest du.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">
              So geht's weiter
            </div>
            <ol className="space-y-4">
              {brand.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 h-8 w-8 rounded-full bg-gold/15 ring-1 ring-gold/40 flex items-center justify-center text-gold font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <div className="text-white font-semibold text-sm">
                      {step.title}
                    </div>
                    <div className="text-white/60 text-sm mt-0.5 leading-relaxed">
                      {step.body}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 pt-6 border-t border-white/10 space-y-2 text-sm">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-2">
                Direkt anrufen oder schreiben
              </div>
              <a
                href={`mailto:${brand.contact.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <span className="text-gold">✉</span>
                {brand.contact.email}
              </a>
              <a
                href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <span className="text-gold">☎</span>
                {brand.contact.phone}
              </a>
            </div>
          </div>

          <div>
            {state === "done" ? (
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 9l4 4 8-8"
                      stroke="#C88526"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Danke!</h3>
                <p className="text-sm text-ink-soft max-w-sm mx-auto">
                  Deine Bewerbung ist eingegangen. Wir melden uns telefonisch
                  bei dir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-2xl bg-white p-6 md:p-8 space-y-4"
              >
                <Field
                  label="Name"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Telefon"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <Field
                  label="E-Mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={3}
                    placeholder="Was machst du aktuell? Was interessiert dich?"
                    className="w-full rounded-lg bg-page border border-line px-4 py-3 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full rounded-full bg-gold text-ink py-4 text-base font-bold hover:bg-gold-dark hover:text-white disabled:opacity-60 transition-colors"
                >
                  {state === "sending"
                    ? "Wird gesendet …"
                    : "Bewerbung senden →"}
                </button>

                <p className="text-xs text-ink-muted leading-relaxed pt-1 text-center">
                  Kein Anschreiben nötig. Vertraulich behandelt. Weitergabe an
                  das Unternehmen erst nach deiner Freigabe.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink mb-2">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-page border border-line px-4 py-3 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
      />
    </div>
  );
}
