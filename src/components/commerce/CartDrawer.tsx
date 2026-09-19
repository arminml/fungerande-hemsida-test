"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button, ButtonLink } from "@/components/ui/button";
import { QuantitySelector } from "@/components/commerce/QuantitySelector";
import { getCartProduct, useCart } from "@/components/providers/CartProvider";
import { formatSek } from "@/lib/utils";

export function CartDrawer() {
  const { cartOpen, setCartOpen, items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="bg-ivory">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Din väska</SheetTitle>
          <button type="button" className="focus-ring" aria-label="Stäng väskan" onClick={() => setCartOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center px-8">
            <p className="font-serif text-3xl">Din väska är tom.</p>
            <ButtonLink href="/shop" className="mt-8" arrow onClick={() => setCartOpen(false)}>
              Upptäck kollektionen
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-8">
                {items.map((item) => {
                  const product = getCartProduct(item);
                  if (!product) return null;
                  const color = product.colors.find((entry) => entry.id === item.colorId);
                  return (
                    <li key={item.id} className="grid grid-cols-[72px_1fr] gap-4">
                      <div className="relative aspect-[3/4] bg-stone">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="72px" />
                      </div>
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-serif text-lg">{product.name}</p>
                            <p className="mt-1 text-[12px] uppercase tracking-nav text-mute">{color?.name}</p>
                          </div>
                          <p className="text-sm text-mute">{formatSek(product.price)}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <QuantitySelector
                            value={item.quantity}
                            onChange={(quantity) => updateQuantity(item.id, quantity)}
                          />
                          <button
                            type="button"
                            className="text-[10px] uppercase tracking-label text-mute hover:text-espresso focus-ring"
                            onClick={() => removeItem(item.id)}
                          >
                            Ta bort
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="border-t border-line px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-nav">Delsumma</span>
                <span>{formatSek(subtotal)}</span>
              </div>
              <p className="mt-2 text-[12px] text-mute">Frakt beräknas i kassan.</p>
              <Button className="mt-6 w-full" onClick={() => setCartOpen(false)}>
                Till kassan
              </Button>
              <Link
                href="/bag"
                className="mt-4 block text-center text-[11px] uppercase tracking-label text-mute hover:text-espresso"
                onClick={() => setCartOpen(false)}
              >
                Visa väska
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
