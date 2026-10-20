/**
 * Design tokens.
 *
 * PLACEHOLDER: these values are neutral defaults until the Figma style guide is ready.
 * When it is, replace the values here only. Components must read colors, radius and
 * spacing from the theme, never hard-code them, so a token change restyles everything.
 */

export const palette = {
  primary: {
    main: "#2563EB",
    light: "#60A5FA",
    dark: "#1E40AF",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#7C3AED",
    light: "#A78BFA",
    dark: "#5B21B6",
    contrastText: "#FFFFFF",
  },
  error: {
    main: "#DC2626",
    light: "#F87171",
    dark: "#991B1B",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#D97706",
    light: "#FBBF24",
    dark: "#92400E",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#16A34A",
    light: "#4ADE80",
    dark: "#166534",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#0891B2",
    light: "#22D3EE",
    dark: "#155E75",
    contrastText: "#FFFFFF",
  },
  text: { primary: "#0F172A", secondary: "#475569", disabled: "#94A3B8" },
  background: { default: "#F8FAFC", paper: "#FFFFFF" },
  divider: "#E2E8F0",
};

/** Base unit in px; `theme.spacing(2)` = 8px. */
export const spacingUnit = 4;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
};
