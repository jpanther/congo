const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}",
      "./themes/congo/layouts/**/*.html",
      "./themes/congo/content/**/*.{html,md}",
    ],
  },
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      gray: colors.gray,
      primary: colors.violet,
      secondary: colors.fuchsia,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              a: {
                color: theme("colors.primary.700"),
                textDecoration: "underline",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: theme("colors.primary.600"),
                  color: theme("colors.white"),
                  textDecoration: "none",
                },
              },
              h2: {
                position: "relative",
              },
              h3: {
                position: "relative",
              },
              h4: {
                position: "relative",
              },
              code: {
                color: theme("colors.secondary.700"),
              },
              "pre code": {
                color: theme("colors.gray.700"),
              },
              pre: {
                backgroundColor: theme("colors.gray.50"),
              },
              kbd: {
                backgroundColor: theme("colors.gray.200"),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.secondary.200"),
                padding: "0.1rem 0.2rem",
                borderRadius: "0.12rem",
              },
            },
          ],
        },
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              a: {
                color: theme("colors.primary.400"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.secondary.400"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.700"),
              },
              "pre code": {
                color: theme("colors.gray.200"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
              kbd: {
                backgroundColor: theme("colors.gray.700"),
                color: theme("colors.gray.300"),
              },
              mark: {
                backgroundColor: theme("colors.secondary.400"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-underline-utils")],
};
