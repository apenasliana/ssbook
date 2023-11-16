import Image from 'next/image'
import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-md justify-between h-[2.5rem] pl-4 pr-2 py-[0.375rem] 	 border rounded-xl">
      <input
        className="text-black bg-transparent w-full focus:outline-none"
        placeholder="Busque um livro"
      ></input>

      <Image
        className="mx-2 cursor-pointer"
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={24}
        height={24}
      />
    </div>
  )
}
