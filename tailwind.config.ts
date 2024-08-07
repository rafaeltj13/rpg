const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: [
    "dark",
    "border-strength",
    "bg-strength",
    "from-strength",
    "to-strength-foreground",
    "border-agility",
    "bg-agility",
    "from-agility",
    "to-agility-foreground",
    "border-intelligence",
    "bg-intelligence",
    "from-intelligence",
    "to-intelligence-foreground",
    "border-vitality",
    "bg-vitality",
    "from-vitality",
    "to-vitality-foreground",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        actions: {
          DEFAULT: "var(--actions)",
          foreground: "var(--actions-foreground)",
        },
        strength: {
          DEFAULT: "var(--strength)",
          foreground: "var(--strength-foreground)",
        },
        agility: {
          DEFAULT: "var(--agility)",
          foreground: "var(--agility-foreground)",
        },
        intelligence: {
          DEFAULT: "var(--intelligence)",
          foreground: "var(--intelligence-foreground)",
        },
        vitality: {
          DEFAULT: "var(--vitality)",
          foreground: "var(--vitality-foreground)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      fontFamily: {
        sans: ["Cinzel", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [animate],
};
