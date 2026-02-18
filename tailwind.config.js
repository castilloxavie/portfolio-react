/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#0A0E1A', // Azul noche más profundo (mejor contraste)
        secondaryBg: '#141B2C', // Slate oscuro más luminoso
        accent: '#00A8FF', // Azul tecnológico más brillante (impactante)
        accentHover: '#00D4FF', // Azul hover brillante
        textPrimary: '#F0F5FF', // Texto principal más blanco (máximo contraste)
        textSecondary: '#A8B5CF', // Texto secundario más brillante
        borderSubtle: '#2D3E5F', // Bordes más visibles
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #0A0E1A 0%, #141B2C 100%)',
      },
    },
  },
  plugins: [],
}
