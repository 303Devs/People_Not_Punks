/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core neutrals
        void:     '#0B0B0D', // Void Black — hero bg, dark sections, footer, dark nav
        bone:     '#F3F0E8', // Soft Bone — light sections, body bg in light areas
        graphite: '#2A2D31', // Graphite — secondary text, dark borders, dark panels
        mist:     '#D8DDE3', // Mist Gray — dividers, secondary borders, muted surfaces
        // Accent colors (use sparingly — 10% rule)
        violet:   '#6F2BFF', // Signal Violet — primary accent: buttons, labels, active states
        eteal:    '#16C7C8', // Electric Teal — secondary accent: metadata, collection highlights
        emagenta: '#D94BA8', // Soft Magenta — editorial/art-adjacent moments only
        ablue:    '#3973D6', // Archive Blue — technical sections, links, product UI
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
