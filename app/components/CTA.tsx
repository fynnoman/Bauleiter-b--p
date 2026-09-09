"use client";

import { useState } from "react";
import { brand, images } from "../lib/content";

export function CTA() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "junior",
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
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
            Dein nächster Schritt
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight text-white">
            Vielleicht ist es Zeit für eine
            <br />
            <span className="text-gold">Baustelle, bei der du länger</span>
            <br />
            <span className="text-white/60">bleibst als dein Navi.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Du bist dir noch nicht sicher, ob die Position zu dir passt? Musst
            du auch nicht. Hinterlasse uns deine Kontaktdaten und wir sprechen
            unverbindlich darüber, was dich erwartet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-6">
              So läuft es ab
            </div>
            <ol className="space-y-5">
              {brand.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 h-9 w-9 rounded-full bg-gold/15 ring-1 ring-gold/40 flex items-center justify-center text-gold font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 pt-1">
                    <div className="text-white font-semibold text-base">
                      {step.title}
                    </div>
                    <div className="text-white/60 text-sm mt-1 leading-relaxed">
                      {step.body}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                  Dein Ansprechpartner
                </div>
                <div className="text-white font-semibold text-base">
                  {brand.agency}
                </div>
              </div>
              <div className="space-y-2 pt-2">
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
                <div className="flex items-center gap-3 text-white/60">
                  <span className="text-gold">⌖</span>
                  {brand.contact.location}
                </div>
              </div>
            </div>
          </div>

          <div>
            {state === "done" ? (
              <div className="rounded-2xl bg-white p-10 text-center">
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
                  Deine Nachricht ist bei uns eingegangen. B+P meldet sich in
                  Kürze bei dir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-2xl bg-white p-7 md:p-9 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label="E-Mail"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>

                <Field
                  label="Telefon (optional)"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Dein Erfahrungsstand
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { v: "junior", l: "Junior" },
                      { v: "mitte", l: "Erfahren" },
                      { v: "senior", l: "Senior" }
                    ].map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => setForm({ ...form, experience: o.v })}
                        className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                          form.experience === o.v
                            ? "bg-accent text-white border-accent"
                            : "bg-page text-ink-soft border-line hover:border-ink-muted"
                        }`}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    placeholder="Was interessiert dich an der Position?"
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
                    : "Unverbindlich kennenlernen →"}
                </button>

                <p className="text-xs text-ink-muted leading-relaxed pt-1 text-center">
                  Keine vollständige Bewerbung notwendig. Deine Angaben werden
                  vertraulich behandelt und erst nach deiner Freigabe an den
                  Auftraggeber weitergegeben.
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
