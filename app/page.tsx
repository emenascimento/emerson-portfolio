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
  IconMenu2, 
  IconX 
} from '@tabler/icons-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans relative">
      
      <main className="max-w-7xl mx-auto px-6 pt-20 sm:pt-36 pb-24 flex flex-col gap-32 sm:gap-48">
        
        {/* HERO SECTION */}
        <header id="inicio">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-heading text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">
              Emerson Nascimento
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Product Designer
            </span>
          </div>

          <h1 className="max-w-3xl font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
            Design estratégico para produtos digitais que movem negócios.
          </h1>
          
          <p className="max-w-xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            Atuo entre Design, Produto e Tecnologia para transformar necessidades de negócio em experiências digitais funcionais, intuitivas e escaláveis.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-4 mb-8">
            <span>Estratégia de UX</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Product Discovery</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Design Systems</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Product Design com IA</span>
          </div>
          
          <div className="flex gap-8">
            <Link href="mailto:contato.emenascimento@gmail.com" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-[#155dfc] transition-colors">
              Email <IconArrowUpRight size={18} stroke={2} />
            </Link>
            <Link href="https://linkedin.com/in/emenascimento" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-[#155dfc] transition-colors" target="_blank">
              LinkedIn <IconArrowUpRight size={18} stroke={2} />
            </Link>
          </div>
        </header>

        {/* SECÇÃO: PROJETOS SELECIONADOS */}
        <section id="projetos" className="scroll-mt-32">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            Projetos Selecionados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            
            <article className="group cursor-pointer">
              <Link href="/case-produto-1">
                <div className="relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-6 overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-400 font-medium">[Imagem Case 1]</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 group-hover:text-[#155dfc] transition-colors">
                  Título do Projeto Antigo 1
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Breve descrição do problema resolvido focando no impacto e nas métricas alcançadas.
                </p>
                <span className="flex items-center gap-1 text-sm text-zinc-900 dark:text-zinc-50 font-bold group-hover:text-[#155dfc] dark:group-hover:text-[#155dfc] transition-colors">
                  Ler o case de estudo <IconArrowRight size={18} stroke={2} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>

            <article className="group cursor-pointer">
              <Link href="/case-produto-2">
                <div className="relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-6 overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-400 font-medium">[Imagem Case 2]</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 group-hover:text-[#155dfc] transition-colors">
                  Título do Projeto Antigo 2
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Uma linha sobre como liderou o discovery ou estruturou o Design System deste produto.
                </p>
                <span className="flex items-center gap-1 text-sm text-zinc-900 dark:text-zinc-50 font-bold group-hover:text-[#155dfc] dark:group-hover:text-[#155dfc] transition-colors">
                  Ler o case de estudo <IconArrowRight size={18} stroke={2} className="transition-transform group-hover:translate-x-1" />
                </span>
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
              <div className="relative w-full aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-2xl flex items-center justify-center">
                 <span className="text-zinc-400 font-medium">[Mockup do Portfólio Aqui]</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO: O QUE EU FAÇO */}
        <section id="o-que-faco" className="scroll-mt-32">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            O que eu faço
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-heading text-xl font-bold mb-4">Product Discovery</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mergulho no problema antes de pensar na solução. Realizo pesquisas, facilito dinâmicas e valido hipóteses para garantir que estamos a construir o produto certo.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-heading text-xl font-bold mb-4">Estratégia de UX</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Desenho jornadas complexas e arquitetura de informação focadas em reduzir atrito, equilibrando as necessidades do utilizador com os objetivos de negócio.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-heading text-xl font-bold mb-4">UI & Handoff Técnico</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Crio interfaces escaláveis e Design Systems consistentes. O meu background em tecnologia garante entregas preparadas para a engenharia.
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
        <section className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Vamos construir algo incrível juntos.
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-10">
            Estou disponível para novos desafios e oportunidades onde eu possa agregar valor unindo design, estratégia e tecnologia.
          </p>
          
          {/* Botão padronizado com o estilo monocromático da navbar */}
          <Link 
            href="https://wa.me/5511977089503" 
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-md"
          >
            <IconBrandWhatsapp size={20} stroke={1.5} />
            Iniciar conversa no WhatsApp
          </Link>
        </section>

      </main>

    </div>
  );
}