import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { AppProviders } from "@/providers/AppProviders";
import { fontSans } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "Software App",
  description: "PPTI 25 Software Engineering - Kelompok 7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={fontSans.variable}>
      <body>
        <AppRouterCacheProvider>
          <AppProviders>{children}</AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
