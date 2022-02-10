module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bg-fade-in": "bg-fade-in 1s ease-out",
      },
      keyframes: {
        "bg-fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
      },
    },
  },
  plugins: [],
};
