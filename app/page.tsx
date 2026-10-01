import Link from 'next/link';
import { ThemeToggle } from './components/ThemeToggle';
import { ResumeModal } from './components/ResumeModal';
import { IconArrowUpRight, IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Navegação no topo (Navbar com efeito de vidro fosco) */}
      <nav className="w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="font-heading font-extrabold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
              EN.
            </Link>
            
            <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <Link href="#projetos" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                Projetos
              </Link>
              <Link href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                Sobre
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://wa.me/5511977089503" 
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-full dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all"
            >
              <IconBrandWhatsapp size={18} stroke={1.5} />
              Vamos conversar
            </Link>
            
            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
            
            <ThemeToggle />
          </div>
          
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-6 pt-20 sm:pt-36 pb-24">
        
        {/* Secção de Introdução (Hero) */}
        <header className="mb-64" id="sobre">
          
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
            <Link href="mailto:contato.emenascimento@gmail.com" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              Email <IconArrowUpRight size={18} stroke={2} />
            </Link>
            <Link href="https://linkedin.com/in/emenascimento" className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors" target="_blank">
              LinkedIn <IconArrowUpRight size={18} stroke={2} />
            </Link>
          </div>
        </header>

        {/* Seção de Projetos */}
        <section id="projetos" className="scroll-mt-24">
          
          {/* Título com a mesma força e peso visual do Hero */}
          <h2 className="font-heading text-2xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8">
            Projetos Selecionados
          </h2>
          
          <div className="flex flex-col gap-12">
            
            <article className="group cursor-pointer max-w-3xl">
              <Link href="/projeto-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Nome do Produto / Case 1
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Breve descrição do problema que resolveu. Foco em impacto, métricas ou na complexidade da regra de negócio que simplificou.
                </p>
                <span className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Ler o case de estudo <IconArrowRight size={18} stroke={1.5} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>

            <article className="group cursor-pointer max-w-3xl">
              <Link href="/projeto-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Nome do Produto / Case 2
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Uma linha sobre como liderou o discovery ou melhorou a conversão deste produto SaaS ou aplicativo.
                </p>
                <span className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Ler o case de estudo <IconArrowRight size={18} stroke={1.5} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>

          </div>
        </section>
      </main>

      {/* Rodapé do Site */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          
          {/* Links do Rodapé */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link 
              href="https://linkedin.com/in/emenascimento" 
              target="_blank" 
              className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              LinkedIn
            </Link>
            
            {/* Modal de Currículo integrada */}
            <ResumeModal />
            
            <Link 
              href="mailto:contato.emenascimento@gmail.com" 
              className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              contato.emenascimento@gmail.com
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Copyright 2026 © Emerson Nascimento
          </p>
          
        </div>
      </footer>

    </div>
  );
}