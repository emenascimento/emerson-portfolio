import Link from 'next/link';
import Image from 'next/image';
import { ZoomableImage } from '../components/ZoomableImage';
import { IconSettings, IconCalendarEvent, IconSearch, IconMap } from '@tabler/icons-react';

export default function CaseMoneyFy() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Redesign de Website • SaaS Financeiro
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            MoneyFy: reposicionando um sistema financeiro para escritórios de P.I.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            O produto MoneyFy passou por um redesign no sistema, onde uma nova versão foi lançada no mercado. Partindo deste ponto, surgiu o desafio de reposicionar o produto por meio de um novo website alinhado ao seu valor atual.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Papel</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Produto</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">MoneyFy (Website)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">IA Utilizada</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Não aplicada neste fluxo</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Protótipo revisado e aprovado</p>
            </div>
          </div>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/moneyfy/hero-2.jpg" 
              alt="Website do MoneyFy em dispositivos Desktop, Tablet e Mobile" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
        </div>

        {/* Artigo Principal */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. O Desafio e Frentes de Atuação
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Foi necessário entender o produto como um todo, as dores referentes ao site atual e realizar alinhamentos constantes para a execução completa do projeto. Para organizar a atuação de design, focamos em 4 frentes principais:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconSettings size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Alinhamento Técnico</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Alinhamento técnico com a equipe para priorizar soluções viáveis, focando na resolução de restrições de desenvolvimento.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconCalendarEvent size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Planejamento e Prazos</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Planejamento estratégico e negociação de prazos para garantir a viabilidade das entregas dentro do cronograma esperado.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconSearch size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Auditoria de Conteúdo</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Auditoria da arquitetura de informação e de conteúdo para identificar atritos e guiar a reformulação dos textos.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-blue-400 mb-4">
                    <IconMap size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Repriorização do Roadmap</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Repriorização do roadmap de Produto para integrar a nova demanda sem comprometer as entregas paralelas já estabelecidas.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. Roadmap (Deadline)
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Plano de ação estratégico do projeto para garantir entregas pontuais:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Discovery <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">3 Semanas</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Matriz CSD, User Flow, Análise Heurística, Benchmark, Alinhamentos com Stakeholders, Entrevistas internas, Consolidação das entrevistas e Levantamento de dores.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Criação & Protótipo <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">4 Semanas</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Desenvolvimento do protótipo em alta fidelidade e funcional.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Validação <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">1 Semana</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Alinhamento e revisão com stakeholders, e alinhamento com o time técnico.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Handoff <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-1">1 Semana</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Estrutura do arquivo para encaminhar ao desenvolvimento.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. Processo de Discovery
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Algumas evidências de processos feitos conforme o planejamento de discovery, essenciais para garantir que a interface resolveria os problemas corretos do usuário.
                </p>
              </div>
              
              <ZoomableImage 
                src="/moneyfy/discovery3.jpg" 
                alt="Evidências do Processo de Discovery" 
                width={1400} 
                height={900} 
                className="w-full h-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900/50" 
                wrapperClassName="w-full mt-4"
                figcaption="Visão do User Flow, Análise Heurística, Benchmark, Entrevistas Internas, Plano de Comunicação, Planejamento e Go to Market (GTM)."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                04. Protótipo e Layouts Finais
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Interfaces finais do redesign do website. A partir do entendimento do produto como um todo e das dores referentes ao site antigo, desenvolvemos as soluções e suas variações.
                </p>
              </div>

              <ZoomableImage 
                src="/moneyfy/layouts2.png" 
                alt="Variações, Versão Final e Handoff" 
                width={1400} 
                height={1400} 
                className="w-full h-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900/50 p-2 sm:p-4" 
                wrapperClassName="w-full mt-4"
                figcaption="Variações para validação, Versão Final e aprovada, e estrutura de Handoff."
              />
            </div>
          </section>
        </div>

        {/* Fundo Diferente para Validação e Conclusão */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            {/* Validação Técnica */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/3 shrink-0">
                <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                  05. Viabilidade Técnica
                </h2>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Após o desenvolvimento das soluções em alta fidelidade para os gaps da Landing Page, o passo crítico foi o alinhamento de engenharia. Focamos em validar a viabilidade de componentes complexos levantados na heurística, como o hub centralizado de funcionalidades, mapas visuais de integrações e a implementação de tours interativos.
                </p>
                <p>
                  Mantivemos alinhamentos constantes com os desenvolvedores durante a ideação. O objetivo era antecipar restrições na execução de elementos densos (como GIFs ou vídeos do sistema) e garantir que o handoff não fosse apenas um arquivo Figma, mas uma documentação de componentes à prova de gargalos.
                </p>
                <p>
                  Com a viabilidade técnica assegurada na base, a apresentação aos stakeholders foi inteiramente pautada em lógica de produto: demonstramos como os estudos guiaram cada decisão estrutural, entregando uma solução que é tanto executável no código quanto estratégica para os negócios.
                </p>
              </div>
            </div>

            <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

            {/* Conclusão / Impacto */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/3 shrink-0">
                <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                  Impacto e Visão Estratégica
                </h2>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  O redesign do MoneyFy evidenciou que o sucesso de um SaaS não acontece apenas dentro do dashboard. A retenção começa na aquisição, na forma como o valor é comunicado ao mercado. Ao alinhar usabilidade focada em conversão com um Discovery altamente estruturado, transformamos um site defasado no principal canal de vendas da empresa.
                </p>
                <p>
                  A chave da fluidez deste projeto foi quebrar o silo entre design e engenharia. Projetar já considerando a arquitetura do front-end garante que a interface final sirva não apenas para encantar, mas para guiar de forma escalável as dores do usuário em argumentos claros de retenção.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
