'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function MotionDiv() {
  return (
    <motion.div
      className=" h-screen p-8 border border-white border-opacity-40 bg-[#FFF]  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-auto sm:top-0   sm:rounded-tl-[2rem] "
      initial={{ y: -100, x: 1, opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
    />
  )
}
