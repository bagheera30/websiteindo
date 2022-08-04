const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        screens: {
            sm: "0px",
            // => @media (min-width: 640px) { ... }

            md: "1024px",
            // => @media (min-width: 1024px) { ... }

            lg: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
