import { colors, colorsDark, spacing, typography } from './constants/variable';

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          light: colors.primaryLight,
          dark: colorsDark.primary,
          'dark-light': colorsDark.primaryLight,
        },
        success: {
          DEFAULT: colors.success,
          light: colors.successLight,
        },
        danger: colors.danger,
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
          'dark-primary': colorsDark.text.primary,
          'dark-secondary': colorsDark.text.secondary,
          'dark-muted': colorsDark.text.muted,
        },
        border: colors.border,
        'border-dark': colorsDark.border,
        surface: {
          input: colors.surface.input,
          card: colors.surface.card,
          'dark-input': colorsDark.surface.input,
          'dark-card': colorsDark.surface.card,
        },
        background: colors.background,
        'background-dark': colorsDark.background,
        gray: colors.gray,
      },
      spacing,
      fontSize: typography,
    },
  },

  plugins: [],
};
