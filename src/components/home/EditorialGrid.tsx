import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function EditorialGrid() {
  const [a, b, c, d, e, f, g, h] = images.mood;

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="page-pad mx-auto max-w-site">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="label">RAINÉES värld</p>
              <p className="mt-2 font-serif text-3xl italic">Paris, 22:14</p>
            </div>
            <p className="hidden text-[10px] uppercase tracking-label text-mute sm:block">
              Kollektion 01 · Stämning
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-6 gap-2 md:gap-3">
          <figure className="relative col-span-6 aspect-[16/10] overflow-hidden md:col-span-4 md:row-span-2 md:aspect-auto md:min-h-[520px]">
            <Image src={a.src} alt={a.alt} fill className="object-cover" sizes="70vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {a.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-3 aspect-[3/4] overflow-hidden md:col-span-2">
            <Image src={b.src} alt={b.alt} fill className="object-cover" sizes="30vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {b.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-3 aspect-[3/4] overflow-hidden md:col-span-2">
            <Image src="/aestheticbilder/bild_22.jpeg" alt={c.alt} fill className="object-cover" sizes="30vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {c.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-2 aspect-square overflow-hidden md:col-span-2 md:aspect-[4/5]">
            <Image src="/aestheticbilder/bild_25.jpeg" alt={d.alt} fill className="object-cover" sizes="33vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {d.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-4 aspect-[4/3] overflow-hidden md:col-span-2 md:aspect-[4/5]">
            <Image src={e.src} alt={e.alt} fill className="object-cover" sizes="40vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {e.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-3 aspect-[3/4] overflow-hidden md:col-span-2 md:aspect-[4/5]">
            <Image src="/aestheticbilder/bild_28.jpeg" alt={f.alt} fill className="object-cover" sizes="33vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {f.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-3 overflow-hidden md:col-span-3 md:aspect-[16/10]">
            <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="50vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {g.caption}
            </figcaption>
          </figure>
          <figure className="relative col-span-6 aspect-[16/9] overflow-hidden md:col-span-3 md:aspect-[16/10]">
            <Image src={h.src} alt={h.alt} fill className="object-cover" sizes="50vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory">
              {h.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
