import Image from 'next/image'
import React from 'react'

interface BookProps {
  title: string;
  autor: string;
  src: string;
}

const Book: React.FC<BookProps> = (props) =>  {
  return (
    <div className='flex-none '>
      <Image src={props.src} alt="Book" width={136} height={198}>
      </Image>
      <div className='flex-col items-center mt-2  space-y-2'>
        <h2 className='text-base font-bold' >{props.title}</h2>
        <span className='text-sm text-[#757575]'>{props.autor}</span>
      </div>
    </div>
  )
}


export default Book