// app/providers.jsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  // O ThemeProvider envolve a aplicação para gerenciar os temas.
  // disableTransitionOnChange é importante para evitar flashes de cor ao trocar.
  // attribute="class" faz o Tailwind usar as classes 'dark' ou 'light' no HTML.
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // Usa a preferência do sistema operacional
      enableSystem // Permite detecção automática do tema do sistema
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}