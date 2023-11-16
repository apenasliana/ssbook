'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="z-[999] relative ">
      <motion.div
        className="fixed h-[4.5rem]  bg-[#A076F2] b sm:w-full sm:px-[10.75rem] sm:bottom-0 sm:h-[4.5rem]  "
        initial={{ y: -100, x: 1, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between  py-4   ">
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
      </motion.div>
    </footer>
  )
}
