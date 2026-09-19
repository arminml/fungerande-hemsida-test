"use client";

import { useMemo, useState } from "react";
import { filterProducts, type ProductCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

const filters: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "Alla" },
  { id: "clutches", label: "Kuvertväskor" },
  { id: "evening", label: "Kväll" },
  { id: "signature", label: "Signatur" },
  { id: "new", label: "Nyheter" },
];

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [category, setCategory] = useState<"all" | ProductCategory>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const products = useMemo(() => {
    const list = [...filterProducts(category)];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "sv"));
    return list;
  }, [category, sort]);

  return (
    <div className="page-pad mx-auto max-w-site pb-24 pt-12 md:pt-16">
      <p className="label">Butik</p>
      <h1 className="mt-3 font-serif text-5xl font-normal md:text-6xl">Kollektionen</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute">
        Kuvertväskor och genomtänkta accessoarer — att hålla i genom middagen, drinkarna och vägen hem.
      </p>

      <div className="mt-10 flex flex-col gap-6 border-y border-line py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-5" aria-label="Filtrera">
          <span className="text-[11px] uppercase tracking-label text-mute">Filtrera</span>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setCategory(filter.id)}
              className={`text-[11px] uppercase tracking-nav focus-ring ${
                category === filter.id ? "text-gold" : "text-espresso"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-[11px] uppercase tracking-label text-mute">
          Sortera
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="bg-transparent text-espresso outline-none focus-ring"
          >
            <option value="featured">Utvalda</option>
            <option value="price-asc">Pris, lägst först</option>
            <option value="price-desc">Pris, högst först</option>
            <option value="name">Namn</option>
          </select>
        </label>
      </div>

      <ProductGrid products={products} className="mt-12" />
    </div>
  );
}
