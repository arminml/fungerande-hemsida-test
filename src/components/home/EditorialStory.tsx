import Image from "next/image";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

export function EditorialStory() {
  return (
    <section className="bg-stone">
      <div className="page-pad mx-auto grid max-w-site gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="relative lg:col-span-7">
          <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Image
              src="/aestheticbilder/bild_23.jpeg"
              alt={images.editorialLarge.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-label text-mute">02 / RAINÉE-kvinnan</p>
        </Reveal>

        <div className="relative lg:col-span-5 lg:pt-24">
          <Reveal delay={0.1}>
            <div className="relative mx-auto mb-10 aspect-[4/5] w-[70%] overflow-hidden lg:absolute lg:-left-16 lg:top-0 lg:w-[58%]">
              <Image
                src="/aestheticbilder/bild_29.jpeg"
                alt={images.editorialSmall.alt}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:mt-[58%]">
              <p className="label">RAINÉE-kvinnan</p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.05] md:text-5xl">
                Din handväska. <em className="italic">Din stil.</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
                RAINÉE skapades kring en enkel idé: det vi bär med oss ska kännas lika genomtänkt som
                stunderna vi klär oss för. Varje modell balanserar tidlösa silhuetter med modern femininitet.
              </p>
              <ButtonLink href="/our-story" variant="line" arrow className="mt-8">
                Vår historia
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
