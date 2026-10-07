import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

// 1. Configurar as duas fontes com as suas respetivas variáveis
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Emerson Nascimento | Product Designer",
  description: "Portfólio de Produto focado em resolver problemas complexos com design.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || 'pt';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      {/* 2. Injetar variáveis e definir estrutura flex para empurrar o rodapé para o fundo (min-h-screen flex flex-col) */}
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-blue-200 dark:selection:bg-blue-900 flex flex-col min-h-screen`}>
        {/* Componentes Globais Injetados */}
        <Navbar lang={lang} />
        
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer lang={lang} />
        <ScrollToTop />
      </body>
    </html>
  );
}