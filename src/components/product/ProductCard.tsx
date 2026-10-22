"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { type Product } from "@/data/products";
import { formatSek, cn } from "@/lib/utils";
import { useCart } from "@/components/providers/CartProvider";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <article className={cn("group min-w-0", className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        <Link href={`/product/${product.slug}`} className="absolute inset-0 focus-ring">
          <Image
            src={product.image}
            alt={`${product.name} — produktbild`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <Image
            src={product.hoverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover object-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          <span className="sr-only">Visa {product.name}</span>
        </Link>
        {product.badge ? (
          <span className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-label text-ivory">
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 z-10 bg-ivory/95 py-2.5 text-[10px] uppercase tracking-label text-espresso opacity-0 transition-opacity duration-300 focus-ring group-hover:opacity-100 max-md:opacity-100"
          onClick={() => {
            addItem(product.slug, product.defaultColor);
            toast("Tillagd i varukorgen", { description: product.name });
          }}
        >
          Snabbköp
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl text-espresso md:text-[22px]">
            <Link href={`/product/${product.slug}`} className="focus-ring">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-[13px] text-mute">{formatSek(product.price)}</p>
        </div>
        <div className="mt-2 flex gap-1.5" aria-hidden>
          {product.colors.slice(0, 3).map((color) => (
            <span
              key={color.id}
              className="h-2.5 w-2.5 rounded-full border border-line"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
