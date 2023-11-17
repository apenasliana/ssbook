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
    <header className="z-[999] relative mr-[8.75rem] ">
      <div
        className="fixed  rounded-none border border-white border-opacity-40 bg-[#FFF] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 


         
        
      w-screen
      top-0 
      h-[6.5rem]  
      rounded-br-[2rem]
      
      md:h-[4.5rem]
      md:max-w-[90%]
      md:w-full 
      "
        // pt-[0.25rem]
        // pl-[1.25rem]
      >
        <nav
          className="  text-sm font-normal 
          md:flex md:items-center md:gap-x-6  md:mr-8 md:py-4
         
          flex-col
          items-start
         "
        >
          <Image
            className="md:ml-auto absolute left-0 top-0"
            src="/logo.svg"
            alt="SSBook logo"
            width={79}
            height={48}
          ></Image>
          <div className="hidden md:flex-none">
            <SearchBar />
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
          <div className="absolute top-0 right-0 mr-auto">
            <Profile image={profilePic.image} />
          </div>
        </nav>
        <div className="flex absolute inset-x-0 bottom-0 md:hidden">
          <SectionTabbing />
        </div>
      </div>
    </header>
  )
}
