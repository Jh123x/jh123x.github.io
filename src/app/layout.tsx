import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Metadata } from "next";
import { NoSSRNav } from "./client";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Wen Junhua",
  description: "Jh123x Portfolio Website",
  manifest: "/manifest.json",
};

interface layout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: layout) {
  return (
    <html lang="en">
      <body className="dark-theme">
        <AppRouterCacheProvider
          options={{
            key: "css",
            enableCssLayer: true,
          }}
        >
          <CssBaseline />
          <NoSSRNav children={children} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
