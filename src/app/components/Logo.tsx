
import Image from 'next/image';
import React from 'react';

// 1. Mova a definição dos componentes para fora do hook
// Componente Logo
export const Logo = () => (
  <Image
    src='/logo.svg' // Certifique-se que logo.svg está na pasta /public
    alt='netflix'
    width={90} // width e height são obrigatórios para next/image
    height={90}
    className='cursor-pointer' // className funciona em versões mais recentes do next/image
  />
);
