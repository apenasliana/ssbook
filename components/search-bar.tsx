import Image from 'next/image'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex w-full max-w-md justify-between h-[2.5rem] pl-4 pr-2 py-[0.375rem] 	 border rounded-xl '>
      <form className='text-black' placeholder='Busque um livro'></form>
      <Image src="/logo.svg" alt="pog" width={24} height={24} />
    </div>
  )
}