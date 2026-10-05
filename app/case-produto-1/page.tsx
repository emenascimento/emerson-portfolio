import Link from 'next/link';
import Image from 'next/image';

export default function CaseMoneyFy() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Redesign de Website • SaaS Financeiro
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            MoneyFy: reposicionando um sistema financeiro para escritórios de P.I.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            O produto MoneyFy passou por um redesign no sistema, onde uma nova versão foi lançada. Partindo deste ponto, surgiu o desafio de reposicionar o produto por meio de um novo website alinhado ao seu valor atual.
          </p>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-950 rounded-3xl overflow-hidden">
            <Image 
              src="/moneyfy/hero-2.jpg" 
              alt="Website do MoneyFy em dispositivos Desktop, Tablet e Mobile" 
              fill 
              className="object-contain" 
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
                O MoneyFy lançou uma nova versão do sistema, mas o website ainda refletia o produto antigo. Era necessário entender o produto como um todo e as dores referentes ao site atual para criar uma nova proposta de valor clara.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hipótese</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Se o site centralizasse as funcionalidades em um hub claro e mostrasse visualmente as integrações, a proposta de valor seria compreendida mais rápido pelo cliente, reduzindo o esforço cognitivo na navegação.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidências (Discovery)</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A estruturação foi embasada por Matriz CSD, User Flow, Análise Heurística, Benchmark e Entrevistas Internas, além de constantes alinhamentos com stakeholders para consolidar as dores mapeadas.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Um novo website responsivo aprovado estrategicamente e validado tecnicamente, com um handoff estruturado por seções para desenvolvimento, entregue perfeitamente no roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte do Artigo (Sem prose, idêntico ao Sobre mim da Home) */}
        <div className="max-w-3xl mx-auto px-6 space-y-20 mb-24">
          
          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              O Desafio e o Roadmap
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                O primeiro grande passo foi mapear as inviabilidades técnicas em reuniões com o time e estabelecer uma estratégia para entregar um novo posicionamento. Foi fundamental adaptar o roadmap de Product Design para encaixar as demandas em 9 semanas, do Discovery ao Handoff.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Discovery e Evidências
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Durante o processo de discovery, estruturei um Plano de Comunicação e estratégias de Go-to-Market, aliando o lançamento do site ao novo sistema. Realizamos análises heurísticas e mapeamos todo o fluxo do usuário antigo, validando hipóteses com base em dados.
              </p>
            </div>
            
            {/* Imagem Intermediária */}
            <figure className="my-10">
              <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                <Image src="/moneyfy/discovery.png" alt="Painéis de Discovery: User flow, Análise Heurística, Benchmark e Entrevistas" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm font-medium text-zinc-500 mt-4">
                Visão das documentações do Discovery: User Flow, Análise Heurística, Benchmark e GTM.
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
                  Layouts e Variações
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Em vez de apresentar uma única solução aos stakeholders, levei diferentes variações para validação. Isso mudou a perspectiva de aprovação e garantiu que a versão final tivesse forte ênfase na clareza para escritórios de P.I., totalmente otimizada para mobile e tablet.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Validação técnica
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Após desenhar as soluções em alta fidelidade, o foco mudou para a validação técnica. Asseguramos com os desenvolvedores a viabilidade de componentes complexos sugeridos na heurística, como hubs de funcionalidades e integrações, antes mesmo da apresentação executiva final.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Handoff Estruturado
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Com as aprovações técnicas e executivas em mãos, montei a documentação de handoff dividida logicamente por seções de desenvolvimento: cabeçalhos, acordeões, cartões, modais de imagem e tabelas de preços.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Aprendizados
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    O maior aprendizado foi validar com a engenharia muito antes da apresentação para stakeholders. Demonstrar como estudos heurísticos guiam decisões garante soluções perfeitamente executáveis e elimina surpresas. Este projeto reafirmou que o website é o primeiro pilar fundamental do produto final.
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
