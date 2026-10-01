import Link from 'next/link';

export default function Projeto1() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32 font-sans text-gray-900">
      
      {/* Botão de Voltar */}
      <nav className="mb-12">
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          ← Voltar para a Home
        </Link>
      </nav>

      {/* Cabeçalho do Case */}
      <header className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Nome do Produto ou Feature
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Uma frase de impacto resumindo o valor gerado. Ex: Como simplificamos o checkout e aumentamos a conversão em 15% em três meses.
        </p>
        
        {/* Metadados do Projeto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 text-sm">
          <div>
            <strong className="block text-gray-900 mb-1">Papel</strong>
            <span className="text-gray-600">Product Designer</span>
          </div>
          <div>
            <strong className="block text-gray-900 mb-1">Ano</strong>
            <span className="text-gray-600">2023</span>
          </div>
          <div>
            <strong className="block text-gray-900 mb-1">Plataforma</strong>
            <span className="text-gray-600">Web / App</span>
          </div>
          <div>
            <strong className="block text-gray-900 mb-1">Equipe</strong>
            <span className="text-gray-600">1 PM, 3 Devs</span>
          </div>
        </div>
      </header>

      {/* Placeholder para a Imagem de Capa */}
      <div className="w-full h-64 sm:h-96 bg-gray-100 rounded-lg mb-16 flex items-center justify-center border border-gray-200">
        <span className="text-gray-400 font-medium">✨ [Imagem de Capa do Projeto] ✨</span>
      </div>

      {/* Corpo do Texto (Storytelling) */}
      <article className="text-lg text-gray-700 leading-relaxed space-y-8">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">O Contexto</h2>
          <p>
            Escreva aqui sobre o cenário da empresa e do produto antes de você começar a trabalhar neste problema. Qual era a dor latente do usuário ou a necessidade do negócio?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">O Desafio</h2>
          <p>
            Descreva o problema específico que você precisava resolver. Quais eram as restrições técnicas (legais, de tempo, de time)?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processo & Discovery</h2>
          <p className="mb-4">
            Fale sobre como você abordou o problema. Fez pesquisas qualitativas? Analisou dados de uso? Como foi a colaboração com o time de engenharia e produto?
          </p>
          {/* Placeholder para imagem de processo */}
          <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 mb-4">
            <span className="text-gray-400 text-sm">🖼️ [Imagem: Fluxograma, Wireframe ou Post-its]</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">A Solução</h2>
          <p>
            Mostre a solução final. Explique *por que* você tomou determinadas decisões de UI/UX baseadas no que descobriu na etapa anterior.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados e Aprendizados</h2>
          <p className="mb-4">O que aconteceu depois que isso foi pro ar?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aumento de X% na métrica principal.</li>
            <li>Redução de chamados no suporte.</li>
            <li>Aprendizado sobre como lidar com stakeholders difíceis.</li>
          </ul>
        </div>

      </article>

      {/* Footer do Projeto */}
      <footer className="mt-24 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Obrigado por ler.</span>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Ver outros projetos →
          </Link>
        </div>
      </footer>

    </main>
  );
}