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
    hoverImage: "/aestheticbilder/bild_28.jpeg",
    gallery: ["/produktbilder/laNormaleNoire.jpg", "/aestheticbilder/bild_28.jpeg", "/aestheticbilder/bild_27-upscaled.webp"],
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
    hoverImage: "/aestheticbilder/bild_23.jpeg",
    gallery: ["/produktbilder/la%20petite%20noire.jpg", "/aestheticbilder/bild_23.jpeg", "/aestheticbilder/bild_17.jpeg"],
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
    hoverImage: "/produktbilder/IMG_9298.jpeg",
    gallery: ["/produktbilder/la%20Normale%20marron.jpg", "/produktbilder/IMG_9298.jpeg", "/produktbilder/IMG_9300.jpeg"],
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
    hoverImage: "/produktbilder/IMG_9302.jpeg",
    gallery: ["/produktbilder/la%20petite%20marron.jpg", "/produktbilder/IMG_9302.jpeg", "/produktbilder/IMG_9296.jpeg"],
    badge: "Nyhet",
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
