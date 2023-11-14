"use client"

import React from 'react'
import {motion} from 'framer-motion'

export default function Library() {
  return (
    <div>
      <motion.div className=' w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-5/6 sm:top-0 sm:rounded-tl-[4rem] '
        initial={{ y: -100, x: 1, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
      ></motion.div>




    </div>
  )
}
