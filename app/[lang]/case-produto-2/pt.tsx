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
            App Mobile • Projeto de MBA
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            NutriGuide: Conectando pacientes e nutricionistas em um só lugar
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Uma visão sobre como desenhar um aplicativo que resolve as dores do paciente, mas funciona como uma ferramenta estratégica de retenção e acompanhamento para o profissional de nutrição.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Papel</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Produto</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">NutriGuide (App)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">IA Utilizada</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Não aplicada neste fluxo</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Protótipo acadêmico aprovado</p>
            </div>
          </div>
        </header>

        {/* Imagem Hero do Case */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden">
            <Image 
              src="/nutriguide/hero.jpg" 
              alt="Telas do aplicativo NutriGuide em dois iPhones, mostrando a tela de login e a home do paciente" 
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
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Problema</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nutricionistas frequentemente perdem a conexão contínua com seus pacientes fora do consultório. Ferramentas genéricas ou PDFs estáticos dificultam o engajamento na dieta, resultando em abandono do tratamento.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hipótese</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Se construirmos uma aplicação que centraliza a rotina (diário, dicas, parceiros) na mão do paciente, o nutricionista ganha um sistema poderoso (CRM) para acompanhamento de dados reais, aumentando a taxa de sucesso.
              </p>
            </div>
          </div>
        </section>

        {/* Primeira Parte do Artigo */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. Como surgiu o projeto
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  O projeto surgiu durante o MBA com a necessidade de explorar aplicações de saúde. Enquanto o mercado saturava com apps de saúde mental ou genéricos de dieta, identificamos uma lacuna de relacionamento: a falta de ferramentas dedicadas que suprem as necessidades clínicas dos nutricionistas enquanto engajam seus clientes.
                </p>
                <p>
                  A ideia base foi transformar o aplicativo num elo de ligação. Para o paciente, é um assistente pessoal de saúde física; para o profissional, o NutriGuide funciona como um sistema de retenção e acompanhamento de aderência ao plano alimentar.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. O Comportamento do Paciente
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Com o aumento das teleconsultas, conduzimos uma pesquisa Survey focada em entender as dores da ponta final: os pacientes. Como o prazo acadêmico era mais curto que o corporativo, o foco quantitativo revelou nosso público central: mulheres (60%), de 26 a 35 anos, residentes em São Paulo.
                </p>
                <p>
                  Olhando pelo prisma do nutricionista, essa persona é valiosa, pois representa um público ativo economicamente que, apesar da busca por bem-estar, enfrenta grandes dificuldades na execução prática de boas rotinas alimentares.
                </p>
              </div>

              {/* Bloco de Evidências e Resultado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidências</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Pesquisa com usuários revelou que 47,1% não consideram ter bons hábitos alimentares, e a maioria opera em regime híbrido ou home office, exigindo uma solução adaptável à nova rotina pós-pandemia.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Desenvolvimento de um protótipo de alta fidelidade para o MBA em UX Design, validando um modelo B2B2C onde o app é a ponte entre o serviço do nutricionista e o dia a dia do paciente.
                  </p>
                </div>
              </div>
              
              <ZoomableImage 
                src="/nutriguide/resultados.webp" 
                alt="Pessoa utilizando tablet para responder pesquisa survey" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-video relative"
                figcaption="Pesquisa Survey: superando o desafio do tempo de entrevistas ao vivo para mapeamento rápido de perfil."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. Protótipo Navegável
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Explore a experiência desenhada para o paciente. O fluxo foca em reduzir o atrito na hora de registrar a alimentação diária, garantindo que o nutricionista receba dados constantes e reais.
                </p>
              </div>
              
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl aspect-video relative bg-zinc-100 dark:bg-zinc-900 mt-4">
                <iframe 
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
                  className="absolute inset-0 w-full h-full"
                  src="https://embed.figma.com/proto/b7SCEWoBkMKwTBfSnhA6fR/Wireframes---Prot%C3%B3tipos---Nutriguide?node-id=125-478&p=f&scaling=scale-down&content-scaling=fixed&page-id=88%3A509&starting-point-node-id=125%3A491&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        {/* Highlight Section */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 py-24 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-16 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                Estratégia e Oportunidades
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Além do layout, o NutriGuide foi concebido sobre pilares estratégicos de negócios B2B2C focados em retenção clínica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Teletrabalho e Engajamento</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  A pesquisa mostrou que a maioria dos usuários atua no modelo Híbrido (39,2%) ou Home Office (33,3%). Para o nutricionista, isso significa que as refeições do cliente ocorrem em contextos altamente variáveis. O app responde a isso permitindo que o paciente registre sua alimentação de qualquer lugar, gerando dados assíncronos cruciais para a próxima consulta.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">A Oportunidade dos Hábitos</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Com 47,1% dos respondentes afirmando não ter bons hábitos alimentares, a interface do NutriGuide foca em atritos mínimos. Registrar o diário alimentar precisa ser mais rápido do que a vontade do paciente de abandonar a rotina. Essa é a chave de venda (pitch) do sistema para os profissionais.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">O Produto como Sistema</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  O protótipo de alta fidelidade desenhou a experiência B2B2C na prática. Enquanto as telas entregues são voltadas para o paciente, a estratégia por trás de cada botão é garantir que o nutricionista possua ferramentas para reduzir a sua taxa de churn (desistência de pacientes).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Aprendizados do MBA</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Trabalhar com as limitações de prazo de um MBA simula perfeitamente o ambiente de startups. O maior aprendizado foi descobrir que dados simples de uma Survey, quando olhados pela ótica de negócios, são suficientes para justificar e pivotar a direção de um produto inteiro de saúde digital.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}


