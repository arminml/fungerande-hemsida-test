import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section className="page-pad mx-auto max-w-site py-20 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Kollektionen</p>
            <h2 className="mt-3 font-serif text-4xl font-normal md:text-5xl">Skydd med stil.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Vattenavvisande väsköverdrag som förenar funktion med en exklusiv känsla.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 hidden grid-cols-4 gap-8 lg:grid">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 0.06}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex gap-4 overflow-x-auto pb-4 hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible lg:hidden">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} className="min-w-[72vw] sm:min-w-[46vw] md:min-w-0" />
        ))}
      </div>
    </section>
  );
}
