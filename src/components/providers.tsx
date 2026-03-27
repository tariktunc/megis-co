"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      themes={["light", "dark"]}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
