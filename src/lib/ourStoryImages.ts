/**
 * Placeholder photography for the OM RAINÉE UF page.
 * Replace these Pexels URLs with RAINÉE campaign imagery when ready.
 */
const pexels = (id: number, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const storyImages = {
  hero: {
    src: pexels(1463530),
    alt: "Regnig europeisk gata med paraplyer i dämpade toner",
  },
  gothenburg: {
    src: pexels(2101187),
    alt: "Våt stadsgata i skandinaviskt ljus",
  },
  rainDetail: {
    src: pexels(459451),
    alt: "Regndroppar mot en ruta",
  },
  handbag: {
    src: "/images/pexels-malcolm-garret-3023588-11681818%20(2).jpg",
    alt: "Modell med beige kuvertväska",
  },
  material: {
    src: pexels(6044266),
    alt: "Närbild av läder och söm",
  },
  foldable: {
    src: pexels(373808),
    alt: "Ljust textilmaterial i närbild",
  },
  fashion: {
    src: pexels(7671166),
    alt: "Kvinna i kappa på en stadsgata i neutralt ljus",
  },
  functionBreak: {
    src: pexels(291762),
    alt: "Neutral modebild i urban miljö",
  },
  textile: {
    src: pexels(325185),
    alt: "Dämpad stadssilhuett i dimma och grått ljus",
  },
  craft: {
    src: pexels(1374128),
    alt: "Närbild av handväska och material",
  },
  close: {
    src: pexels(2563681),
    alt: "Varm stenfasad i skandinavisk arkitektur",
  },
} as const;
