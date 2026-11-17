"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/data/products";
import { formatSek } from "@/lib/utils";
import { ColorSelector } from "@/components/product/ColorSelector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function SignatureProduct() {
  const product = getProduct("the-amelie");
  const [color, setColor] = useState(product?.defaultColor ?? "espresso");

  if (!product) return null;

  return (
    <section className="page-pad mx-auto grid max-w-site items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="50vw" />
        <span className="absolute left-4 top-4 text-[10px] uppercase tracking-label text-ivory">01 / Signatur</span>
      </div>
      <div>
        <p className="label">Signaturen</p>
        <h2 className="mt-3 font-serif text-5xl font-normal">{product.name}</h2>
        <p className="mt-3 text-sm text-mute">{formatSek(product.price)}</p>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">{product.description}</p>
        {!product.hideOptions && (
          <div className="mt-8 max-w-xs">
            <ColorSelector colors={product.colors} value={color} onChange={setColor} />
          </div>
        )}
        {product.buyUrl ? (
          <a
            href={product.buyUrl}
            className="group mt-8 inline-flex items-center justify-center gap-3 bg-espresso px-7 py-3.5 text-[11px] uppercase tracking-label text-ivory transition-colors duration-300 hover:bg-ink focus-ring"
          >
            Lägg i varukorgen
          </a>
        ) : (
          <Button className="mt-8">Lägg i varukorgen</Button>
        )}
        <Accordion type="single" collapsible className="mt-10 max-w-md">
          <AccordionItem value="details">
            <AccordionTrigger>Detaljer</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="materials">
            <AccordionTrigger>Material & skötsel</AccordionTrigger>
            <AccordionContent>{product.materials}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Frakt & returer</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  Frakt: Vi levererar inom Sverige med PostNord. Fraktkostnaden är 61 SEK per
                  beställning och visas i kassan. Leveranstiden är 1–2 vardagar efter att ditt
                  paket skickats.
                </p>
                <p>
                  Returer: Du har 14 dagars ångerrätt, som börjar när du har fått varan. Meddela
                  oss på rainee.uf@hotmail.com inom 14 dagar och skicka tillbaka varan väl
                  förpackad och i oanvänt skick. Du står själv för returfrakten. Vi återbetalar
                  det du har betalat, inklusive ursprunglig frakt, med Swish.
                </p>
                <p>
                  <Link href="/kopvillkor" className="underline underline-offset-4">
                    Läs alla köpvillkor
                  </Link>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
