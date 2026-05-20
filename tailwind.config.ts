import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
      },
      colors: {
        // Warm "developer journal / vintage terminal" palette — intentionally not the typical AI dark-blue + cyan
        ink: {
          bg: "#1a1410",       // dark coffee
          panel: "#221a14",
          sidebar: "#150f0c",
          line: "#2d2218",
          rule: "#3a2c1f",
          muted: "#8a7a64",
          dim: "#a89478",
          text: "#ede0c8",     // warm cream
          paper: "#f4ead5",
        },
        // Distinct accents — terracotta / ochre / moss / rust
        warm: {
          ochre: "#e8a05a",
          amber: "#d97706",
          rust: "#b8442e",
          terracotta: "#c87850",
          moss: "#7d9447",
          olive: "#9aa14a",
          plum: "#7a3f5f",
        },
        syntax: {
          keyword: "#c87850",  // terracotta
          string: "#7d9447",   // moss
          number: "#e8a05a",   // ochre
          fn: "#d4a04a",       // amber-yellow
          comment: "#6e5a44",  // sepia
          tag: "#b8442e",      // rust
          var: "#ede0c8",
        },
      },
      animation: {
        caret: "blink 1.05s step-end infinite",
        flicker: "flicker 4s infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out both",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in": "slideIn 0.45s cubic-bezier(0.22,1,0.36,1) both",
        "type": "type 2.5s steps(40,end) both",
        "shimmer": "shimmer 2.4s linear infinite",
        "tilt": "tilt 8s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite",
        "pulse-warm": "pulseWarm 2.4s ease-in-out infinite",
        "underline-grow": "underlineGrow 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        flicker: {
          "0%,100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "94%": { opacity: "0.82" },
          "96%": { opacity: "1" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        type: { from: { width: "0" }, to: { width: "100%" } },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        tilt: {
          "0%,100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseWarm: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(232,160,90,0.45)" },
          "50%": { boxShadow: "0 0 0 8px rgba(232,160,90,0)" },
        },
        underlineGrow: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
    },
  },
  plugins: [],
} satisfies Config;
