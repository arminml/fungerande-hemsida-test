import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    n: "01",
    title: "Tidlös design",
    copy: "Modeller som överlever säsongerna.",
  },
  {
    n: "02",
    title: "Övervägda detaljer",
    copy: "Varje element har en anledning.",
  },
  {
    n: "03",
    title: "Skapade för tillfällen",
    copy: "Från bordsbokning till midnatt.",
  },
];

export function BrandPhilosophy() {
  return (
    <section className="page-pad mx-auto max-w-site py-24 text-center md:py-32">
      <Reveal>
        <div className="gold-rule mx-auto" />
        <h2 className="mt-8 font-serif text-4xl font-normal md:text-5xl">Formgiven att behållas.</h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-mute">
          Genomtänkta silhuetter. Övervägda detaljer.
          <br />
          Skapade för den här kvällen — och nästa.
        </p>
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.n} delay={index * 0.08} className="md:border-l md:border-line md:px-10 md:first:border-l-0">
            <p className="text-[11px] tracking-label text-gold">{pillar.n}</p>
            <h3 className="mt-4 text-[11px] uppercase tracking-label text-espresso">{pillar.title}</h3>
            <p className="mt-3 text-sm text-mute">{pillar.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
