import Image from 'next/image';

export default function TemplateCase() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            [CATEGORIA OU TAG DO PROJETO]
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            [Título Principal do Case de Estudo]
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            [Subtítulo ou breve resumo do impacto e do que foi construído neste projeto.]
          </p>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 font-medium absolute z-10">[Inserir Imagem de Capa Aqui]</span>
            {/* Descomente a linha abaixo quando colocar a sua imagem */}
            {/* <Image src="/sua-imagem.jpg" alt="Descrição da imagem" fill className="object-cover" priority /> */}
          </div>
        </div>

        {/* Resumo do Projeto (Grid) */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Problema</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                [Descreva qual era o desafio de negócio ou a dor do utilizador que precisava de ser resolvida.]
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hipótese</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                [O que você acreditava que iria resolver o problema? Qual foi a aposta estratégica?]
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidências / Discovery</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                [Que dados, pesquisas ou análises basearam as suas decisões de design?]
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                [Qual foi o impacto final? Fale de métricas, entregáveis ou melhorias qualitativas.]
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte do Artigo (Sem prose, idêntico ao Sobre mim da Home) */}
        <div className="max-w-3xl mx-auto px-6 space-y-20 mb-24">
          
          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              [Título Tópico 1]
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                [Parágrafo detalhando o seu processo, desafios enfrentados e decisões de design iniciais.]
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              [Título Tópico 2]
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                [Mais contexto sobre a execução, handoff técnico ou testes realizados.]
              </p>
            </div>
            
            {/* Imagem Intermediária */}
            <figure className="my-10">
              <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 aspect-video relative flex items-center justify-center">
                <span className="text-zinc-500 text-sm font-medium absolute z-10">[Inserir Imagem Secundária Aqui]</span>
                {/* <Image src="/imagem-secundaria.jpg" alt="Descrição da imagem" fill className="object-cover" /> */}
              </div>
              <figcaption className="text-center text-sm font-medium text-zinc-500 mt-4">
                [Legenda da imagem ou contexto do protótipo/fluxo.]
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
                  [Decisões de Produto e UX]
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    [Explique como o design visual, arquitetura de informação ou sistema de componentes apoiou o negócio.]
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  [Título Tópico 4]
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    [Descreva ferramentas utilizadas, eficiência de processos ou facilitação de dinâmicas com a equipa.]
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  [Título Tópico 5]
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    [Mais um ponto de destaque, como colaboração com desenvolvedores, métricas alcançadas ou estratégia.]
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  [Aprendizados]
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    [O que você faria diferente? Qual foi a maior lição retirada deste projeto e como isso o fez evoluir como Product Designer?]
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