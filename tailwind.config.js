/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          'sans-serif',
        ],
      },
      fontSize: {
        xs:   ['12px', { lineHeight: '1.6' }],
        sm:   ['15px', { lineHeight: '1.7' }],
        base: ['17px', { lineHeight: '1.8' }],
        lg:   ['19px', { lineHeight: '1.7' }],
        xl:   ['21px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
