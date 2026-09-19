"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/components/providers/CartProvider";

const popular = ["Kuvertväskor", "Kväll", "The Amélie", "Nyheter"];

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useCart();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const results = useMemo(() => searchProducts(query).slice(0, 4), [query]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ivory/97 backdrop-blur-[6px]" role="dialog" aria-modal="true" aria-label="Sök RAINÉE">
      <div className="page-pad mx-auto max-w-site pt-8">
        <div className="flex items-center justify-between">
          <p className="label">Sök</p>
          <button type="button" className="focus-ring" aria-label="Stäng sök" onClick={() => setSearchOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Sök RAINÉE"
          className="mt-10 w-full border-b border-line bg-transparent pb-4 font-serif text-4xl text-espresso outline-none placeholder:text-mute/50 md:text-6xl"
        />

        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-label text-mute">Populära sökningar</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {popular.map((term) => (
              <button
                key={term}
                type="button"
                className="font-serif text-xl italic text-espresso focus-ring"
                onClick={() => {
                  if (term === "The Amélie") {
                    setSearchOpen(false);
                    router.push("/product/the-amelie");
                    return;
                  }
                  setQuery(term);
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {query ? (
          <div className="mt-12">
            {results.length === 0 ? (
              <p className="text-mute">Inga modeller hittades.</p>
            ) : (
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {results.map((product) => (
                  <div key={product.slug} onClick={() => setSearchOpen(false)}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
