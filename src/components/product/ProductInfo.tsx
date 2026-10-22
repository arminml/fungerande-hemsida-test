"use client";

import { useState } from "react";
import { toast } from "sonner";
import { type Product } from "@/data/products";
import { formatSek } from "@/lib/utils";
import { ColorSelector } from "@/components/product/ColorSelector";
import { QuantitySelector } from "@/components/commerce/QuantitySelector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/CartProvider";

export function ProductInfo({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.defaultColor);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="lg:sticky lg:top-28">
      <p className="label">RAINÉE</p>
      <h1 className="mt-3 font-serif text-4xl font-normal leading-none text-espresso md:text-5xl">
        {product.name}
      </h1>
      <p className="mt-4 text-sm tracking-wide text-mute">{formatSek(product.price)}</p>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">{product.description}</p>

      <div className="mt-8">
        <ColorSelector colors={product.colors} value={color} onChange={setColor} />
      </div>

      <div className="mt-8">
        <p className="mb-3 text-[11px] uppercase tracking-label text-mute">Antal</p>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            addItem(product.slug, color, quantity);
            toast("Tillagd i varukorgen", { description: product.name });
          }}
        >
          Lägg i varukorgen
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => {
            addItem(product.slug, color, quantity);
            toast("Redo för kassan", { description: "Platshållare för kassa." });
          }}
        >
          Köp nu
        </Button>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        <AccordionItem value="description">
          <AccordionTrigger>Beskrivning</AccordionTrigger>
          <AccordionContent>{product.longDescription}</AccordionContent>
        </AccordionItem>
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
            Fri frakt på beställningar över 1 500 SEK. Returer accepteras inom 14 dagar, oanvända
            och i ursprungligt skick. Platshållartext för villkor.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
