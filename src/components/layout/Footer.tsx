import Link from "next/link";

const columns = [
  {
    title: "Butik",
    links: [
      { href: "/shop", label: "Nyheter" },
      { href: "/shop", label: "Kuvertväskor" },
      { href: "/shop", label: "Bästsäljare" },
      { href: "/collections/evening", label: "Kollektioner" },
    ],
  },
  {
    title: "RAINÉE",
    links: [
      { href: "/our-story", label: "Vår historia" },
      { href: "/our-story", label: "Journal" },
      { href: "/our-story", label: "Material" },
      { href: "/our-story", label: "Kontakt" },
    ],
  },
  {
    title: "Kundservice",
    links: [
      { href: "/shop", label: "Frakt & returer" },
      { href: "/shop", label: "Vanliga frågor" },
      { href: "/our-story", label: "Skötselguide" },
      { href: "/shop", label: "Villkor" },
      { href: "/shop", label: "Integritet" },
    ],
  },
  {
    title: "Socialt",
    links: [
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://pinterest.com", label: "Pinterest" },
      { href: "https://tiktok.com", label: "TikTok" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="page-pad mx-auto max-w-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-5 text-[11px] uppercase tracking-label text-champagne">
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/80 transition-colors hover:text-ivory focus-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-20 select-none font-serif text-[18vw] leading-none tracking-[0.12em] text-ivory/[0.07] md:text-[12vw] lg:text-[9rem]">
          RAINÉE
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-[11px] uppercase tracking-nav text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RAINÉE</p>
          <p>Sverige / SEK</p>
        </div>
      </div>
    </footer>
  );
}
