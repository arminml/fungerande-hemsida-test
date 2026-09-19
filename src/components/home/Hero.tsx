"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-espresso lg:min-h-[88vh]">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_20%] opacity-90"
      />
      <div className="absolute inset-0 bg-espresso/40" />
      <div className="page-pad relative mx-auto flex min-h-[78vh] max-w-site items-end pb-16 pt-24 lg:min-h-[88vh] lg:items-center lg:pb-0">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-ivory"
        >
          <p className="text-[11px] uppercase tracking-label text-champagne">The signature collection</p>
          <h1 className="mt-5 font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-tight">
            Made for the moments
            <br />
            <em className="italic">you remember.</em>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/80">
            Timeless clutches designed to accompany evenings, celebrations and everything in between.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ButtonLink href="/shop" className="bg-ivory text-espresso hover:bg-stone">
              Discover the collection
            </ButtonLink>
            <ButtonLink href="/our-story" variant="ghost" arrow>
              Explore RAINÉE
            </ButtonLink>
          </div>
        </motion.div>
      </div>
      <p className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-label text-ivory/70 md:block">
        Autumn / Winter · 01
      </p>
    </section>
  );
}
