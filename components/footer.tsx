import React from 'react'
import Image from 'next/image'
import NavButton from './nav-button'

export default function Footer() {
  return (
    <footer className="z-[999] fixed h-14 w-full bottom-0  bg-[#FFF] md:bg-[#A076F2]   md:px-[10.75rem]md:h-[4.5rem]   ">
      <div>
        <div className="hidden md:flex md:items-center md:justify-between  md:py-4   ">
          <Image
            src="/whiteLogo.svg"
            alt="SSBook logo"
            width={79}
            height={48}
          ></Image>

          <p className="text-white  text-xs">
            Todos os direitos reservados. Studio Sol Books © 2023{' '}
          </p>
        </div>
        <div className="flex items-center justify-between px-6 py-[0.625rem] gap-[1.625rem] md:hidden">
          <NavButton
            icon="/home.svg"
            text="Início"
          />
          <NavButton
            icon="/plus-circle.svg"
            text="Adicionar"
          />
          <NavButton
            icon="/magnifying-glass.svg"
            text="Buscar"
          />
          <NavButton
            icon="/heart-solid.svg"
            text="Favoritos"
          />
        </div>
      </div>
    </footer>
  )
}
