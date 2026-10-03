"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { 
  IconBrandWhatsapp, 
  IconMenu2, 
  IconX,
  IconArrowLeft 
} from '@tabler/icons-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Verifica se estamos na página inicial
  const isHome = pathname === '/';

  return (
    <>
      <nav className="w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="font-heading font-extrabold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
              EN.
            </Link>
            
            {/* Lógica condicional: Menu da Home vs Botão Voltar das internas */}
            {isHome ? (
              <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                <Link href="#projetos" className="hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors">
                  Projetos
                </Link>
                <Link href="#portfolio-produto" className="hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors">
                  Este Portfólio
                </Link>
                <Link href="#o-que-faco" className="hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors">
                  O que faço
                </Link>
                <Link href="#sobre" className="hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors">
                  Sobre
                </Link>
              </div>
            ) : (
              <>
                <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
                <Link href="/" className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-[#155dfc] dark:text-zinc-400 dark:hover:text-[#155dfc] transition-colors">
                  <IconArrowLeft size={16} stroke={2} />
                  <span className="hidden sm:inline">Voltar à Home</span>
                  <span className="sm:hidden">Voltar</span>
                </Link>
              </>
            )}
          </div>

          {/* Lado Direito: CTA, Tema e Hambúrguer */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              href="https://wa.me/5511977089503" 
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-sm"
            >
              <IconBrandWhatsapp size={18} stroke={1.5} />
              Vamos conversar
            </Link>
            
            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
            
            <ThemeToggle />

            {/* Mostra o hambúrguer apenas na Home */}
            {isHome && (
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            )}
          </div>
          
        </div>

        {/* Gaveta do Menu Mobile (Só aparece na Home se estiver aberto) */}
        {isHome && isMobileMenuOpen && (
          <div className="sm:hidden border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 py-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold">
              <Link href="#projetos" onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] transition-colors">
                Projetos
              </Link>
              <Link href="#portfolio-produto" onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] transition-colors">
                Este Portfólio
              </Link>
              <Link href="#o-que-faco" onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] transition-colors">
                O que faço
              </Link>
              <Link href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] transition-colors">
                Sobre
              </Link>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <Link 
                  href="https://wa.me/5511977089503" 
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all"
                >
                  <IconBrandWhatsapp size={18} stroke={1.5} />
                  Vamos conversar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}