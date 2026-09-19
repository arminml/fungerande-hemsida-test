"use client";

import Image from "next/image";
import Link from "next/link";
import { getCartProduct, useCart } from "@/components/providers/CartProvider";
import { QuantitySelector } from "@/components/commerce/QuantitySelector";
import { ButtonLink } from "@/components/ui/button";
import { formatSek } from "@/lib/utils";

export default function BagPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <div className="page-pad mx-auto max-w-3xl py-16 md:py-24">
      <p className="label">Your bag</p>
      <h1 className="mt-3 font-serif text-5xl">Bag</h1>
      {items.length === 0 ? (
        <div className="mt-16">
          <p className="font-serif text-3xl">Your bag is currently empty.</p>
          <ButtonLink href="/shop" className="mt-8" arrow>
            Explore the collection
          </ButtonLink>
        </div>
      ) : (
        <>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {items.map((item) => {
              const product = getCartProduct(item);
              if (!product) return null;
              const color = product.colors.find((entry) => entry.id === item.colorId);
              return (
                <li key={item.id} className="grid grid-cols-[88px_1fr] gap-5 py-8">
                  <Link href={`/product/${product.slug}`} className="relative aspect-[3/4] bg-stone">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="88px" />
                  </Link>
                  <div>
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link href={`/product/${product.slug}`} className="font-serif text-2xl">
                          {product.name}
                        </Link>
                        <p className="mt-1 text-[12px] uppercase tracking-nav text-mute">{color?.name}</p>
                      </div>
                      <p className="text-sm">{formatSek(product.price * item.quantity)}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(quantity) => updateQuantity(item.id, quantity)}
                      />
                      <button
                        type="button"
                        className="text-[10px] uppercase tracking-label text-mute"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-label">Subtotal</span>
            <span>{formatSek(subtotal)}</span>
          </div>
          <p className="mt-2 text-sm text-mute">Shipping calculated at checkout.</p>
          <ButtonLink href="/shop" className="mt-8">
            Checkout
          </ButtonLink>
        </>
      )}
    </div>
  );
}
