import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Our Story",
  description: "The editorial story of RAINÉE — objects for the evening.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src={images.storyHero.src}
          alt={images.storyHero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/35" />
        <div className="page-pad relative mx-auto flex min-h-[72vh] max-w-site items-end pb-16">
          <div className="max-w-2xl text-ivory">
            <p className="text-[11px] uppercase tracking-label text-champagne">RAINÉE / Paris edit</p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,6vw,5rem)] font-normal leading-[0.95]">
              An object for the <em className="italic">evening.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-3xl py-20 text-center md:py-28">
        <Reveal>
          <div className="gold-rule mx-auto" />
          <p className="mt-8 font-serif text-3xl leading-snug md:text-4xl">
            RAINÉE began with a fascination for the ritual of getting ready — the quiet moment before
            leaving home, choosing the final piece, and stepping into the evening.
          </p>
        </Reveal>
      </section>

      <section className="page-pad mx-auto grid max-w-site gap-10 pb-20 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative aspect-[3/4] lg:col-span-5">
          <Image src={images.storyArchitecture.src} alt={images.storyArchitecture.alt} fill className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="label">01 / The ritual</p>
          <h2 className="mt-4 font-serif text-4xl">Before the door closes.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-mute">
            Placeholder copy. RAINÉE is imagined as a small evening accessories house: not a manifesto,
            and not a factory tour. The interest is the last object you pick up — the one that has to
            live beside a glass, a coat, a taxi receipt.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-mute">
            The collection is kept short on purpose. A handful of silhouettes, a handful of colours,
            and the same idea repeating: nothing competing with the night itself.
          </p>
        </Reveal>
      </section>

      <section className="bg-stone py-20 md:py-28">
        <div className="page-pad mx-auto grid max-w-site gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-serif text-4xl leading-tight md:text-5xl">
              Quiet rooms.
              <br />
              Warm stone.
              <br />
              <em className="italic">A table for two.</em>
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
              Placeholder atmosphere — the brand looks toward European evenings rather than a specific
              atelier, city of manufacture, or founding myth. Those details remain to be written.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={images.storyCafe.src} alt={images.storyCafe.alt} fill className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden">
              <Image src={images.storyDetail.src} alt={images.storyDetail.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-pad mx-auto grid max-w-site items-center gap-12 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="label">02 / The object</p>
          <h2 className="mt-4 font-serif text-4xl">Small enough to be remembered.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-mute">
            A clutch is not luggage. It is closer to jewellery: scale, proportion, and how it feels in
            the hand. RAINÉE’s pieces are drawn around that idea — compact, finished, and meant to be
            kept rather than replaced with the next season.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[16/11] lg:col-span-7">
          <Image src={images.storyStreet.src} alt={images.storyStreet.alt} fill className="object-cover" />
        </Reveal>
      </section>
    </>
  );
}
