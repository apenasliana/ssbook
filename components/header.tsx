import React from 'react'
import Image from 'next/image'
import SearchBar from './search-bar'
import Profile from './profile'
import Divider from './divider'
import IconButton from './icon-button'
import { getUserPicture } from '@/services/queries'

export default async function Header() {
  const profilePic = await getUserPicture()

  return (
    <header className="z-[999] relative mr-[8.75rem] ">
      <div className="fixed h-[4.5rem] w-full max-w-[90%] rounded-none border border-white border-opacity-40 bg-[#FFF] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-full sm:top-0 sm:h-[4.5rem]  sm:rounded-br-[2rem] ">
        <nav className="flex   items-center gap-x-6   mr-8 py-4 text-sm font-normal ">
          <Image
            className="ml-auto"
            src="/logo.svg"
            alt="SSBook logo"
            width={79}
            height={48}
          ></Image>
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
          <Profile image={profilePic.image} />
        </nav>
      </div>
    </header>
  )
}
