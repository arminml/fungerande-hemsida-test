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
  hideOptions?: boolean;
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
    name: "La normale noire",
    price: 179,
    description:
      "Ett exklusivt, vattenavvisande skydd för din handväska.",
    longDescription:
      "La normale noire är ett elegant väsköverdrag som hjälper till att skydda din handväska mot regn. Ett funktionellt komplement till väskan du redan använder.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
      "Bredd: 23-35 cm",
      "Höjd: 17-26 cm (inkl. eventuellt handtag)",
      "Djup: 8-16 cm",
      "*Måtten kan variera beroende på modell/form på din väska*",
    ],
    hideOptions: true,
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
    colors: [colors.espresso, colors.ivory, colors.black],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "signature"],
    image: "/produktbilder/laNormaleNoire.jpg",
    hoverImage: images.bags.amelieAlt,
    gallery: ["/produktbilder/laNormaleNoire.jpg", images.bags.amelieAlt, images.editorialSmall.src, images.mood[5].src],
    badge: "Bästsäljare",
  },
  {
    slug: "la-petite-noire",
    name: "La petite noire",
    price: 149,
    description:
      "Ett elegant regnskydd för handväskor, med en stilren känsla.",
    longDescription:
      "La petite noire är ett vattenavvisande överdrag för din handväska. För dig som vill ge väskan skydd mot regn och samtidigt behålla en elegant stil.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
      "Bredd: 19-28 cm",
      "Höjd: 15-23 cm (inkl. eventuellt handtag)",
      "Djup: 6-10 cm",
      "*Måtten kan variera beroende på modell/form på din väska*",
    ],
    hideOptions: true,
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
    colors: [colors.ivory, colors.espresso, colors.champagne],
    defaultColor: "ivory",
    categories: ["clutches", "evening"],
    image: "/produktbilder/la%20petite%20noire.jpg",
    hoverImage: images.bags.camilleAlt,
    gallery: ["/produktbilder/la%20petite%20noire.jpg", images.bags.camilleAlt, images.storyDetail.src, images.mood[2].src],
  },
  {
    slug: "la-normale-marron",
    name: "La normale marron",
    price: 179,
    description:
      "Ett stilrent väsköverdrag som hjälper till att skydda mot regn.",
    longDescription:
      "La normale marron kombinerar ett elegant uttryck med vattenavvisande skydd för handväskor. Det bärs över din väska som ett komplement när vädret skiftar.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
      "Bredd: 23-35 cm",
      "Höjd: 17-26 cm (inkl. eventuellt handtag)",
      "Djup: 8-16 cm",
      "*Måtten kan variera beroende på modell/form på din väska*",
    ],
    hideOptions: true,
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
    colors: [colors.black, colors.espresso, colors.ivory],
    defaultColor: "black",
    categories: ["clutches", "evening", "signature"],
    image: "/produktbilder/la%20Normale%20marron.jpg",
    hoverImage: images.bags.eloiseAlt,
    gallery: ["/produktbilder/la%20Normale%20marron.jpg", images.bags.eloiseAlt, images.mood[6].src, images.bags.amelie],
  },
  {
    slug: "la-petite-marron",
    name: "La petite marron",
    price: 149,
    description:
      "Vattenavvisande skydd för handväskan, från vardag till kväll.",
    longDescription:
      "La petite marron är ett väsköverdrag för dig som vill ta med din handväska även när regn väntas. Ett skydd med en exklusiv känsla, som låter funktion få en naturlig plats i din stil.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
      "Bredd: 19-28 cm",
      "Höjd: 15-23 cm (inkl. eventuellt handtag)",
      "Djup: 6-10 cm",
      "*Måtten kan variera beroende på modell/form på din väska*",
    ],
    hideOptions: true,
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
    colors: [colors.espresso, colors.black, colors.champagne],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "new"],
    image: "/produktbilder/la%20petite%20marron.jpg",
    hoverImage: images.bags.margauxAlt,
    gallery: ["/produktbilder/la%20petite%20marron.jpg", images.bags.margauxAlt, images.mood[3].src, images.bags.camille],
    badge: "Nyhet",
  },
  {
    slug: "the-celeste",
    name: "The Céleste",
    price: 1895,
    description:
      "Ett elegant skydd för handväskan du tar med dig ut.",
    longDescription:
      "The Céleste är ett vattenavvisande skydd för handväskor. Ett elegant komplement på väg till middagen, festen eller en vanlig dag på stan.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
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
      "Ett vattenavvisande väsköverdrag med ett stilrent uttryck.",
    longDescription:
      "The Noémie hjälper till att skydda din handväska mot regn. Ett funktionellt överdrag för dig som uppskattar ett elegant uttryck även under regniga dagar.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
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
      "Regnskydd för din handväska, med en exklusiv känsla.",
    longDescription:
      "The Isabelle är ett elegant överdrag som bärs över handväskan. Det vattenavvisande skyddet är ett komplement till din väska när regnet kommer.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
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
      "Ett elegant väsköverdrag för dagar då vädret skiftar.",
    longDescription:
      "The Juliette är ett vattenavvisande skydd för handväskor. För dig som vill förena ett elegant uttryck med en praktisk funktion i vardagen.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
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
      "Vattenavvisande skydd för handväskan, även på väg till kvällens planer.",
    longDescription:
      "The Solène är ett regnskydd för handväskor med en exklusiv känsla. Ett elegant sätt att ge väskan skydd mot regn på vägen dit och hem.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
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
      "Ett stilrent skydd för din handväska när regnet kommer.",
    longDescription:
      "The Adèle är ett vattenavvisande väsköverdrag. Ett funktionellt tillägg till handväskan du redan tycker om, med en elegant känsla.",
    details: [
      "Vattenavvisande skydd för handväskor",
      "Bärs över handväskan",
      "Utformat för att hjälpa till att skydda mot regn",
      "Kontakta RAINÉE UF om du är osäker på passformen för din väska.",
    ],
    materials:
      "Kontakta RAINÉE UF för information om material och skötsel.",
    colors: [colors.ivory, colors.espresso, colors.black],
    defaultColor: "ivory",
    categories: ["clutches", "evening"],
    image: images.bags.adele,
    hoverImage: images.bags.adeleAlt,
    gallery: [images.bags.adele, images.bags.adeleAlt, images.mood[4].src, images.bags.celeste],
  },
];

const searchAliases: Record<string, ProductCategory[]> = {
  väsköverdrag: ["clutches", "evening"],
  regnskydd: ["clutches", "evening"],
  väskydd: ["clutches", "evening"],
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
