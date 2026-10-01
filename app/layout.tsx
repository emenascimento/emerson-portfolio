import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

// 1. Configurar as duas fontes com as suas respetivas variáveis
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Emerson Nascimento | Product Designer",
  description: "Portfólio de Produto focado em resolver problemas complexos com design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* 2. Injetar as duas variáveis e definir a fonte padrão (font-sans) no body */}
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-blue-200 dark:selection:bg-blue-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}