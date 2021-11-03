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
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      neutral: {
        DEFAULT: "var(--color-neutral)",
        50: "var(--color-neutral-50)",
        100: "var(--color-neutral-100)",
        200: "var(--color-neutral-200)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        800: "var(--color-neutral-800)",
        900: "var(--color-neutral-900)",
      },
      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        50: "var(--color-secondary-50)",
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
    },
    underlineOffset: {
      small: "2px",
    },
    underlineThickness: {
      bold: "2px",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.neutral.700"),
              a: {
                color: theme("colors.primary.700"),
                textDecoration: "underline",
                textDecorationColor: theme("colors.primary.300"),
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: theme("colors.primary.600"),
                  borderRadius: "0.09rem",
                  color: theme("colors.neutral.DEFAULT"),
                  textDecoration: "none",
                },
              },
              strong: {
                color: theme("colors.neutral.900"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.800"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.500"),
              },
              hr: {
                borderColor: theme("colors.neutral.200"),
              },
              blockquote: {
                color: theme("colors.neutral.800"),
                borderLeftColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h2: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h3: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h4: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              code: {
                color: theme("colors.secondary.700"),
              },
              "a code": {
                color: theme("colors.secondary.700"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              pre: {
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.50"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              thead: {
                color: theme("colors.neutral.800"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.300"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200"),
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
              color: theme("colors.neutral.400"),
              a: {
                color: theme("colors.primary.400"),
                textDecorationColor: theme("colors.neutral.500"),
                "&:hover": {
                  color: theme("colors.neutral.DEFAULT"),
                  textDecoration: "none",
                },
              },
              strong: {
                color: theme("colors.neutral.DEFAULT"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.600"),
              },
              hr: {
                borderColor: theme("colors.neutral.500"),
              },
              blockquote: {
                color: theme("colors.neutral.200"),
                borderLeftColor: theme("colors.primary.900"),
              },
              h1: {
                color: theme("colors.neutral.DEFAULT"),
              },
              h2: {
                color: theme("colors.neutral.DEFAULT"),
              },
              h3: {
                color: theme("colors.neutral.DEFAULT"),
              },
              h4: {
                color: theme("colors.neutral.DEFAULT"),
              },
              "figure figcaption": {
                color: theme("colors.neutral.400"),
              },
              code: {
                color: theme("colors.secondary.400"),
              },
              "a code": {
                color: theme("colors.secondary.400"),
              },
              pre: {
                color: theme("colors.neutral.200"),
                backgroundColor: theme("colors.neutral.700"),
              },
              "pre code": {
                color: theme("colors.neutral.200"),
              },
              thead: {
                color: theme("colors.neutral.DEFAULT"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.700"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.700"),
                color: theme("colors.neutral.300"),
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
