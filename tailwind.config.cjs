const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.svelte", "./src/**/*.css", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },

      colors: {
        blue: {
          osce: "#243965",
          DEFAULT: "#335290",
          saife: "#34C5EB",
          light: "#A5E5F6",
        },

        gray: {
          light: "#6B7280",
          dark: "#374151",
        },

        green: "#059669",
        rose: "#F43F5E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
