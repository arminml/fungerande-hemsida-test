"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast("Ange en giltig e-postadress");
      return;
    }
    toast("Anmälan är inte tillgänglig ännu", { description: "Din e-postadress har inte sparats." });
    setEmail("");
  };

  return (
    <section className="bg-ink text-ivory">
      <div className="page-pad mx-auto max-w-xl py-20 text-center md:py-24">
        <p className="text-[11px] uppercase tracking-label text-champagne">Nyheter från RAINÉE UF</p>
        <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">Håll dig uppdaterad.</h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          Anmälan till nyhetsbrevet är ännu inte tillgänglig.
        </p>
        <form onSubmit={onSubmit} className="mt-10 flex items-end gap-4">
          <label className="flex-1 text-left">
            <span className="sr-only">Din e-postadress</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Din e-postadress"
              className="w-full border-0 border-b border-ivory/25 bg-transparent py-3 text-sm text-ivory outline-none placeholder:uppercase placeholder:tracking-nav placeholder:text-ivory/40 focus:border-champagne"
              required
            />
          </label>
          <Button type="submit" className="bg-ivory text-espresso hover:bg-stone">
            Gå med
          </Button>
        </form>
      </div>
    </section>
  );
}
