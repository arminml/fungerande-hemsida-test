import Image from "next/image";
import { products } from "@/data/products";
import { images } from "@/lib/images";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata = {
  title: "After Dark",
  description: "A collection for candlelit tables, late reservations and the hours that follow.",
};

export default function EveningCollectionPage() {
  const evening = products.filter((product) => product.categories.includes("evening"));

  return (
    <>
      <section className="relative min-h-[62vh] overflow-hidden">
        <Image
          src={images.eveningEdit.src}
          alt={images.eveningEdit.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="page-pad relative mx-auto flex min-h-[62vh] max-w-site items-end pb-14">
          <div className="max-w-xl text-ivory">
            <p className="text-[11px] uppercase tracking-label text-champagne">RAINÉE edit</p>
            <h1 className="mt-4 font-serif text-5xl font-normal md:text-6xl">After Dark</h1>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/80">
              A collection for candlelit tables, late reservations and the hours that follow.
            </p>
          </div>
        </div>
      </section>
      <div className="page-pad mx-auto max-w-site py-16 md:py-24">
        <ProductGrid products={evening} />
      </div>
    </>
  );
}
