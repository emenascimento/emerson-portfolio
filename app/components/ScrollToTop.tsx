"use client";

import { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica a posição do scroll para mostrar ou esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Se não estiver visível, não renderiza nada
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 cursor-pointer flex items-center justify-center w-12 h-12 bg-blue-600 text-zinc-50 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      aria-label="Voltar ao topo"
    >
      <IconArrowUp size={24} stroke={2} />
    </button>
  );
}