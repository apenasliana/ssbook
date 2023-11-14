"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './search-bar'
import Profile from './profile'
import Divider from './divider'


export default function Header() {
  return (
    <header className='z-[999] relative '>
      <motion.div className='fixed h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-3/4 sm:top-0 sm:h-[4.5rem]  sm:rounded-br-[] '
        initial={{ y: -100, x: 1, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
      >
        <nav className='flex   items-center justify-evenly'>
          <Image src="/logo.svg" alt="SSBook logo" width={79} height={48}></Image>
          <SearchBar/>
          <a>Button A</a>
          <a>Button B</a>
          <Divider/>
          <Profile/>
        </nav>
        </motion.div>
    </header>
  )
}