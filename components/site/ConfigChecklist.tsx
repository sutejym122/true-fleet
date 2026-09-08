"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { missingRequiredDetails } from "@/data/company";

/**
 * Shown only while running `npm run dev`. It lists the business details that
 * are still unset in data/company.ts, which is what payment gateways and banks
 * usually ask to see on the website before a merchant account is activated.
 * Nothing here is rendered in a production build.
 */
export function ConfigChecklist() {
  const [dismissed, setDismissed] = useState(false);
  const missing = missingRequiredDetails();

  if (dismissed || missing.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-md rounded-2xl border border-line bg-canvas p-5 shadow-[0_18px_48px_-18px_rgba(12,17,22,0.35)] sm:right-auto">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold text-ink">Before you deploy</p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="-m-1 rounded-full p-1 text-faint transition-colors hover:text-ink"
        >
          <span className="sr-only">Dismiss</span>
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        These details are still empty in <code className="text-ink">data/company.ts</code>, so they
        are hidden from the site. Most payment gateways require all of them.
      </p>
      <ul className="mt-3 space-y-1.5">
        {missing.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-graphite">
            <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-signal" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.6875rem] text-faint">
        This panel appears in development only.
      </p>
    </div>
  );
}
