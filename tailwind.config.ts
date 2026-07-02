import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0B0D",
        bg2: "#0E1013",
        surface: "#121519",
        surface2: "#171B20",
        text: "#ECEEF1",
        dim: "#9BA1A9",
        faint: "#565C64",
        accent: "#B8F24E"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: {
        content: "1180px"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
