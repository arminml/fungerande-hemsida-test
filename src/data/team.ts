/**
 * Team portraits are Pexels placeholders.
 * Replace each `image` URL with the member's real photograph when available.
 */
const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export type TeamMember = {
  slug: string;
  number: string;
  editorialLabel: string;
  displayName: string;
  lastName: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "jonathan-larsson",
    number: "01",
    editorialLabel: "01 / VD",
    displayName: "Jonathan “Jonte”",
    lastName: "Larsson",
    role: "VD",
    bio: "Tja! Jag heter Jonathan men alla kallar mig Jonte. Jag är 18 år och går tredje året på ekonomilinjen på Kitas gymnasium. Jag är en go gubbe som bor i fina Partille och är supertaggad på att vinna SM i år!",
    image: "/images/jonte.jpeg",
    imageAlt: "Porträttplats för Jonathan Larsson — tillfällig bild, inte Jonte",
  },
  {
    slug: "emma-haglund",
    number: "02",
    editorialLabel: "02 / Marknadsföring",
    displayName: "Emma",
    lastName: "Haglund",
    role: "Marknadsföringsansvarig",
    bio: "Hej hej! Mitt namn är Emma och jag har tyvärr inga smeknamn. Även jag är 18 år och går i samma klass som vår kära VD. Jag bor dock tyvärr inte i Partille, utan i X1:ans andra ände — alltså Torslanda. Jag har spelat handboll i hela mitt liv och gör det fortfarande, men just nu är jag ännu mer taggad på SM i UF än SM i handboll.",
    image: "/images/emmateam.jpeg",
    imageAlt: "Porträttplats för Emma Haglund — tillfällig bild, inte Emma",
  },
  {
    slug: "gustav-ehlin-claesson",
    number: "03",
    editorialLabel: "03 / Försäljning",
    displayName: "Gustav",
    lastName: "Ehlin Claesson",
    role: "Försäljningsansvarig",
    bio: "Tjenare! Jag heter Gustav och är, likt de flesta andra i företaget, 18 år gammal. Jag bor i Floda utanför Lerum, långt från vårt huvudkvarter på Kitas. Jag spelar även handboll i Baltichov och ser hjärtligt mycket fram emot det här året!",
    image: "/images/gustav.jpeg",
    imageAlt: "Porträttplats för Gustav Ehlin Claesson — tillfällig bild, inte Gustav",
  },
  {
    slug: "klara-brockmark",
    number: "04",
    editorialLabel: "04 / Produktion",
    displayName: "Klara",
    lastName: "Brockmark",
    role: "Produktionsansvarig",
    bio: "Halloj! Jag heter Klara, är också 18 år gammal och går också i samma klass som vår finfina VD. Jag bor i ett hus i Mölndal som bara ligger sisådär en kvart från vårt huvudkvarter. Att driva UF-företag tillsammans med mina vänner i år ska bli superduperkul och jag är mer än taggad!!",
    image: "/images/klara.jpeg",
    imageAlt: "Porträttplats för Klara Brockmark — tillfällig bild, inte Klara",
  },
];

export const teamIntroImage = {
  src: "/images/gruppbild.jpeg",
  alt: "Skandinavisk stad i neutralt ljus — stämningsbild för RAINÉE UF i Göteborg",
};
