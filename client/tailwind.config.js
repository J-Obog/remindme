module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                kayak: ['"Kayak Sans"', 'sans-serif'],
            },
            animation: {
                'bg-fade-in': 'bg-fade-in 1s ease-out',
            },
            keyframes: {
                'bg-fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
            },
            backgroundImage: {
                'auth-page-bg': "url('/src/assets/img/auth-page-bg.svg')",
            },
        },
    },
    plugins: [],
};
