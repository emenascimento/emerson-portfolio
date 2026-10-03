"use client";

import { useState } from "react";
import { IconX, IconDownload } from "@tabler/icons-react";

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão no Rodapé que abre a Modal */}
      <button 
        onClick={() => setIsOpen(true)}
        className="text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] dark:hover:text-[#155dfc] cursor-pointer transition-colors"
      >
        Currículo
      </button>

      {/* Estrutura da Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800">
            
            {/* Cabeçalho da Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-50">
                Currículo — Emerson Nascimento
              </h3>
              
              <div className="flex items-center gap-3">
                {/* Botão de Download */}
                <a
                  href="/curriculo.pdf"
                  download="Curriculo-Emerson-Nascimento.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                >
                  <IconDownload size={16} />
                  Baixar PDF
                </a>
                
                {/* Botão Fechar (X) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors"
                  aria-label="Fechar modal"
                >
                  <IconX size={18} />
                </button>
              </div>
            </div>

            {/* Corpo com o Visualizador de PDF */}
            <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-950 p-2 sm:p-4 overflow-hidden">
              <iframe
                src="/curriculo.pdf"
                className="w-full h-full rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white"
                title="Currículo Emerson Nascimento"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}