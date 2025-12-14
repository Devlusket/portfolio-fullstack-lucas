import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importa o ThemeProvider que acabamos de criar
import { ThemeProvider } from "./providers"; 
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfólio Lucas Soares",
  description: "Lucas Soares Brito Desenvolvedor Fullstack",
};

icons: {
  icon: '/app/icon.png';
}

export default function RootLayout({ children }) {
  return (
    // Note que a classe 'dark' será adicionada ao HTML pelo ThemeProvider se necessário
    <html lang="pt-br" suppressHydrationWarning> 
      {/* suppressHydrationWarning: Necessário no <html> quando se usa next-themes */}
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Envolve o conteúdo com o ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}