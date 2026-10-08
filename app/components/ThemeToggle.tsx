"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // useLayoutEffect executa antes do paint do navegador, evitando o "flash" claro
  useLayoutEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <IconSun size={20} stroke={1.5} /> : <IconMoon size={20} stroke={1.5} />}
    </button>
  );
}
