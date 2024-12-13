module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0b0f1a", // Background color
                primary: "#38f9d7", // Neon teal color
                secondary: "#1f2833", // Card background
                light: "#c5c6c7", // Text color
            },
            boxShadow: {
                glow: "0 0 10px #38f9d7, 0 0 20px #38f9d7",
            },
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out",
                bounceIn: "bounceIn 1s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                bounceIn: {
                    "0%": { transform: "scale(0.8)", opacity: 0 },
                    "50%": { transform: "scale(1.1)", opacity: 1 },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
