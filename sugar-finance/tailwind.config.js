/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Surfaces (dark navy to near black, matching the reference dashboard)
        base: "#080b16",
        surface: "#0e1224",
        panel: "#12162c",
        panel2: "#171c37",
        panel3: "#1d2444",
        line: "#232a4d",
        line2: "#2c3564",
        // Sugar brand accents
        sugar: {
          pink: "#ff4d7d",
          rose: "#f43e5f",
          red: "#e11d48",
          deep: "#b91442",
        },
        gold: "#f5c451",
        grape: "#a259ff",
        grapeSoft: "#c08bff",
        mint: "#34d399",
        sky: "#5aa9ff",
        // Text
        ink: "#eef1fb",
        muted: "#828bb0",
        faint: "#5b6488",
      },
      fontFamily: {
        // The reference uses a chunky rounded display face for the logo and
        // section headers (not a pixel font). Baloo 2 matches that closely.
        // Existing font-pixel usages inherit this display face.
        pixel: ['"Baloo 2"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Baloo 2"', "ui-sans-serif", "system-ui", "sans-serif"],
        pixelbody: ['"Rubik"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Rubik"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 30px -18px rgba(0,0,0,0.9)",
        glowpink: "0 0 0 1px rgba(255,77,125,0.35), 0 0 22px -4px rgba(255,77,125,0.55)",
        glowgold: "0 0 18px -4px rgba(245,196,81,0.5)",
        inset: "inset 0 0 0 1px rgba(255,255,255,0.04)",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pop: {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideup: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseglow: {
          "0%, 100%": { filter: "drop-shadow(0 0 2px rgba(255,77,125,0.35))" },
          "50%": { filter: "drop-shadow(0 0 8px rgba(255,77,125,0.65))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        pop: "pop 0.18s ease-out",
        slideup: "slideup 0.35s ease-out both",
        pulseglow: "pulseglow 3s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
