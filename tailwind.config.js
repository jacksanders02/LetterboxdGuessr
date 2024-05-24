/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'text-hover': 'var(--text-hover)',
        'background': 'var(--background)',
        'background-hover': 'var(--background-hover)',
        'lb-one': 'var(--lb-one)',
        'lb-two': 'var(--lb-two)',
        'lb-three': 'var(--lb-three)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'error': 'var(--error)',
      },
    },
  },
  plugins: [],
};
