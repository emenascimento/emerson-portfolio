import Link from 'next/link';
import Image from 'next/image';
import { ZoomableImage } from '../../components/ZoomableImage';

export default function CasePT() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            SaaS B2B • Propriedade Intelectual
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            Seek Figurativo
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Design e Handoff Técnico de um módulo avançado de pesquisa de marcas por similaridade de imagem. Da jornada de busca com IA à engenharia de acessos e regras de negócio.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Papel</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Produto</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Seek Figurativo</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">IA Utilizada</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Claude</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Em Produção</p>
            </div>
          </div>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-[4/3] sm:aspect-video bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/SeekFigurativo/cover.jpg" 
              alt="Capa do projeto Seek Figurativo" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Resumo do Projeto (Grid) */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">O Contexto</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Na gestão de Propriedade Intelectual (PI), a busca por similaridade de marcas não se resume a textos. A <strong>Pesquisa Figurativa</strong> exige análise visual rigorosa, apoiada por inteligência artificial, para identificar semelhanças conceituais, estruturais e compostas em logotipos e símbolos registrados.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">O Desafio</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mapear, projetar e documentar a versão 1.0 (Beta) deste módulo. O desafio era unificar o upload e recorte de imagens com filtros altamente específicos (NCL, CFE, Situação do Processo), e garantir que os desenvolvedores tivessem um Handoff técnico à prova de falhas.
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte: Jornada e Fluxos */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. A Jornada de Pesquisa Visual
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  O fluxo desenhado para o <strong>Seek Figurativo</strong> é linear, porém profundo. Tudo começa no painel inicial onde o usuário monitora sua cota de pesquisas mensais. Ao iniciar uma busca, o usuário faz o upload da imagem, podendo utilizar uma ferramenta interna de <strong>recorte (crop)</strong> para focar na área exata do símbolo.
                </p>
                <p>
                  As <strong>Estratégias de Busca</strong> moldam o algoritmo:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Similaridade Composta:</strong> Combina conceito e forma.</li>
                  <li><strong>Similaridade Conceitual:</strong> Foco na ideia da imagem, independente do traço.</li>
                  <li><strong>Semelhança de Forma:</strong> Avalia proporções, contornos e padrões geométricos.</li>
                </ul>
                <p className="mt-6">
                  Além da IA, apliquei refinamentos técnicos vitais para o setor: cruzamento por Classes de Viena (CFE), NCL, número de RPI e <em>status</em> do processo (Extinto ou Arquivado).
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. Resultados, Comparação e Auditoria
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  A visualização de resultados precisava de alta densidade sem perder clareza. O grid apresenta os processos com ações rápidas e permite a seleção em massa para auditoria. 
                </p>
                <p>
                  A cereja do bolo é a <strong>Comparação Visual</strong>: um modal onde a imagem enviada e a marca registrada encontrada pelo sistema são colocadas lado a lado. Junto a elas, todo o escopo de metadados jurídicos essenciais é listado estruturalmente para reduzir o tempo de decisão:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Datas Vitais:</strong> Depósito, Concessão, Vigência e Proteção.</li>
                  <li><strong>Eventos Legais:</strong> Histórico completo de Despachos e Petições.</li>
                  <li><strong>Abrangência:</strong> Países Designados (Protocolo de Madri) e Classes.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Highlight Section: Handoff and Architecture */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 py-24 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-16 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                A Engenharia do Handoff
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Um produto corporativo não vive apenas de telas bonitas. A documentação técnica enviada para o Front-end foi estruturada em 6 pilares rigorosos para eliminar ambiguidades no desenvolvimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Regras de Acesso e Logs</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Diferenciação arquitetural de perfis. O <strong>Master/Admin</strong> possui visão global e filtros profundos do histórico de todo o time, enquanto o <strong>Usuário Dependente</strong> é restrito, por regras de negócio e interface, ao seu próprio uso (sandbox).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Design System & Variantes</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Documentação total de Componentes de UI. Todos os botões, modais, checkboxes, tabelas e tooltips foram exportados com seus microestados (hover, disabled, active) baseados em uma grid system para 1366×768.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Feedback e Avaliação</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Criação de um sistema de <em>rating</em> (1 a 5 estrelas) integrado à lista de resultados, retroalimentando o modelo de IA sobre a qualidade da pesquisa figurativa, com campos condicionais para justificativas.
                </p>
              </div>

            </div>

            {/* O Papel do Claude */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="md:w-2/3 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  O Papel da IA (Claude)
                </div>
                <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Agilidade e Precisão no Handoff Técnico
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  Para estruturar essa documentação complexa em tempo recorde, utilizei o <strong>Claude</strong> como assistente técnico. Ele auxiliou na redação das lógicas de estado e regras de negócio, exigindo de mim apenas a curadoria e ajustes manuais pontuais para alinhar a saída aos nossos componentes reais. Isso reduziu o tempo de criação do Handoff em <strong>80%</strong> comparado ao processo manual detalhe por detalhe.
                </p>
              </div>
              <div className="md:w-1/3 flex w-full justify-center md:justify-end pr-4">
                <div className="text-center">
                  <span className="font-heading text-6xl sm:text-7xl font-extrabold text-blue-600 dark:text-blue-500 drop-shadow-sm">-80%</span>
                  <p className="text-xs font-bold text-blue-600/70 dark:text-blue-400/70 mt-2 uppercase tracking-widest">Tempo de Handoff</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6">
          <ZoomableImage 
            src="/SeekFigurativo/Handoff_seek2.jpg" 
            alt="Mapeamento completo de telas e fluxos do Seek Figurativo" 
            width={1920}
            height={1080}
            className="object-cover"
            wrapperClassName="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative"
            figcaption="Visão geral do mapeamento de telas e fluxos do módulo de pesquisa visual."
          />
        </section>

      </main>

    </div>
  );
}

