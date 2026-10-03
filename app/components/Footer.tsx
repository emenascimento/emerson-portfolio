import Link from 'next/link';
import { ResumeModal } from './ResumeModal';

export function Footer() {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 items-center text-center">
        
        <div className="flex flex-wrap items-center gap-8 text-sm font-semibold">
          <Link 
            href="https://linkedin.com/in/emenascimento" 
            target="_blank" 
            className="text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors"
          >
            LinkedIn
          </Link>
          
          <ResumeModal />
          
          <Link 
            href="mailto:contato.emenascimento@gmail.com" 
            className="text-zinc-700 dark:text-zinc-300 hover:text-[#155dfc] dark:hover:text-[#155dfc] transition-colors"
          >
            contato.emenascimento@gmail.com
          </Link>
        </div>

        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-600 text-center">
          Copyright 2026 © Emerson Nascimento. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
}