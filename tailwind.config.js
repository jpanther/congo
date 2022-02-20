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
          css: {
            "--tw-prose-body": theme("colors.neutral.700"),
            "--tw-prose-headings": theme("colors.neutral.800"),
            "--tw-prose-lead": theme("colors.neutral.500"),
            "--tw-prose-links": theme("colors.primary.700"),
            "--tw-prose-bold": theme("colors.neutral.900"),
            "--tw-prose-counters": theme("colors.neutral.800"),
            "--tw-prose-bullets": theme("colors.neutral.500"),
            "--tw-prose-hr": theme("colors.neutral.200"),
            "--tw-prose-quotes": theme("colors.neutral.700"),
            "--tw-prose-quote-borders": theme("colors.primary.200"),
            "--tw-prose-captions": theme("colors.neutral.500"),
            "--tw-prose-code": theme("colors.secondary.700"),
            "--tw-prose-pre-code": theme("colors.neutral.700"),
            "--tw-prose-pre-bg": theme("colors.neutral.50"),
            "--tw-prose-th-borders": theme("colors.neutral.500"),
            "--tw-prose-td-borders": theme("colors.neutral.300"),
            "--tw-prose-invert-body": theme("colors.neutral.300"),
            "--tw-prose-invert-headings": theme("colors.neutral.50"),
            "--tw-prose-invert-lead": theme("colors.neutral.500"),
            "--tw-prose-invert-links": theme("colors.primary.400"),
            "--tw-prose-invert-bold": theme("colors.neutral.DEFAULT"),
            "--tw-prose-invert-counters": theme("colors.neutral.400"),
            "--tw-prose-invert-bullets": theme("colors.neutral.600"),
            "--tw-prose-invert-hr": theme("colors.neutral.500"),
            "--tw-prose-invert-quotes": theme("colors.neutral.200"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.900"),
            "--tw-prose-invert-captions": theme("colors.neutral.400"),
            "--tw-prose-invert-code": theme("colors.secondary.400"),
            "--tw-prose-invert-pre-code": theme("colors.neutral.200"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral.700"),
            "--tw-prose-invert-th-borders": theme("colors.neutral.500"),
            "--tw-prose-invert-td-borders": theme("colors.neutral.700"),
            a: {
              textDecoration: "underline",
              textDecorationColor: theme("colors.primary.300"),
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.neutral.DEFAULT"),
                textDecoration: "none",
                backgroundColor: theme("colors.primary.600"),
                borderRadius: "0.09rem",
              },
            },
            "a code": {
              color: "var(--tw-prose-code)",
            },
            kbd: {
              backgroundColor: theme("colors.neutral.200"),
              padding: "0.1rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            },
            mark: {
              color: theme("colors.neutral.800"),
              backgroundColor: theme("colors.secondary.200"),
              padding: "0.1rem 0.2rem",
              borderRadius: "0.12rem",
            },
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.neutral.600"),
            },
            kbd: {
              color: theme("colors.neutral.200"),
              backgroundColor: theme("colors.neutral.700"),
            },
            mark: {
              backgroundColor: theme("colors.secondary.400"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
