import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../components/ThemeToggle';
import { ScrollToTop } from '../components/ScrollToTop';
import { ResumeModal } from '../components/ResumeModal';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';

export default function CasePortfolio() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Este portfólio é um produto
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            O Código como Design: Construindo o portfólio como produto
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A decisão de abandonar plataformas No-Code e assumir o controle total da arquitetura, transformando o portfólio em uma prova real de habilidades entre Design e Engenharia.
          </p>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image 
              src="/vscode.jpg" 
              alt="Ambiente de desenvolvimento do portfólio no VS Code" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Resumo do Projeto (Grid) */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Problema</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Plataformas No-Code limitam a arquitetura da informação, injetam código desnecessário (prejudicando a performance) e não refletem a realidade do handoff técnico num ambiente de produto real.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hipótese</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Se eu construir o portfólio em React/Next.js, provo na prática o meu background técnico, garantindo performance, total liberdade de design e um código escalável.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidências (Site Antigo)</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                O site anterior no Framer apresentava vendor lock-in, dificuldades na otimização de acessibilidade e um tempo de carregamento impactado por scripts de terceiros.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Um portfólio ultra-rápido, com SEO otimizado, suporte nativo a Dark Mode e um Design System próprio em Tailwind CSS, validando a atuação end-to-end.
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte do Artigo (Sem prose, idêntico ao Sobre mim da Home) */}
        <div className="max-w-3xl mx-auto px-6 space-y-20 mb-24">
          
          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Por que reconstruir o portfólio?
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                O portfólio de um Product Designer é, por essência, o seu produto mais importante. Quando utilizamos templates fechados ou ferramentas puramente visuais, terceirizamos as decisões de arquitetura e performance. A decisão de reconstruir não foi apenas estética, mas estratégica: eu precisava de um ambiente onde o código fosse a extensão natural do design.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              O Código como meio de design
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Neste projeto, não houve uma etapa exaustiva de telas no Figma. O design foi feito "in browser", utilizando o Tailwind CSS para prototipar diretamente em código. Isso permitiu testar espaçamentos, tipografia (Inter e Epilogue) e contrastes em tempo real, num ambiente real.
              </p>
            </div>
            
            {/* Imagem Intermediária */}
            <figure className="my-10">
              <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 aspect-video relative">
                <Image src="/print-codigo.jpg" alt="Trecho de código do componente da navbar" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm font-medium text-zinc-500 mt-4">
                Estruturação direta de componentes em React e Tailwind CSS.
              </figcaption>
            </figure>
          </section>
        </div>

        {/* Segunda Parte: Grelha de 2 Tópicos com Fundo Diferente */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
              
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Decisões de Produto e UX
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    O foco foi a redução de ruído cognitivo. Eliminei páginas desnecessárias e consolidei as informações essenciais numa Single Page Application fluida. A navegação fixa com efeito "glassmorphism" e o modo escuro nativo foram implementados para garantir conforto visual em qualquer dispositivo.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  IA & Workflow
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Atuar de forma independente exige eficiência. Utilizei IA generativa como <em>pair programmer</em> para acelerar o boilerplate do Next.js, estruturar modais lógicos e debugar comportamentos complexos do React. A IA não substituiu a decisão de design, mas operou como uma alavanca.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Do localhost à produção
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    O deploy contínuo via Vercel garantiu que cada alteração no repositório fosse refletida em segundos. A arquitetura a serviço da qualidade técnica significa que este portfólio pode escalar facilmente: adicionar um blog, um novo case ou integrar uma API torna-se um processo trivial.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Aprendizados
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Projetar em código muda a forma como pensamos sobre estados, componentes e responsividade. O maior aprendizado foi entender onde o detalhismo visual agrega valor e onde a pragmática técnica deve prevalecer. O resultado é um produto digital que demonstra exatamente <em>como</em> eu faço.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}