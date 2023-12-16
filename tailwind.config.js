/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {'300': '#4B88FF', '400': '#2817ED'},
                darkness: {'100': '#DFDEEF', '200': '#A5A2B5', '300': '#494857', '400': '#403F53', '500': '#EAE9FF14', '600': '#08071A', '700': '#08071A66'}
            },
            fontFamily: {
                sans: ["Poppins"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

