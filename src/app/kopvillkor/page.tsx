import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Köpvillkor",
};

const companyInfo = [
  ["Företagsnamn", "Rainée UF"],
  ["UF-registreringsnummer", "1662079"],
  ["Adress", "Magasinsgatan 3"],
  ["E-post", "Rainee.uf@hotmail.com"],
  ["Telefon", "+46 72-858 48 14"],
];

const h2 = "scroll-mt-28 font-serif text-3xl font-normal text-espresso md:text-4xl";
const p = "mt-4 text-[15px] leading-relaxed text-mute";

export default function KopvillkorPage() {
  return (
    <div className="page-pad mx-auto max-w-3xl pb-24 pt-12 md:pt-16">
      <p className="label">Kundservice</p>
      <h1 className="mt-3 font-serif text-5xl font-normal md:text-6xl">Köpvillkor</h1>
      <p className={p}>
        Dessa villkor gäller när du som privatperson köper regnskydd för väskor i Rainée UF:s
        webbutik.
      </p>

      <section className="mt-14">
        <h2 id="foretagsinformation" className={h2}>Företagsinformation</h2>
        <p className={p}>
          Webbutiken drivs av Rainée UF, ett UF-företag inom Ung Företagsamhet. Ett UF-företag är
          ett övningsföretag som drivs av gymnasieelever under ett läsår.
        </p>
        <table className="mt-6 w-full border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-label text-mute">
              <th className="py-3 pr-6 font-normal">Uppgift</th>
              <th className="py-3 font-normal">Information</th>
            </tr>
          </thead>
          <tbody>
            {companyInfo.map(([label, value]) => (
              <tr key={label} className="border-b border-line">
                <td className="py-3 pr-6 text-mute">{label}</td>
                <td className="py-3 text-espresso">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-14">
        <h2 id="priser-och-betalning" className={h2}>Priser och betalning</h2>
        <p className={p}>
          Alla priser anges i svenska kronor (SEK). Totalpriset för din beställning, inklusive
          frakt, visas i kassan innan du slutför köpet. Priset som gäller är det som visades när du
          la din beställning.
        </p>
        <p className={p}>
          Betalning sker i förskott med Swish. När du har lagt din beställning swishar du
          totalbeloppet till vårt Swish-nummer 123 703 48 04 och skriver ordernumret i meddelandet.
          Vi skickar din beställning när vi har tagit emot betalningen. Har betalningen inte kommit
          in inom 7 dagar avbryter vi beställningen.
        </p>
      </section>

      <section className="mt-14">
        <h2 id="leverans" className={h2}>Leverans</h2>
        <p className={p}>
          Vi levererar inom Sverige med PostNord. Fraktkostnaden är 61 SEK per beställning och
          visas i kassan. Leveranstiden är 1–2 vardagar efter att ditt paket skickats.
        </p>
        <p className={p}>
          Om inget annat anges levererar vi inom 30 dagar från din beställning. Blir leveransen
          försenad meddelar vi dig via e-post. Dröjer leveransen mer än 30 dagar har du rätt att
          häva köpet.
        </p>
      </section>

      <section className="mt-14">
        <h2 id="angerratt-och-returer" className={h2}>Ångerrätt och returer</h2>
        <p className={p}>
          Du har 14 dagars ångerrätt. Fristen börjar när du har fått varan. För att ångra ditt köp
          skickar du ett tydligt meddelande till rainee.uf@hotmail.com inom 14 dagar. Du behöver
          inte ange någon anledning.
        </p>
        <p className={p}>
          Skicka tillbaka varan utan onödigt dröjsmål, senast 14 dagar efter att du meddelat oss.
          Varan ska vara väl förpackad och i oanvänt skick. Du står själv för returfrakten. Skicka
          returen som brev eller paket, inte mot postförskott, till: Ärlevägen 15, Floda
        </p>
        <p className={p}>Rainée UF, Ärlevägen 15, Floda</p>
        <p className={p}>
          Vi återbetalar det du har betalat, inklusive ursprunglig frakt, senast 14 dagar efter att
          vi tog emot ditt meddelande om ångrat köp. Vi kan vänta med återbetalningen tills vi har
          fått tillbaka varan. Återbetalningen sker med Swish till det nummer du betalade från.
        </p>
      </section>

      <section className="mt-14">
        <h2 id="reklamation" className={h2}>Reklamation</h2>
        <p className={p}>
          Är varan felaktig, skadad eller har vi skickat fel vara har du enligt konsumentköplagen
          rätt att reklamera i tre år. Meddela oss via e-post inom skälig tid efter att du upptäckte
          felet. En reklamation inom två månader från att du upptäckte felet är alltid i tid.
        </p>
        <p className={p}>
          Vid berättigad reklamation står vi för returfrakten, och du får en ny vara, en reparation
          eller pengarna tillbaka.
        </p>
      </section>

      <section className="mt-14">
        <h2 id="personuppgifter" className={h2}>Personuppgifter</h2>
        <p className={p}>
          När du beställer behandlar vi ditt namn, din adress, e-postadress och ditt telefonnummer.
          Vi använder uppgifterna för att hantera din beställning, skicka varan och kontakta dig vid
          frågor. Vi sparar dem bara så länge som det behövs för detta, och lämnar dem inte vidare
          förutom till den som levererar paketet.
        </p>
        <p className={p}>
          Enligt dataskyddsförordningen (GDPR) har du rätt att få veta vilka uppgifter vi har om
          dig, och att begära rättelse eller radering. Kontakta oss på rainee.uf@hotmail.com, Du kan
          också lämna klagomål till Integritetsskyddsmyndigheten.
        </p>
      </section>

      <section className="mt-14">
        <h2 id="tvister-och-kontakt" className={h2}>Tvister och kontakt</h2>
        <p className={p}>
          Vi önskar att alla köp ska gå bra. Hör av dig först till oss på rainee.uf@hotmail.com så
          försöker vi lösa det. Kommer vi inte överens kan du vända dig till Allmänna
          reklamationsnämnden. Allmän information om konsumenträtt finns hos Konsumentverket.
        </p>
      </section>
    </div>
  );
}
