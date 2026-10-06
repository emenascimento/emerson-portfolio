"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './components/ThemeToggle';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';
import { 
  IconArrowUpRight, 
  IconArrowRight, 
  IconBrandWhatsapp, 
  IconMail,
  IconMenu2, 
  IconX,
  IconSearch,
  IconLayout,
  IconComponents,
  IconSparkles
} from '@tabler/icons-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans relative">
      
      <main className="max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-24 flex flex-col gap-32 sm:gap-48">
        
        {/* HERO SECTION */}
        <header id="inicio" className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="font-heading text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">
              Emerson Nascimento
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Product Designer
            </span>
          </div>

          <h1 className="max-w-4xl font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] mx-auto">
            Design estratégico para produtos digitais que movem negócios.
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 mx-auto">
            Atução entre Design, Produto e Tecnologia para transformar necessidades de negócio em experiências digitais funcionais, intuitivas e escaláveis.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-4 mb-8">
            <span>Estratégia de UX</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Product Discovery</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Design Systems</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Product Design com IA</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="https://linkedin.com/in/emenascimento" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-sm" target="_blank">
              LinkedIn <IconArrowUpRight size={18} stroke={1.5} />
            </Link>
            <ResumeModal className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-zinc-900 bg-transparent border-2 border-zinc-200 hover:border-zinc-300 dark:text-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-full transition-all">
              Currículo <IconArrowUpRight size={18} stroke={1.5} />
            </ResumeModal>
          </div>
        </header>

        {/* SECÇÃO: PROJETOS SELECIONADOS */}
        <section id="projetos" className="scroll-mt-32">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            Projetos Selecionados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            
            <article className="group relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/3] bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer shadow-lg">
              <Link href="/case-produto-3" className="block w-full h-full">
                {/* Imagem de Fundo & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image src="/SeekFigurativo/cover.jpg" alt="Seek Figurativo" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                
                {/* Conteúdo Sobreposto */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-10">
                  <div className="max-w-md">
                    <span className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-4 block">
                      Seek Figurativo
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tighter drop-shadow-md">
                      Design completo de um módulo de pesquisa visual com Inteligência Artificial.
                    </h3>
                  </div>
                  
                  <div className="flex items-center mt-auto">
                    <span className="inline-flex items-center justify-center px-6 py-3 border border-white/40 rounded-full text-white font-bold text-sm backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                      Ver Projeto
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            <article className="group relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/3] bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer shadow-lg">
              <Link href="/case-produto-1" className="block w-full h-full">
                {/* Imagem de Fundo & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image src="/moneyfy/hero-2.jpg" alt="MoneyFy" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                
                {/* Conteúdo Sobreposto */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-10">
                  <div className="max-w-md">
                    <span className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-4 block">
                      MoneyFy
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tighter drop-shadow-md">
                      Reposicionamento de um SaaS financeiro para escritórios de P.I.
                    </h3>
                  </div>
                  
                  <div className="flex items-center mt-auto">
                    <span className="inline-flex items-center justify-center px-6 py-3 border border-white/40 rounded-full text-white font-bold text-sm backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                      Ver Projeto
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            <article className="group relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/3] bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer shadow-lg">
              <Link href="/case-produto-2" className="block w-full h-full">
                {/* Imagem de Fundo & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image src="/nutriguide/hero.jpg" alt="NutriGuide" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                
                {/* Conteúdo Sobreposto */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-10">
                  <div className="max-w-md">
                    <span className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-4 block">
                      NutriGuide
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tighter drop-shadow-md">
                      Aplicativo focado na rotina do paciente para engajamento no plano alimentar.
                    </h3>
                  </div>
                  
                  <div className="flex items-center mt-auto">
                    <span className="inline-flex items-center justify-center px-6 py-3 border border-white/40 rounded-full text-white font-bold text-sm backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                      Ver Projeto
                    </span>
                  </div>
                </div>
              </Link>
            </article>

          </div>
        </section>

        {/* SECÇÃO EXCLUSIVA: PORTFÓLIO COMO PRODUTO */}
        <section id="portfolio-produto" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-zinc-100 dark:bg-zinc-900/50 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
            
            {/* Bloco de Texto */}
            <div className="flex-1 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                Este portfólio é um produto
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50">
                O Código como Design
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg max-w-xl">
                Por que decidi abandonar plataformas No-Code e construir o meu próprio portfólio em React e Tailwind, tratando-o como o meu produto digital.
              </p>
              <div className="pt-2">
                <Link href="/case-portfolio" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors">
                  Ler o case de estudo <IconArrowRight size={18} stroke={2} />
                </Link>
              </div>
            </div>

            {/* Imagem de Destaque */}
            <div className="flex-1 w-full z-10">
              <div className="relative w-full aspect-[4/3] bg-zinc-900 dark:bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-2xl flex items-center justify-center">
                 <Image src="/cover-portfolio.jpg" alt="Mockup do Portfólio" fill className="object-contain object-center" />
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO: O QUE EU FAÇO */}
        <section id="o-que-faco" className="scroll-mt-32">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            O que eu faço
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex flex-col p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8">001</span>
              <IconSearch size={48} stroke={1} className="text-zinc-800 dark:text-zinc-200 mb-10" />
              <h3 className="font-heading text-xl font-bold mb-4">Product Discovery & User Research</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-auto">
                Mergulho no problema antes da solução. Conduzo pesquisas com usuários e valido hipóteses para garantir que estamos construindo o produto certo para as pessoas certas.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8">002</span>
              <IconLayout size={48} stroke={1} className="text-zinc-800 dark:text-zinc-200 mb-10" />
              <h3 className="font-heading text-xl font-bold mb-4">UX/UI & Estratégia de Produto</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-auto">
                Desenho jornadas complexas e interfaces de alta fidelidade focadas em reduzir atrito, equilibrando as necessidades do usuário com os objetivos de negócio.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8">003</span>
              <IconComponents size={48} stroke={1} className="text-zinc-800 dark:text-zinc-200 mb-10" />
              <h3 className="font-heading text-xl font-bold mb-4">Design Systems & Handoff</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-auto">
                Domínio em Figma para criar componentes escaláveis. Opero de ponta a ponta (do Discovery ao Handoff), garantindo que a transição para a engenharia seja fluída e viável.
              </p>
            </div>

            <div className="flex flex-col p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8">004</span>
              <IconSparkles size={48} stroke={1} className="text-zinc-800 dark:text-zinc-200 mb-10" />
              <h3 className="font-heading text-xl font-bold mb-4">Design Impulsionado por IA</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-auto">
                Integro ferramentas e LLMs no processo de Product Design para otimizar fluxos de trabalho, analisar dados de forma ágil e elevar o nível de produtividade das entregas.
              </p>
            </div>

          </div>
        </section>

        {/* SECÇÃO: PERFIL PROFISSIONAL (SOBRE) */}
        <section id="sobre" className="scroll-mt-32 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8">
            Sobre mim
          </h2>
          <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Sou um Product Designer com uma fundação sólida em desenvolvimento de software e pós-graduação em UX. Ao longo da minha carreira, tenho operado na intersecção entre o design e o código.
            </p>
            <p>
              Acredito que o design não termina no Figma. O verdadeiro impacto acontece quando a interface é construída e vai para as mãos do utilizador. Por isso, valorizo processos ágeis, prototipagem funcional e uma colaboração muito próxima com os engenheiros.
            </p>
            <p>
              O meu objetivo é simplificar sistemas complexos e entregar produtos que não só resolvam problemas reais, mas que também façam sentido financeiramente para o negócio.
            </p>
          </div>
        </section>

        {/* SEÇÃO: CONTATO (CTA) */}
        <section id="contato" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Vamos construir algo incrível juntos.
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-10">
            Estou disponível para novos desafios e oportunidades onde eu possa agregar valor unindo design, estratégia e tecnologia.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="https://wa.me/5511977089503" 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-md"
            >
              <IconBrandWhatsapp size={20} stroke={1.5} />
              WhatsApp
            </Link>

            <Link 
              href="mailto:contato.emenascimento@gmail.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-900 bg-transparent border-2 border-zinc-200 hover:border-zinc-300 dark:text-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-full transition-all"
            >
              <IconMail size={20} stroke={1.5} />
              E-mail
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}