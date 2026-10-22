"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-espresso lg:min-h-[88vh]">
      <Image
        src="/images/emma.jpeg"
        alt="RAINÉE UF:s kampanjbild"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-[50%_28%] md:object-[55%_32%] lg:object-[58%_35%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/40 via-espresso/10 to-transparent md:bg-gradient-to-r md:from-espresso/35 md:via-espresso/10 md:to-transparent" />
      <div className="page-pad relative mx-auto flex min-h-[78vh] max-w-site items-end pb-16 pt-24 lg:min-h-[88vh] lg:items-center lg:pb-0">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-ivory"
        >
          <p className="text-[11px] uppercase tracking-label text-champagne">Signaturkollektionen</p>
          <h1 className="mt-5 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-tight">
            Skydd för din handväska.
            <br />
            <em className="italic">Med stil.</em>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/80">
            Ett exklusivt, vattenavvisande skydd för handväskor — för dagar då regnet följer med.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ButtonLink href="/shop" className="bg-ivory text-espresso hover:bg-stone">
              Upptäck kollektionen
            </ButtonLink>
            <ButtonLink href="/our-story" variant="ghost" arrow>
              Utforska RAINÉE
            </ButtonLink>
          </div>
        </motion.div>
      </div>
      <p className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-label text-ivory/70 md:block">
        Höst / Vinter · 01
      </p>
    </section>
  );
}
