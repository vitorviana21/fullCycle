import { useState, useEffect } from 'react';

// Hook useScroll (agora contendo apenas a lógica de scroll)
export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se window existe (importante para SSR/Next.js)
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };

    // Adiciona o listener
    window.addEventListener('scroll', handleScroll);

    // Chama handleScroll uma vez no início para definir o estado inicial
    handleScroll();

    // Função de limpeza para remover o listener quando o componente desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array de dependências vazio, executa apenas na montagem/desmontagem

  return isScrolled;
};
