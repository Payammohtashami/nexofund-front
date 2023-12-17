/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {'300': '#4B88FF', '400': '#2817ED', '500': '#B53FEC'},
                darkness: {'100': '#DFDEEF', '200': '#A5A2B5', '300': '#494857', '400': '#403F53', '500': '#EAE9FF14', '600': '#08071A', '700': '#08071A66', "800": '#1A192C'}
            },
            fontFamily: {
                sans: ["Poppins"],
            },
            boxShadow: {
                'btn': '0px 0px 16px 0px #2817ED80'
            },
            backgroundImage: {
                'gradient-primary': "linear-gradient(100.84deg, #2817ED 4.93%, #AB30D7 84.35%)",
                'gradient-dark-100': "linear-gradient(180deg, #535172 0%, #414974 100%)",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

