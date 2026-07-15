import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: {
          deep: "#0E3B3A",
          light: "#1C524F",
        },
        paper: "#F6F3EC",
        ink: "#211F1A",
        brass: "#A9834F",
        sand: "#EAE4D6",
        error: "#B5493C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        input: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(14,59,58,0.06)",
        md: "0 4px 12px rgba(14,59,58,0.10)",
        lg: "0 12px 32px rgba(14,59,58,0.14)",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
