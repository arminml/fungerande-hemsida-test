import { type Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8", className)}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
