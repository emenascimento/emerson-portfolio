import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../../components/ThemeToggle';
import { ScrollToTop } from '../../components/ScrollToTop';
import { ResumeModal } from '../../components/ResumeModal';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import { ZoomableImage } from '../../components/ZoomableImage';

export default function CasePT() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Este portfólio é um produto
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            O Código como Design: Construindo o portfólio como produto
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            A decisão de abandonar plataformas No-Code e assumir o controle total da arquitetura, transformando o portfólio em uma prova real de habilidades entre Design e Engenharia.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Papel</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Design Engineer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Produto</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Portfólio (Web)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">IA Utilizada</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Cursor / Claude 3.5</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Em Produção</p>
            </div>
          </div>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image 
              src="/case-portfolio/Este-portfolio-e-um-produto2.jpg" 
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
                Um portfólio responsivo, totalmente bilíngue (PT/EN) e com SEO otimizado, tratado e evoluído como um produto digital real. Possui suporte nativo e performático a alternância de temas (Dark/Light mode) e obedece a critérios rigorosos de acessibilidade (contraste, HTML semântico e navegação), validando a minha atuação end-to-end.
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte do Artigo */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. Por que reconstruir o portfólio?
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  O portfólio de um Product Designer é, por essência, o seu produto mais importante. Quando utilizamos templates fechados ou ferramentas puramente visuais, terceirizamos as decisões de arquitetura e performance. A decisão de reconstruir não foi apenas estética, mas estratégica: eu precisava de um ambiente onde o código fosse a extensão natural do design.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. As limitações do No-Code
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  O site anterior construído no Framer nos trouxe evidências claras das limitações de plataformas visuais. Sentimos na prática a dificuldade de migrar ou expandir o projeto para fora do ambiente da ferramenta, enfrentamos grandes barreiras para melhorar a acessibilidade para todos os públicos e vimos o tempo de carregamento ser prejudicado por códigos invisíveis que a própria plataforma adicionava sem nosso controle.
                </p>
              </div>

              <ZoomableImage 
                src="/case-portfolio/framer_1.jpg" 
                alt="Interface de uma plataforma visual de construção de sites (Framer)" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video relative"
                figcaption="A dependência de ferramentas visuais limitava o controle sobre a estrutura e velocidade do site."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. O Código como meio de design
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Neste projeto, não houve uma etapa exaustiva de telas no Figma. O design foi feito "in browser", utilizando o Tailwind CSS para prototipar diretamente em código. Isso permitiu testar espaçamentos, tipografia (Inter e Epilogue) e contrastes em tempo real, num ambiente real.
                </p>
              </div>
              
              {/* Imagem Intermediária */}
              <ZoomableImage 
                src="/print-codigo.jpg" 
                alt="Trecho de código do componente da navbar" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video relative"
                figcaption="Estruturação direta de componentes em React e Tailwind CSS."
              />
            </div>
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
                    O foco foi a redução de ruído cognitivo. Eliminei páginas desnecessárias e consolidei as informações essenciais numa Single Page Application fluida. A navegação fixa com efeito "glassmorphism", o switch fluido de idiomas (PT/EN) e o toggle de tema claro/escuro nativo foram desenhados para garantir total controle, acessibilidade universal e conforto visual em qualquer dispositivo.
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


