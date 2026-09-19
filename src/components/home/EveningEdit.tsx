import Image from "next/image";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/button";

export function EveningEdit() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src={images.eveningEdit.src}
        alt={images.eveningEdit.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/50" />
      <div className="page-pad relative mx-auto flex min-h-[70vh] max-w-site items-center">
        <div className="max-w-lg text-ivory">
          <p className="text-[11px] uppercase tracking-label text-champagne">Kvällens urval</p>
          <h2 className="mt-4 font-serif text-5xl font-normal md:text-6xl">Efter mörker.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ivory/80">
            Väskor formgivna för middagar som blir drinkar,
            <br className="hidden sm:block" /> och drinkar som blir berättelser.
          </p>
          <ButtonLink href="/collections/evening" className="mt-10 bg-ivory text-espresso hover:bg-stone">
            Handla urvalet
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
