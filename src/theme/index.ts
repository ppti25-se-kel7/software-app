"use client";

import { createTheme } from "@mui/material/styles";
import { palette, radius, spacingUnit } from "./tokens";

export const theme = createTheme({
  palette,
  spacing: spacingUnit,
  shape: { borderRadius: radius.md },
  typography: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export { radius } from "./tokens";
