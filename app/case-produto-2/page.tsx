import Link from 'next/link';
import Image from 'next/image';

export default function CaseNutriGuide() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Cabeçalho do Case */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            App Mobile • Projeto de MBA
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            NutriGuide: Conectando pacientes e nutricionistas em um só lugar
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Uma visão sobre como desenhar um aplicativo que resolve as dores do paciente, mas funciona como uma ferramenta estratégica de retenção e acompanhamento para o profissional de nutrição.
          </p>
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
        <section className="max-w-5xl mx-auto px-6 mb-24">
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
        </section>

        {/* Primeira Parte do Artigo */}
        <div className="max-w-3xl mx-auto px-6 space-y-20 mb-24">
          
          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Como surgiu o projeto
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                O projeto surgiu durante o MBA com a necessidade de explorar aplicações de saúde. Enquanto o mercado saturava com apps de saúde mental ou genéricos de dieta, identificamos uma lacuna de relacionamento: a falta de ferramentas dedicadas que suprem as necessidades clínicas dos nutricionistas enquanto engajam seus clientes.
              </p>
              <p>
                A ideia base foi transformar o aplicativo num elo de ligação. Para o paciente, é um assistente pessoal de saúde física; para o profissional, o NutriGuide funciona como um sistema de retenção e acompanhamento de aderência ao plano alimentar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              O Comportamento do Paciente
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Com o aumento das teleconsultas, conduzimos uma pesquisa Survey focada em entender as dores da ponta final: os pacientes. Como o prazo acadêmico era mais curto que o corporativo, o foco quantitativo revelou nosso público central: mulheres (60%), de 26 a 35 anos, residentes em São Paulo.
              </p>
              <p>
                Olhando pelo prisma do nutricionista, essa persona é valiosa, pois representa um público ativo economicamente que, apesar da busca por bem-estar, enfrenta grandes dificuldades na execução prática de boas rotinas alimentares.
              </p>
            </div>
            
            <figure className="my-10">
              <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-video relative">
                <Image src="/nutriguide/pesquisa.webp" alt="Pessoa utilizando tablet para responder pesquisa survey" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm font-medium text-zinc-500 mt-4">
                Pesquisa Survey: superando o desafio do tempo de entrevistas ao vivo para mapeamento rápido de perfil.
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Protótipo Navegável
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
              <p>
                Explore a experiência desenhada para o paciente. O fluxo foca em reduzir o atrito na hora de registrar a alimentação diária, garantindo que o nutricionista receba dados constantes e reais.
              </p>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl aspect-video relative bg-zinc-100 dark:bg-zinc-900">
              <iframe 
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
                className="absolute inset-0 w-full h-full"
                src="https://embed.figma.com/proto/b7SCEWoBkMKwTBfSnhA6fR/Wireframes---Prot%C3%B3tipos---Nutriguide?node-id=125-478&p=f&scaling=scale-down&content-scaling=fixed&page-id=88%3A509&starting-point-node-id=125%3A491&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>

        {/* Segunda Parte: Grelha de 2 Tópicos com Fundo Diferente */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
              
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Teletrabalho e Engajamento
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    A pesquisa mostrou que a maioria dos usuários atua no modelo Híbrido (39,2%) ou Home Office (33,3%). Para o nutricionista, isso significa que as refeições do cliente ocorrem em contextos altamente variáveis. O app responde a isso permitindo que o paciente registre sua alimentação de qualquer lugar, gerando dados assíncronos cruciais para a próxima consulta.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  A Oportunidade dos Hábitos
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Com impressionantes 47,1% dos respondentes afirmando não ter bons hábitos alimentares, a interface do NutriGuide foca em atritos mínimos. Registrar o diário alimentar ou visualizar a dieta precisa ser mais rápido do que a vontade do paciente de abandonar a rotina. Essa é a chave de venda (pitch) do sistema para os profissionais.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  O Produto como Sistema
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    O protótipo de alta fidelidade desenhou a experiência B2B2C na prática. Enquanto as telas entregues são voltadas para o paciente, a estratégia por trás de cada botão (notificações, acompanhamento de metas) é garantir que o nutricionista possua ferramentas para reduzir a sua taxa de *churn* (desistência de pacientes).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Aprendizados do MBA
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Trabalhar com as limitações de prazo de um MBA simula perfeitamente o ambiente de startups. O maior aprendizado foi descobrir que dados simples de uma Survey, quando olhados pela ótica de negócios, são suficientes para justificar e pivotar a direção de um produto inteiro de saúde digital.
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
