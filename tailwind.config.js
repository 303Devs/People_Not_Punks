/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core neutrals
        void:     '#0D0B0F', // Void Black — hero bg, dark sections, footer, dark nav (warm charcoal, subtle purple undertone)
        bone:     '#F0EBE0', // Soft Bone — light sections, body bg in light areas (warm cream)
        graphite: '#2D2A2F', // Graphite — secondary text, dark borders, dark panels (warm-shifted)
        mist:     '#CBC4B8', // Mist — warm taupe dividers, secondary borders, muted surfaces
        // Accent colors (use sparingly — 10% rule)
        violet:   '#6F2BFF', // Signal Violet — primary accent: buttons, labels, active states
        amber:    '#C49A5C', // Warm Amber — secondary accent: editorial highlights, warm accents

      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Raleway', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
