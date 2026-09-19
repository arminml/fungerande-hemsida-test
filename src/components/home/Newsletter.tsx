"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast("Please enter a valid email");
      return;
    }
    toast("You are on the list", { description: "A placeholder confirmation." });
    setEmail("");
  };

  return (
    <section className="bg-ink text-ivory">
      <div className="page-pad mx-auto max-w-xl py-20 text-center md:py-24">
        <p className="text-[11px] uppercase tracking-label text-champagne">Private list</p>
        <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">Stay a little longer.</h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          New collections, private releases and stories from the world of RAINÉE.
        </p>
        <form onSubmit={onSubmit} className="mt-10 flex items-end gap-4">
          <label className="flex-1 text-left">
            <span className="sr-only">Your email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full border-0 border-b border-ivory/25 bg-transparent py-3 text-sm text-ivory outline-none placeholder:uppercase placeholder:tracking-nav placeholder:text-ivory/40 focus:border-champagne"
              required
            />
          </label>
          <Button type="submit" className="bg-ivory text-espresso hover:bg-stone">
            Join
          </Button>
        </form>
      </div>
    </section>
  );
}
