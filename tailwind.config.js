/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // src 폴더 내의 모든 JS, JSX, TS, TSX 파일 스캔
    './public/index.html',         // public 폴더의 index.html 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
