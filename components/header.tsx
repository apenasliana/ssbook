import React from 'react'
import Image from 'next/image'
import SearchBar from './search-bar'
import Profile from './profile'
import Divider from './divider'
import IconButton from './icon-button'
import { getUserPicture } from '@/services/queries'
import SectionTabbing from './section-tabbing'

export default async function Header() {
  const profilePic = await getUserPicture()

  return (
    <header
      className="z-[999] w-full  mr-[8.75rem] fixed   rounded-none border border-white border-opacity-40 bg-[#FFF] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
    top-0 
    
    h-[6.5rem]  
    rounded-br-[2rem]
    md:h-[4.5rem]
    md:max-w-[90%]
    md:w-full "
    >
      <nav
        className="   md:fixed  text-sm font-normal 
          md:flex
          md:flex-row
          md:items-center
          md:gap-6
          md:w-full
          md:flex-nowrap
          md:pl-[10.75rem]
         "
      >
        <Image
          className="md:static  ml-5 mt-[0.375rem] absolute left-0 top-0"
          src="/logo.svg"
          alt="SSBook logo"
          width={76.897}
          height={23.76}
        ></Image>
        <SearchBar />

        <div className="hidden md:flex  items-center  gap-x-6 md:ml-auto ">
          <IconButton
            text="Adicionar"
            icon="/plus.svg"
          />
          <IconButton
            text="Favoritos"
            icon="/heart-solid.svg"
          />
          <Divider />
        </div>

        <div className="absolute mr-8 mt-[0.375rem]  top-0 right-0 md:max-w-[6.875rem] md:static ">
          <Profile image={profilePic.image} />
        </div>
      </nav>

      <div className="block absolute inset-x-0 bottom-0 md:hidden">
        <SectionTabbing />
      </div>
    </header>
  )
}
