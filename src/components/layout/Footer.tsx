import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "New Arrivals" },
      { href: "/shop", label: "Clutches" },
      { href: "/shop", label: "Best Sellers" },
      { href: "/collections/evening", label: "Collections" },
    ],
  },
  {
    title: "RAINÉE",
    links: [
      { href: "/our-story", label: "Our Story" },
      { href: "/our-story", label: "Journal" },
      { href: "/our-story", label: "Materials" },
      { href: "/our-story", label: "Contact" },
    ],
  },
  {
    title: "Client Services",
    links: [
      { href: "/shop", label: "Shipping & Returns" },
      { href: "/shop", label: "FAQ" },
      { href: "/our-story", label: "Care Guide" },
      { href: "/shop", label: "Terms" },
      { href: "/shop", label: "Privacy" },
    ],
  },
  {
    title: "Social",
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
          <p>Sweden / SEK</p>
        </div>
      </div>
    </footer>
  );
}
