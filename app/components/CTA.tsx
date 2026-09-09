"use client";

import { useEffect } from "react";
import { brand, images } from "../lib/content";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const HS_SCRIPT_ID = "bp-hs-forms-embed";
const HS_TARGET = "#bp-hubspot-form";

function createForm() {
  const el = document.querySelector(HS_TARGET);
  if (el) el.innerHTML = "";
  window.hbspt?.forms.create({
    portalId: "8184088",
    formId: "a24fac61-4a46-45b3-9653-e72af2b46f63",
    region: "na1",
    target: HS_TARGET
  });
}

export function CTA() {
  useEffect(() => {
    if (window.hbspt) {
      createForm();
      return;
    }
    let script = document.getElementById(HS_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = HS_SCRIPT_ID;
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", createForm, { once: true });
    }
  }, []);

  return (
    <section id="kontakt" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.cta}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
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
            <div className="rounded-2xl bg-white p-6 md:p-8">
              <div id="bp-hubspot-form" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
