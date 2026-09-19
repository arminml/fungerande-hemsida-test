import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Vår historia",
  description: "RAINÉES berättelse — ett föremål för kvällen.",
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
              Ett föremål för <em className="italic">kvällen.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-3xl py-20 text-center md:py-28">
        <Reveal>
          <div className="gold-rule mx-auto" />
          <p className="mt-8 font-serif text-3xl leading-snug md:text-4xl">
            RAINÉE började med en fascination för ritualen att göra sig i ordning — den tysta stunden
            innan man lämnar hemmet, valet av sista detaljen, och steget ut i kvällen.
          </p>
        </Reveal>
      </section>

      <section className="page-pad mx-auto grid max-w-site gap-10 pb-20 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative aspect-[3/4] lg:col-span-5">
          <Image src={images.storyArchitecture.src} alt={images.storyArchitecture.alt} fill className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="label">01 / Ritualen</p>
          <h2 className="mt-4 font-serif text-4xl">Innan dörren stängs.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-mute">
            Platshållartext. RAINÉE är tänkt som ett litet hus för kvällens accessoarer: inte ett
            manifest, och inte en fabriksvisning. Intresset ligger i det sista föremålet man tar med
            sig — det som ska leva bredvid ett glas, en kappa, ett taxikvitto.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-mute">
            Kollektionen hålls medvetet kort. Ett fåtal silhuetter, ett fåtal färger, och samma idé
            som upprepar sig: ingenting ska tävla med natten själv.
          </p>
        </Reveal>
      </section>

      <section className="bg-stone py-20 md:py-28">
        <div className="page-pad mx-auto grid max-w-site gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-serif text-4xl leading-tight md:text-5xl">
              Tysta rum.
              <br />
              Varm sten.
              <br />
              <em className="italic">Ett bord för två.</em>
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
              Platshållaratmosfär — varumärket blickar mot europeiska kvällar snarare än en särskild
              ateljé, tillverkningsstad eller grundarnyt. De detaljerna återstår att skrivas.
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
          <p className="label">02 / Föremålet</p>
          <h2 className="mt-4 font-serif text-4xl">Liten nog att minnas.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-mute">
            En kuvertväska är inte bagage. Den ligger närmare smycket: skala, proportion och hur den
            känns i handen. RAINÉES modeller är ritade kring den idén — kompakta, färdiga, och menade
            att behållas snarare än bytas ut med nästa säsong.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[16/11] lg:col-span-7">
          <Image src={images.storyStreet.src} alt={images.storyStreet.alt} fill className="object-cover" />
        </Reveal>
      </section>
    </>
  );
}
