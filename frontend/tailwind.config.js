/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Dune custom colors
                        'dune-primary': '#000320',
                        'dune-gold': '#feb700',
                        'dune-gold-dark': '#6b4b00',
                        'dune-surface': '#f9f9fe',
                        'dune-surface-dim': '#d9dadf',
                        'dune-surface-container': '#ededf3',
                        'dune-surface-container-low': '#f3f3f8',
                        'dune-surface-container-high': '#e8e8ed',
                        'dune-on-surface': '#1a1c1f',
                        'dune-on-surface-variant': '#454651',
                        'dune-outline': '#767682',
                        'dune-outline-variant': '#c6c5d2',
                        'dune-secondary': '#7c5800',
                        'dune-error': '#ba1a1a',
                },
                fontFamily: {
                        headline: ['Manrope', 'sans-serif'],
                        body: ['Inter', 'sans-serif'],
                        label: ['Work Sans', 'sans-serif'],
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'ping-slow': {
                                '75%, 100%': { transform: 'scale(2)', opacity: '0' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
