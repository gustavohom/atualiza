/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js" // Para JS no frontend se houver
  ],
  theme: {
    extend: {
      // --- Sua Paleta de Cores Personalizada ---
      colors: {
        'atualiza-primary': '#005A9C',    // Azul forte (Exemplo)
        'atualiza-secondary': '#F5A623', // Laranja/Dourado (Exemplo)
        'atualiza-dark': '#222222',       // Preto Suave (Exemplo)
        'atualiza-light': '#f8f9fa',      // Cinza bem claro (Exemplo)
      },
      // --- Suas Fontes Personalizadas ---
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],           // Fonte padrão para corpo
        'heading': ['Montserrat', 'sans-serif'],   // Fonte para títulos
      }
    },
  },
  plugins: [],
}