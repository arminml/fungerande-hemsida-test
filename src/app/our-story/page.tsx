import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { storyImages as img } from "@/lib/ourStoryImages";

export const metadata = {
  title: "Om RAINÉE UF",
  description:
    "RAINÉE UF — sex 18-åringar från Kitas i Göteborg som gör eleganta regnskydd för handväskor.",
};

const body = "max-w-[65ch] text-[15px] leading-[1.8] text-mute";

export default function OurStoryPage() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src={img.hero.src}
          alt={img.hero.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-espresso/28" />
        <div className="page-pad relative mx-auto flex min-h-[72vh] max-w-site items-end pb-16">
          <div className="max-w-2xl text-ivory">
            <p className="text-[11px] uppercase tracking-label text-champagne">RAINÉE UF / Göteborg</p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,6vw,5.4rem)] font-normal leading-[0.95]">
              Om RAINÉE <em className="italic">UF</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-site py-20 md:py-28">
        <Reveal>
          <p className="label">Vår bakgrund</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.1] md:text-5xl">
            Sex personer. En stad som regnar. En idé som kom som en blixt från klar himmel.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className={body}>
              Rainée UF är ett UF-företag skapat av oss. Vi är sex drivna 18-åringar som går på Kitas
              Gymnasium och Kitas Ekonomi i Göteborg. Skolorna är en del av Kitas-trion och har ett så
              nära samarbete att vi som går där räknar dem som en.
            </p>
            <p className={`${body} mt-5`}>
              Vi går i två olika klasser: två av oss i E3B på ekonomiskolan och fyra av oss i E3C på
              Magasinsgatan. Vi sattes samman av UF-läraren Maria Lundström. Alla var först något
              förvånade över sammansättningen — men bara en timme senare visste vi att något stort var
              på gång.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="font-serif text-2xl leading-snug text-espresso md:text-[28px]">
              Först förvånade.
              <br />
              <em className="italic">Sedan övertygade.</em>
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-mute">
              Kitas Gymnasium · Kitas Ekonomi
              <br />
              E3B och E3C · Göteborg
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-pad mx-auto grid max-w-site items-end gap-8 pb-8 lg:grid-cols-12">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-stone lg:col-span-7 lg:aspect-[16/11]">
          <Image
            src={img.gothenburg.src}
            alt={img.gothenburg.alt}
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[3/4] overflow-hidden bg-stone lg:col-span-4 lg:col-start-9">
          <Image
            src={img.rainDetail.src}
            alt={img.rainDetail.alt}
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover"
          />
          <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-label text-ivory">
            02 / Göteborg
          </p>
        </Reveal>
      </section>

      <section className="page-pad mx-auto max-w-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="label lg:col-span-3">Hur idén kom</p>
          <Reveal className="lg:col-span-8">
            <p className={body}>
              Efter många om och men kom idén bakom Rainée UF som en blixt från klar himmel. Vi såg ett
              hål i marknaden som ännu inte hade fyllts. Många, precis som vi, upplever att det för det
              mesta regnar i vårt avlånga land. Speciellt i vår hemstad Göteborg.
            </p>
            <p className={`${body} mt-5`}>
              Tyvärr går det inte att ändra på vädret. När den där regnskuren som väderapparna inte hade
              varnat för kommer, är man sällan förberedd. Allt man håller kärt blir blött — inklusive
              sakerna i väskan man älskar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-20 md:py-28">
        <Reveal>
          <p className="page-pad mx-auto max-w-4xl font-serif text-[clamp(1.7rem,4vw,3.15rem)] font-normal leading-[1.2] text-espresso">
            Det är problemet många av oss upplever.
            <br />
            Det är problemet många av oss undviker.
            <br />
            Det är problemet Rainée UF vill lösa.
          </p>
        </Reveal>
      </section>

      <section className="page-pad mx-auto max-w-site py-20 md:py-28">
        <Reveal>
          <p className="label">Vår affärsidé</p>
          <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">Vår affärsidé</h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-stone lg:col-span-6">
            <Image
              src={img.handbag.src}
              alt={img.handbag.alt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[58%_35%]"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="text-[11px] tracking-label text-gold">01 / Skyddet</p>
            <h3 className="mt-3 font-serif text-3xl">Skydda det man redan älskar.</h3>
            <p className={`${body} mt-5`}>
              Vår affärsidé är att erbjuda stilrena, snygga och eleganta regnskydd till framför allt
              handväskor. Längre in i vårt UF-år vill vi även erbjuda skydd till större handväskor och
              weekendbags samt datorväskor.
            </p>
            <p className={`${body} mt-5`}>
              Genom att skydda en väska från till exempel vatten, smuts eller annan väta förlänger man
              livslängden och minskar därför nyproduktionen av väskor. Man skyddar även innehållet — så
              att mobil, hörlurar eller viktiga papper inte blir blöta när den oförväntade regnskuren
              kommer.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-3 md:gap-0">
          <Reveal className="md:border-r md:border-line md:pr-10">
            <p className="text-[11px] tracking-label text-gold">02 / Material &amp; format</p>
            <h3 className="mt-4 font-serif text-2xl">Tunt. Snabbtorkande. Lätt att ta med.</h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-mute">
              Rainées regnskydd kommer att vara tillverkade av vattentät polyester. Materialet är tunt
              och snabbtorkande, vilket gör det lätt att vika ihop och lägga ner i väskan efter
              användning.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-mute">
              Tanken är att det ska vara lika självklart att ha med sig sin Rainée när man går utanför
              dörren som att ta med sig nycklarna. Därför ska vi göra designen så smidig vi kan, utan
              att dra ner på kvaliteten.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="md:border-r md:border-line md:px-10">
            <p className="text-[11px] tracking-label text-gold">03 / Anpassningsbar</p>
            <h3 className="mt-4 font-serif text-2xl">Ett skydd. Flera väskor.</h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-mute">
              Skydden är justerbara, vilket gör att de går att anpassa till kundens favoritväska — eller
              till flera olika väskor. Man behöver alltså bara köpa ett, om man inte vill ha flera olika
              färger.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:pl-10">
            <p className="text-[11px] tracking-label text-gold">04 / Funktion</p>
            <h3 className="mt-4 font-serif text-2xl">Väskan ska fortfarande gå att använda.</h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-mute">
              Skydden är inte bara vattentäta och vackra, utan också funktionella. Med ett lock på
              toppen och fästen i väskan går det att öppna och använda väskan trots att Rainée sitter
              på.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-mute">
              Funktionaliteten i Rainée UF:s regnskydd är något banbrytande, då det är något liknande
              produkter helt saknar. Genom att kombinera detta med stil blir vår målgrupp mycket
              bredare och regnskyddet mer attraktivt på marknaden.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative min-h-[62vh] overflow-hidden">
        <Image
          src={img.functionBreak.src}
          alt={img.functionBreak.alt}
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="page-pad relative mx-auto flex min-h-[62vh] max-w-site items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-label text-champagne">Funktion möter stil</p>
            <h2 className="mt-4 font-serif text-5xl font-normal text-ivory md:text-6xl">
              Funktion möter <em className="italic">stil.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/80">
              Vattentätt, justerbart och tänkt att användas — inte gömmas undan när väskan ska öppnas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-site py-20 md:py-28">
        <Reveal>
          <p className="label">Hållbarhet</p>
          <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">Hållbarhet</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className={body}>
              Hållbarhet är A och O i dagens samhälle, och vi befinner oss just nu i ett kritiskt läge.
              Den globala uppvärmningen är ett faktum, men människan har inte alltid tid att lägga
              energi på det — det är en rad andra punkter som behöver lösas samtidigt.
            </p>
            <p className={`${body} mt-5`}>
              Många människor runt om i världen lever i extrem fattigdom och har mycket dåliga
              arbetsvillkor. Kanske inte just här i Sverige — men vi är en bidragande faktor.
              Majoriteten av världens textil- och läderindustri ligger utanför EU, där bristande
              miljöskydd och arbetsvillkor är vanligt. När vi till exempel köper en ny väska är risken
              stor att någon del av tillverkningen har skett i något av de mest utsatta länderna, vilket
              gör att vi bidrar till den onda cirkeln ändå.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[3/4] overflow-hidden bg-stone lg:col-span-4 lg:col-start-9">
            <Image
              src={img.textile.src}
              alt={img.textile.alt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-stone py-20 md:py-28">
        <div className="page-pad mx-auto grid max-w-site items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-ivory lg:col-span-5">
            <Image
              src={img.craft.src}
              alt={img.craft.alt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] tracking-label text-gold">Textil- och läderindustrin</p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">En av de största bovarna.</h3>
            <p className={`${body} mt-6`}>
              Textil- och läderindustrin är en av de största bovarna i dagens samhälle — inte bara ur
              ett ekologiskt perspektiv, utan även ur ett socialt. När man producerar en ny väska av
              läder får det massiva konsekvenser för vår jord.
            </p>
            <p className={`${body} mt-5`}>
              Läder är djurhud som bearbetas för att bli mjuk och tålig. Bearbetningen sker i flera
              steg: den konserveras, garvas, färgas, återfettas och ytbehandlas. Processen kräver
              ofattbara mängder kemikalier. Det finns ett naturligt och mer miljövänligt sätt att garva
              läder, men det brukar sällan ses som ett alternativ.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Material &amp; kemikalier</p>
            <h3 className="mt-4 font-serif text-3xl">Krom, och det som följer med.</h3>
            <p className="mt-6 text-[12px] leading-relaxed text-mute">
              Den mer detaljerade informationen om hur läder tillverkas kommer från
              Naturskyddsföreningen.
            </p>
          </div>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <p className={body}>
              Det vanligaste och billigaste sättet är med tungmetallen krom. Hela 90 procent av allt
              läder i världen har kromgarvats. Vid kromgarvning används en ofarlig typ av krom, krom 3.
              Vid felhantering kan det dock omvandlas till krom 6. Krom 6 är inte bara cancerogent och
              allergiframkallande, utan även farligt för miljön.
            </p>
            <p className={`${body} mt-5`}>
              Tungmetallen är inte den enda hälsofarliga kemikalien som används i läderindustrin.
              Biocider, formaldehyd och PFAS-ämnen är andra ämnen som också är cancerogena,
              allergiframkallande samt hormonstörande.
            </p>
            <p className={`${body} mt-5`}>
              Dessutom används sällan skyddsutrustning, och många fabriker renar inte sitt avloppsvatten.
              Kemikalierna kan då försvinna ut i vattendrag, med förödande konsekvenser för naturen och
              för dem som bor i närheten. Det har även visat sig att lungcancer är vanligare hos
              fabriksarbetarna än hos resten av befolkningen.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid items-center gap-12 border-t border-line pt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] tracking-label text-gold">Rainées perspektiv</p>
            <h3 className="mt-3 font-serif text-3xl">Förläng livet på väskan som redan finns.</h3>
            <p className={`${body} mt-6`}>
              Därför vill vi skydda väskor som redan är köpta. Om en väska håller längre behöver färre
              nya tillverkas — och innehållet i den klarar den regnskur väderapparna inte hade varnat
              för.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[16/10] overflow-hidden bg-stone lg:col-span-5 lg:col-start-8">
            <Image
              src={img.material.src}
              alt={img.material.alt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-20 border-t border-line pt-12">
          <p className="label">Läs mer</p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">
            Läs mer om läderindustrin och dess miljöpåverkan hos Naturskyddsföreningen.
          </p>
          <a
            href="https://www.naturskyddsforeningen.se/artiklar/sa-tillverkas-lader/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-label text-espresso focus-ring"
          >
            Läs mer hos Naturskyddsföreningen
            <ArrowUpRight
              className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              aria-hidden
            />
          </a>
        </div>
      </section>

      <section className="relative min-h-[48vh] overflow-hidden">
        <Image
          src={img.close.src}
          alt={img.close.alt}
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/35" />
        <div className="page-pad relative mx-auto flex min-h-[48vh] max-w-site items-end pb-14">
          <Reveal>
            <p className="max-w-2xl font-serif text-3xl leading-snug text-ivory md:text-4xl">
              Lika självklart som nycklarna när man går utanför dörren.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
