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
  badge?: "New" | "Bestseller";
};

export const colors: Record<string, ProductColor> = {
  espresso: { id: "espresso", name: "Espresso", hex: "#3A2C24" },
  ivory: { id: "ivory", name: "Ivory", hex: "#E8E0D4" },
  black: { id: "black", name: "Black", hex: "#161412" },
  champagne: { id: "champagne", name: "Champagne", hex: "#D7C89A" },
};

export const products: Product[] = [
  {
    slug: "the-amelie",
    name: "The Amélie",
    price: 1495,
    description:
      "A sculptural evening clutch designed around a clean silhouette and understated details.",
    longDescription:
      "The Amélie is RAINÉE’s signature form — a compact clutch with a quiet curve, a discreet clasp, and a presence that does not announce itself. It is meant to be held, set down, and carried again through a long evening.",
    details: [
      "Structured clutch with hidden magnetic closure",
      "Interior slip pocket",
      "Optional chain strap, 48 cm drop",
      "Dimensions: 22 × 13 × 5 cm",
    ],
    materials: "Smooth calf leather. Cotton lining. Brass hardware with a muted finish. Wipe with a soft dry cloth. Keep away from moisture and direct sun.",
    colors: [colors.espresso, colors.ivory, colors.black],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "signature"],
    image: images.bags.amelie,
    hoverImage: images.bags.amelieAlt,
    gallery: [images.bags.amelie, images.bags.amelieAlt, images.editorialSmall.src, images.mood[5].src],
    badge: "Bestseller",
  },
  {
    slug: "the-camille",
    name: "The Camille",
    price: 1695,
    description:
      "A slightly elongated clutch with a folded flap — made for dinners that refuse to end.",
    longDescription:
      "The Camille takes its line from an envelope: a folded flap, a slim profile, and just enough volume for the evening’s essentials. It sits close to the body and reads as an accessory, not an object of display.",
    details: [
      "Envelope silhouette with fold-over flap",
      "Interior card slot",
      "Detachable leather strap",
      "Dimensions: 25 × 14 × 4 cm",
    ],
    materials: "Grained calf leather. Sueded lining. Tonal stitching. Store in the included dust bag.",
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
      "A compact frame clutch with a vintage echo and a thoroughly modern restraint.",
    longDescription:
      "The Éloise recalls the frame bags of mid-century evenings, stripped of ornament. The metal frame is narrow, the leather is quiet, and the scale is precise — enough, never more.",
    details: [
      "Kiss-lock frame closure",
      "Single interior compartment",
      "Short chain handle",
      "Dimensions: 20 × 12 × 6 cm",
    ],
    materials: "Polished calf. Cotton twill lining. Aged brass frame. Avoid contact with perfume and alcohol-based products.",
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
      "A softly structured pouch with a gathered opening and a longer, quieter line.",
    longDescription:
      "The Margaux is gathered, not slouchy. Its volume is controlled, its opening concealed, and its surface left uninterrupted. It is the piece for nights when the dress is already doing the talking.",
    details: [
      "Soft-structured pouch",
      "Concealed zip with leather pull",
      "Interior zip pocket",
      "Dimensions: 24 × 15 × 7 cm",
    ],
    materials: "Nappa leather. Silk-blend lining. Keep stuffed when not in use to retain shape.",
    colors: [colors.espresso, colors.black, colors.champagne],
    defaultColor: "espresso",
    categories: ["clutches", "evening", "new"],
    image: images.bags.margaux,
    hoverImage: images.bags.margauxAlt,
    gallery: [images.bags.margaux, images.bags.margauxAlt, images.mood[3].src, images.bags.camille],
    badge: "New",
  },
  {
    slug: "the-celeste",
    name: "The Céleste",
    price: 1895,
    description:
      "A slender minaudière with a champagne face and almost no hardware to spare.",
    longDescription:
      "The Céleste is the most formal of the collection — a hard case softened by colour, meant for black-tie rooms and late reservations. It holds little, and that is the point.",
    details: [
      "Rigid minaudière construction",
      "Push-lock closure",
      "Mirror card inside lid",
      "Dimensions: 18 × 11 × 5 cm",
    ],
    materials: "Leather-wrapped case. Satin interior. Light champagne hardware. Store separately from darker leathers.",
    colors: [colors.champagne, colors.ivory, colors.black],
    defaultColor: "champagne",
    categories: ["clutches", "evening", "signature", "new"],
    image: images.bags.celeste,
    hoverImage: images.bags.celesteAlt,
    gallery: [images.bags.celeste, images.bags.celesteAlt, images.storyDetail.src, images.mood[2].src],
    badge: "New",
  },
  {
    slug: "the-noemie",
    name: "The Noémie",
    price: 1595,
    description:
      "A rectangular clutch with a single seam and a matte, almost architectural face.",
    longDescription:
      "The Noémie is geometry, not decoration. Four planes, one seam, a recessed clasp. It photographs well because it does so little.",
    details: [
      "Box clutch with recessed clasp",
      "Divided interior",
      "Optional wrist strap",
      "Dimensions: 23 × 13 × 5 cm",
    ],
    materials: "Matte calf. Unlined leather interior. Condition occasionally with a colourless cream.",
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
      "A draped clutch that gathers at the side — the collection’s most feminine line.",
    longDescription:
      "The Isabelle is gathered at one side like fabric. The drape is set, not accidental, and the leather is chosen for how it takes light rather than how it shines.",
    details: [
      "Asymmetric drape",
      "Side clasp",
      "Interior slip pocket",
      "Dimensions: 26 × 14 × 6 cm",
    ],
    materials: "Supple nappa. Cotton lining. Avoid overfilling to preserve the drape.",
    colors: [colors.ivory, colors.champagne, colors.espresso],
    defaultColor: "ivory",
    categories: ["clutches", "evening", "new"],
    image: images.bags.isabelle,
    hoverImage: images.bags.isabelleAlt,
    gallery: [images.bags.isabelle, images.bags.isabelleAlt, images.editorialLarge.src, images.bags.margaux],
    badge: "New",
  },
  {
    slug: "the-juliette",
    name: "The Juliette",
    price: 1645,
    description:
      "A compact oval clutch with a vintage curve and a contemporary, unadorned face.",
    longDescription:
      "The Juliette is an oval — a shape that sits comfortably in the hand and looks considered on a table. No logo, no hardware beyond a slim catch.",
    details: [
      "Oval silhouette",
      "Slim catch closure",
      "Fits a compact phone",
      "Dimensions: 21 × 12 × 5 cm",
    ],
    materials: "Smooth calf. Suede lining. Wipe after wear. Rest in dust bag.",
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
      "A taller evening bag with a slender handle — for when a clutch wants a little more presence.",
    longDescription:
      "The Solène stands slightly taller than the rest of the collection. A slender top handle makes it possible to carry by the fingers, or to set it upright beside a glass.",
    details: [
      "Top-handle evening bag",
      "Magnetic flap",
      "Interior zip pocket",
      "Dimensions: 20 × 16 × 6 cm",
    ],
    materials: "Structured calf. Cotton lining. Handle is leather-wrapped.",
    colors: [colors.black, colors.espresso, colors.champagne],
    defaultColor: "black",
    categories: ["evening", "signature"],
    image: images.bags.solene,
    hoverImage: images.bags.soleneAlt,
    gallery: [images.bags.solene, images.bags.soleneAlt, images.eveningEdit.src, images.bags.noemie],
    badge: "Bestseller",
  },
  {
    slug: "the-adele",
    name: "The Adèle",
    price: 1545,
    description:
      "A small square clutch with a single plane of leather and a recessed gold catch.",
    longDescription:
      "The Adèle is almost a square. Its only ornament is a recessed catch in muted champagne — a detail meant to be found, not seen from across the room.",
    details: [
      "Square clutch",
      "Recessed catch",
      "Fits cards and a slim phone",
      "Dimensions: 18 × 18 × 4 cm",
    ],
    materials: "Calf leather. Satin lining. Hardware in light champagne.",
    colors: [colors.ivory, colors.espresso, colors.black],
    defaultColor: "ivory",
    categories: ["clutches", "evening"],
    image: images.bags.adele,
    hoverImage: images.bags.adeleAlt,
    gallery: [images.bags.adele, images.bags.adeleAlt, images.mood[4].src, images.bags.celeste],
  },
];

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
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.categories.some((category) => category.includes(q)),
  );
}
