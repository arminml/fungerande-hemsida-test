import { images } from "@/lib/images";

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductCategory = "clutches" | "evening" | "signature" | "new";

export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  details: string[];
  materials: string;
  colors: ProductColor[];
  defaultColor: string;
  categories: ProductCategory[];
  image: string;
  hoverImage: string;
  gallery: string[];
  badge?: "Nyhet" | "Bästsäljare";
};

export const colors: Record<string, ProductColor> = {
  espresso: { id: "espresso", name: "Espresso", hex: "#3A2C24" },
  ivory: { id: "ivory", name: "Ivory", hex: "#E8E0D4" },
  black: { id: "black", name: "Svart", hex: "#161412" },
  champagne: { id: "champagne", name: "Champagne", hex: "#D7C89A" },
};

export const products: Product[] = [
  {
    slug: "the-amelie",
    name: "The Amélie",
    price: 1495,
    description:
      "En skulptural kuvertväska byggd kring en ren silhuett och återhållna detaljer.",
    longDescription:
      "The Amélie är RAINÉES signaturform — en kompakt kuvertväska med en stillsam kurva, ett diskret spänne och en närvaro som inte behöver höja rösten. Den är till för att hållas, ställas ner och bäras vidare genom en lång kväll.",
    details: [
      "Strukturerad kuvertväska med dold magnetstängning",
      "Inre slip-ficka",
      "Valfri kedjerem, 48 cm fall",
      "Mått: 22 × 13 × 5 cm",
    ],
    materials:
      "Slätt kalvskinn. Bomullsfoder. Mässing med dämpad finish. Torka med en mjuk, torr trasa. Skydda mot fukt och direkt sol.",
    colors: [colors.espresso, colors.ivory, colors.black],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "signature"],
    image: images.bags.amelie,
    hoverImage: images.bags.amelieAlt,
    gallery: [images.bags.amelie, images.bags.amelieAlt, images.editorialSmall.src, images.mood[5].src],
    badge: "Bästsäljare",
  },
  {
    slug: "the-camille",
    name: "The Camille",
    price: 1695,
    description:
      "En något förlängd kuvertväska med vikt klaff — gjord för middagar som vägrar ta slut.",
    longDescription:
      "The Camille tar sin linje från ett kuvert: en vikt klaff, en smal profil och precis tillräcklig volym för kvällens nödvändigheter. Den sitter nära kroppen och läses som ett accessoar, inte som ett utställningsföremål.",
    details: [
      "Kuvertsilhuett med överviktsklaff",
      "Inre kortfack",
      "Avtagbar läderrem",
      "Mått: 25 × 14 × 4 cm",
    ],
    materials:
      "Graverat kalvskinn. Mockafoder. Tonal söm. Förvara i den medföljande dustbagen.",
    colors: [colors.ivory, colors.espresso, colors.champagne],
    defaultColor: "ivory",
    categories: ["clutches", "evening"],
    image: images.bags.camille,
    hoverImage: images.bags.camilleAlt,
    gallery: [images.bags.camille, images.bags.camilleAlt, images.storyDetail.src, images.mood[2].src],
  },
  {
    slug: "the-eloise",
    name: "The Éloise",
    price: 1595,
    description:
      "En kompakt ramväska med ett vintage-eko och en genomgående modern återhållsamhet.",
    longDescription:
      "The Éloise påminner om ramväskorna från femtiotalets kvällar, men utan ornament. Metallramen är smal, lädret är tyst och skalan är precis — tillräckligt, aldrig mer.",
    details: [
      "Kiss-lock-ram",
      "Ett inre fack",
      "Kort kedjehandtag",
      "Mått: 20 × 12 × 6 cm",
    ],
    materials:
      "Polerat kalvskinn. Bomullstwillfoder. Åldrad mässingsram. Undvik kontakt med parfym och alkoholbaserade produkter.",
    colors: [colors.black, colors.espresso, colors.ivory],
    defaultColor: "black",
    categories: ["clutches", "evening", "signature"],
    image: images.bags.eloise,
    hoverImage: images.bags.eloiseAlt,
    gallery: [images.bags.eloise, images.bags.eloiseAlt, images.mood[6].src, images.bags.amelie],
  },
  {
    slug: "the-margaux",
    name: "The Margaux",
    price: 1795,
    description:
      "En mjukt strukturerad pouch med samlad öppning och en längre, tystare linje.",
    longDescription:
      "The Margaux är samlad, inte sladdrig. Volymen är kontrollerad, öppningen dold och ytan lämnad ostörd. Det är väskan för nätter när klänningen redan talar.",
    details: [
      "Mjukt strukturerad pouch",
      "Dold dragkedja med läderdrag",
      "Inre dragkedjeficka",
      "Mått: 24 × 15 × 7 cm",
    ],
    materials:
      "Nappaläder. Sidenblandat foder. Håll den fylld när den inte används för att behålla formen.",
    colors: [colors.espresso, colors.black, colors.champagne],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "new"],
    image: images.bags.margaux,
    hoverImage: images.bags.margauxAlt,
    gallery: [images.bags.margaux, images.bags.margauxAlt, images.mood[3].src, images.bags.camille],
    badge: "Nyhet",
  },
  {
    slug: "the-celeste",
    name: "The Céleste",
    price: 1895,
    description:
      "En slank minaudière med champagneyta och nästan ingen hårdvara att avvara.",
    longDescription:
      "The Céleste är kollektionens mest formella modell — ett hårt etui mjukat av färg, tänkt för black-tie-rum och sena reservationer. Den rymmer lite, och det är poängen.",
    details: [
      "Styv minaudière-konstruktion",
      "Trycklås",
      "Spegelkort i locket",
      "Mått: 18 × 11 × 5 cm",
    ],
    materials:
      "Läderklätt etui. Satinfoder. Ljus champagnehårdvara. Förvara separat från mörkare läder.",
    colors: [colors.champagne, colors.ivory, colors.black],
    defaultColor: "champagne",
    categories: ["clutches", "evening", "signature", "new"],
    image: images.bags.celeste,
    hoverImage: images.bags.celesteAlt,
    gallery: [images.bags.celeste, images.bags.celesteAlt, images.storyDetail.src, images.mood[2].src],
    badge: "Nyhet",
  },
  {
    slug: "the-noemie",
    name: "The Noémie",
    price: 1595,
    description:
      "En rektangulär kuvertväska med en enda söm och en matt, nästan arkitektonisk yta.",
    longDescription:
      "The Noémie är geometri, inte dekoration. Fyra plan, en söm, ett nedsänkt spänne. Den fotograferas väl just för att den gör så lite.",
    details: [
      "Boxclutch med nedsänkt spänne",
      "Delat innerfack",
      "Valfri handledsrem",
      "Mått: 23 × 13 × 5 cm",
    ],
    materials:
      "Matt kalvskinn. Ofodrat läderinner. Konditionera ibland med en färglös kräm.",
    colors: [colors.black, colors.ivory, colors.espresso],
    defaultColor: "black",
    categories: ["clutches", "evening"],
    image: images.bags.noemie,
    hoverImage: images.bags.noemieAlt,
    gallery: [images.bags.noemie, images.bags.noemieAlt, images.mood[5].src, images.bags.eloise],
  },
  {
    slug: "the-isabelle",
    name: "The Isabelle",
    price: 1745,
    description:
      "En draperad kuvertväska som samlas vid sidan — kollektionens mest feminina linje.",
    longDescription:
      "The Isabelle är samlad på ena sidan som tyg. Draperingen är satt, inte slumpmässig, och lädret är valt för hur det tar ljus snarare än hur det glänser.",
    details: [
      "Asymmetrisk drapering",
      "Sidospänne",
      "Inre slip-ficka",
      "Mått: 26 × 14 × 6 cm",
    ],
    materials:
      "Mjuk nappa. Bomullsfoder. Undvik att överfylla för att bevara draperingen.",
    colors: [colors.ivory, colors.champagne, colors.espresso],
    defaultColor: "ivory",
    categories: ["clutches", "evening", "new"],
    image: images.bags.isabelle,
    hoverImage: images.bags.isabelleAlt,
    gallery: [images.bags.isabelle, images.bags.isabelleAlt, images.editorialLarge.src, images.bags.margaux],
    badge: "Nyhet",
  },
  {
    slug: "the-juliette",
    name: "The Juliette",
    price: 1645,
    description:
      "En kompakt oval kuvertväska med en vintagelinje och ett samtida, odekorerat ansikte.",
    longDescription:
      "The Juliette är en oval — en form som vilar bekvämt i handen och ser övervägd ut på ett bord. Ingen logotyp, ingen hårdvara utöver ett smalt lås.",
    details: [
      "Oval silhuett",
      "Smal låsstängning",
      "Rymmer en kompakt telefon",
      "Mått: 21 × 12 × 5 cm",
    ],
    materials: "Slätt kalvskinn. Mockafoder. Torka av efter användning. Vila i dustbag.",
    colors: [colors.espresso, colors.black, colors.ivory],
    defaultColor: "espresso",
    categories: ["clutches", "signature"],
    image: images.bags.juliette,
    hoverImage: images.bags.julietteAlt,
    gallery: [images.bags.juliette, images.bags.julietteAlt, images.mood[0].src, images.bags.amelie],
  },
  {
    slug: "the-solene",
    name: "The Solène",
    price: 1845,
    description:
      "En högre kvällsväska med ett smalt handtag — för när en clutch vill ha lite mer närvaro.",
    longDescription:
      "The Solène står något högre än resten av kollektionen. Ett smalt topphandtag gör det möjligt att bära den i fingrarna, eller att ställa den upprätt bredvid ett glas.",
    details: [
      "Kvällsväska med topphandtag",
      "Magnetklaff",
      "Inre dragkedjeficka",
      "Mått: 20 × 16 × 6 cm",
    ],
    materials: "Strukturerat kalvskinn. Bomullsfoder. Handtaget är läderlindat.",
    colors: [colors.black, colors.espresso, colors.champagne],
    defaultColor: "black",
    categories: ["evening", "signature"],
    image: images.bags.solene,
    hoverImage: images.bags.soleneAlt,
    gallery: [images.bags.solene, images.bags.soleneAlt, images.eveningEdit.src, images.bags.noemie],
    badge: "Bästsäljare",
  },
  {
    slug: "the-adele",
    name: "The Adèle",
    price: 1545,
    description:
      "En liten kvadratisk kuvertväska med ett enda plan av läder och ett nedsänkt guldspänne.",
    longDescription:
      "The Adèle är nästan en kvadrat. Dess enda ornament är ett nedsänkt spänne i dämpad champagne — en detalj som ska hittas, inte synas från andra sidan rummet.",
    details: [
      "Kvadratisk kuvertväska",
      "Nedsänkt spänne",
      "Rymmer kort och en smal telefon",
      "Mått: 18 × 18 × 4 cm",
    ],
    materials: "Kalvskinn. Satinfoder. Hårdvara i ljus champagne.",
    colors: [colors.ivory, colors.espresso, colors.black],
    defaultColor: "ivory",
    categories: ["clutches", "evening"],
    image: images.bags.adele,
    hoverImage: images.bags.adeleAlt,
    gallery: [images.bags.adele, images.bags.adeleAlt, images.mood[4].src, images.bags.celeste],
  },
];

const searchAliases: Record<string, ProductCategory[]> = {
  kuvert: ["clutches"],
  kuvertväska: ["clutches"],
  kuvertväskor: ["clutches"],
  kväll: ["evening"],
  kvälls: ["evening"],
  signatur: ["signature"],
  nyhet: ["new"],
  nyheter: ["new"],
};

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.slice(0, 4);
}

export function getRelatedProducts(slug: string, count = 4) {
  return products.filter((product) => product.slug !== slug).slice(0, count);
}

export function filterProducts(category: "all" | ProductCategory) {
  if (category === "all") return products;
  return products.filter((product) => product.categories.includes(category));
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const aliased = Object.entries(searchAliases).flatMap(([term, cats]) =>
    q.includes(term) ? cats : [],
  );
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.categories.some((category) => category.includes(q) || aliased.includes(category)),
  );
}
