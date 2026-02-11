/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1a1a1a",
                "primary-accent": "#CFB53B",
                "background-light": "#FAFAFA",
                "background-dark": "#121212",
                "surface-light": "#FFFFFF",
                "surface-dark": "#1E1E1E",
                "text-light": "#333333",
                "text-dark": "#E5E5E5",
                "text-muted-light": "#666666",
                "text-muted-dark": "#A3A3A3",
                "border-light": "#E5E5E5",
                "border-dark": "#333333",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            borderRadius: {
                DEFAULT: "4px",
            },
        },
    },
    plugins: [],
}
