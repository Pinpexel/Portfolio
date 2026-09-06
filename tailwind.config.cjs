/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // ── PinPexel Core Palette (Logo.png) ─────────────────────────────
        // Backgrounds
        primary:      "#05101F", // deepest page background — almost-black navy
        secondary:    "#AABFE8", // light steel blue — subtext, logo ring
        tertiary:     "#0D1E3A", // dark navy — card & section backgrounds

        // Dark variants for layered elements
        "black-100":  "#091629", // card inner background
        "black-200":  "#040D1A", // deepest overlay / modal bg

        // Light variants
        "white-100":  "#F0EEF8", // off-white body text (from logo parchment)

        // ── Brand Accents ──────────────────────────────────────────────────
        "brand-blue":   "#1E4FAF", // PRIMARY — royal blue (dominant gear icon)
        "brand-mid":    "#2563B0", // SECONDARY — medium blue (lettermark)
        "brand-bright": "#3A7FD5", // HIGHLIGHT — bright blue (hover / glow)
        "brand-steel":  "#AABFE8", // MUTED — steel blue (logo ring)
        "brand-cream":  "#EDE8D8", // ACCENT — parchment cream (torn paper)
        "brand-navy":   "#0A1628", // DEEP — darkest navy shade
      },
      boxShadow: {
        // Royal-blue glow matching the logo gear icon
        card: "0px 35px 120px -15px #1E4FAF66",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
