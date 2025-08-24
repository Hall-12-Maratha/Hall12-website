import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["var(--font-literata)"],
        devanagari: ["var(--font-amita)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
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
        "fade-in-up": {
          "0%": { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "zoom-in": {
          "0%": { opacity: '0', transform: 'scale(0.95)' },
          "100%": { opacity: '1', transform: 'scale(1)' },
        },
        "background-zoom": {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.05)' },
        },
        "button-pulse": {
            '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 hsl(var(--accent) / 0.7)' },
            '50%': { transform: 'scale(1.05)', boxShadow: '0 0 10px 5px hsl(var(--accent) / 0)' },
        },
        "glow-gold": {
            '0%, 100%': { boxShadow: '0 0 5px hsl(var(--accent))' },
            '50%': { boxShadow: '0 0 20px hsl(var(--accent))' },
        },
        "glow-border-orange": {
            '0%, 100%': { borderColor: 'hsl(var(--border))', boxShadow: 'none' },
            '50%': { borderColor: 'hsl(var(--primary))', boxShadow: '0 0 5px hsl(var(--primary) / 0.5)' },
        },
        "slide-in-left": {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "slide-in-right": {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "card-flip": {
            '0%': { transform: 'rotateY(90deg)', opacity: '0'},
            '100%': { transform: 'rotateY(0)', opacity: '1'},
        },
        "slide-up-reveal": {
            '0%': { transform: 'translateY(100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "fade-in": {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },
        "flash-gold": {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'hsl(var(--accent))' },
        },
        "parallax-fort": {
            '0%': { transform: 'translateY(0px)' },
            '100%': { transform: 'translateY(-100px)' },
        },
        "parallax-fort-slow": {
            '0%': { transform: 'translateY(0px)' },
            '100%': { transform: 'translateY(-50px)' },
        },
         "swipe-in": {
          "0%": { transform: 'translateX(-100%)', opacity: '0' },
          "100%": { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "zoom-in": "background-zoom 6s ease-out forwards",
        "button-pulse": "button-pulse 4s infinite",
        "glow-gold": "glow-gold 1.5s ease-in-out infinite alternate",
        "glow-border-orange": "glow-border-orange 1.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "card-flip": "card-flip 0.6s ease-out forwards",
        "slide-up-reveal": "slide-up-reveal 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "flash-gold": "flash-gold 0.5s ease-in-out",
        "parallax-fort": "parallax-fort 40s linear infinite alternate",
        "parallax-fort-slow": "parallax-fort-slow 20s linear infinite alternate",
        "swipe-in": "swipe-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
