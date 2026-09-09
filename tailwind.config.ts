import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FAF7F1",
        card: "#FFFFFF",
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#2E2E2C",
          muted: "#6B6B68"
        },
        line: "#E5E1D8",
        accent: {
          DEFAULT: "#2F6DB3",
          dark: "#245388"
        },
        gold: {
          DEFAULT: "#EDA53F",
          dark: "#C88526"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
