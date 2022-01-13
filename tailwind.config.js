const colors = require("tailwindcss/colors");

function varWithOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/congo/layouts/**/*.html",
    "./themes/congo/content/**/*.{html,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        neutral: {
          DEFAULT: varWithOpacity("--color-neutral"),
          50: varWithOpacity("--color-neutral-50"),
          100: varWithOpacity("--color-neutral-100"),
          200: varWithOpacity("--color-neutral-200"),
          300: varWithOpacity("--color-neutral-300"),
          400: varWithOpacity("--color-neutral-400"),
          500: varWithOpacity("--color-neutral-500"),
          600: varWithOpacity("--color-neutral-600"),
          700: varWithOpacity("--color-neutral-700"),
          800: varWithOpacity("--color-neutral-800"),
          900: varWithOpacity("--color-neutral-900"),
        },
        primary: {
          50: varWithOpacity("--color-primary-50"),
          100: varWithOpacity("--color-primary-100"),
          200: varWithOpacity("--color-primary-200"),
          300: varWithOpacity("--color-primary-300"),
          400: varWithOpacity("--color-primary-400"),
          500: varWithOpacity("--color-primary-500"),
          600: varWithOpacity("--color-primary-600"),
          700: varWithOpacity("--color-primary-700"),
          800: varWithOpacity("--color-primary-800"),
          900: varWithOpacity("--color-primary-900"),
        },
        secondary: {
          50: varWithOpacity("--color-secondary-50"),
          100: varWithOpacity("--color-secondary-100"),
          200: varWithOpacity("--color-secondary-200"),
          300: varWithOpacity("--color-secondary-300"),
          400: varWithOpacity("--color-secondary-400"),
          500: varWithOpacity("--color-secondary-500"),
          600: varWithOpacity("--color-secondary-600"),
          700: varWithOpacity("--color-secondary-700"),
          800: varWithOpacity("--color-secondary-800"),
          900: varWithOpacity("--color-secondary-900"),
        },
      },
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
                  color: `${theme("colors.neutral.DEFAULT")} !important`,
                  textDecoration: "none !important",
                  backgroundColor: `${theme("colors.primary.600")} !important`,
                  borderRadius: "0.09rem",
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
                borderRightColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.900"),
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
              "thead th": {
                color: theme("colors.neutral.800"),
              },
              "thead tr": {
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
              color: theme("colors.neutral.300"),
              a: {
                color: theme("colors.primary.400"),
                textDecorationColor: theme("colors.neutral.500"),
                "&:hover": {
                  color: `${theme("colors.neutral.DEFAULT")} !important`,
                  textDecoration: "none !important",
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
                borderRightColor: theme("colors.primary.900"),
              },
              h1: {
                color: theme("colors.neutral.DEFAULT"),
              },
              h2: {
                color: theme("colors.neutral.50"),
              },
              h3: {
                color: theme("colors.neutral.50"),
              },
              h4: {
                color: theme("colors.neutral.50"),
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
              "thead th": {
                color: theme("colors.neutral.DEFAULT"),
              },
              "thead tr": {
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
  plugins: [require("@tailwindcss/typography")],
};
