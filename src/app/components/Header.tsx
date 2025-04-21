'use client'
import React from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';

// Componente Header (principal)
export default function Header() {
  const isScrolled = useScroll(); // Usa o hook

  return (
    <header className={`${isScrolled ? 'bg-black' : 'bg-transparent'}
      fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 transition-all duration-300 ease-in-out lg:px-16 lg:py-4`
      // Ajustes: bg-transparent como padrão, top-0, z-index comum (50), adicionei duration/ease para suavidade
    }>

      <div className="flex items-center space-x-2 md:space-x-8 ">
        <Logo />      
        <NavLinks />  {/* Renderiza o componente NavLinks */}
      </div>

      <UserProfile /> {/* Renderiza o componente UserProfile (com 'U' maiúsculo) */}
    </header>
  )
}