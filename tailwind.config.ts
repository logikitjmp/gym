import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        ink: "#050507",
        coal: "#0b0f12",
        bone: "#f7f8f4",
        volt: "#b7ff2a",
        "volt-strong": "#7cff00",
        steel: "#93a1a1"
      },
      boxShadow: {
        glow: "0 0 48px rgba(183, 255, 42, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.18)"
      },
      backgroundImage: {
        "premium-grid":
          "linear-gradient(rgba(183,255,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,255,42,0.08) 1px, transparent 1px)",
        "radial-volt":
          "radial-gradient(circle at 20% 10%, rgba(183,255,42,0.34), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.16), transparent 26%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(183,255,42,0.0)" },
          "50%": { boxShadow: "0 0 48px rgba(183,255,42,0.22)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
