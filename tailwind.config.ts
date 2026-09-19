import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--ivory)",
        stone: "var(--stone)",
        espresso: "var(--espresso)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        brown: "var(--brown)",
        taupe: "var(--taupe)",
        gold: "var(--gold)",
        champagne: "var(--champagne)",
        line: "var(--line)",
        paper: "var(--paper)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        site: "1400px",
      },
      letterSpacing: {
        label: "0.2em",
        nav: "0.18em",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.22s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
