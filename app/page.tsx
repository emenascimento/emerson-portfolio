import Link from 'next/link';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Navegação no topo (Navbar) */}
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Emerson.
          </span>
          <ThemeToggle />
        </div>
      </nav>

      {/* Conteúdo Principal - Alterámos de max-w-3xl para max-w-5xl para alinhar com o menu */}
      <main className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16 pb-24">
        
        {/* Secção de Introdução */}
        <header className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Olá, eu sou o Emerson Nascimento.
          </h1>
          {/* O max-w-2xl aqui garante que a linha de texto não fique demasiado comprida, o que dificultaria a leitura */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            Product Designer focado em criar soluções digitais que conectam as necessidades do negócio com a experiência do utilizador. Buscando sempre a simplicidade em problemas complexos.
          </p>
          
          <div className="mt-8 flex gap-4">
            <Link href="mailto:seuemail@exemplo.com" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              Email ↗
            </Link>
            <Link href="https://linkedin.com/in/seu-linkedin" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors" target="_blank">
              LinkedIn ↗
            </Link>
          </div>
        </header>

        {/* Secção de Projetos */}
        <section>
          <h2 className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-8">
            Projetos Selecionados
          </h2>
          
          <div className="flex flex-col gap-12">
            
            {/* Projeto 1 */}
            <article className="group cursor-pointer max-w-3xl">
              <Link href="/projeto-1">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Nome do Produto / Case 1
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Breve descrição do problema que resolveu. Foco em impacto, métricas ou na complexidade da regra de negócio que simplificou.
                </p>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium group-hover:underline">Ler o case de estudo →</span>
              </Link>
            </article>

            {/* Projeto 2 */}
            <article className="group cursor-pointer max-w-3xl">
              <Link href="/projeto-2">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Nome do Produto / Case 2
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Uma linha sobre como liderou o discovery ou melhorou a conversão deste produto SaaS ou aplicativo.
                </p>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium group-hover:underline">Ler o case de estudo →</span>
              </Link>
            </article>

          </div>
        </section>
      </main>

    </div>
  );
}