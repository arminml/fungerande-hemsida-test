"use client";

import { useMemo, useState } from "react";
import { filterProducts, type ProductCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

const filters: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "clutches", label: "Clutches" },
  { id: "evening", label: "Evening" },
  { id: "signature", label: "Signature" },
  { id: "new", label: "New" },
];

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [category, setCategory] = useState<"all" | ProductCategory>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const products = useMemo(() => {
    const list = [...filterProducts(category)];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort]);

  return (
    <div className="page-pad mx-auto max-w-site pb-24 pt-12 md:pt-16">
      <p className="label">Shop</p>
      <h1 className="mt-3 font-serif text-5xl font-normal md:text-6xl">The Collection</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute">
        Evening clutches and considered accessories — made to be held through dinner, drinks, and the walk home.
      </p>

      <div className="mt-10 flex flex-col gap-6 border-y border-line py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-5" aria-label="Filter">
          <span className="text-[11px] uppercase tracking-label text-mute">Filter</span>
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
          Sort by
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="bg-transparent text-espresso outline-none focus-ring"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <ProductGrid products={products} className="mt-12" />
    </div>
  );
}
