import { Inter } from "next/font/google";

// PLACEHOLDER font until the Figma style guide picks one.
// `variable` exposes the font as a CSS variable; the class must sit on <html>
// (see app/layout.tsx and .storybook/preview.tsx) so portals like dialogs inherit it.
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
