import Image from 'next/image'
import React from 'react'

// Book component

interface BookProps {
  name: string;
  author: string; // Assuming author is an array of objects
  cover: string;
}

const Book: React.FC<BookProps> = (props) =>  {
  return (
    <div className='flex-none max-h-[16.375rem] max-w-[8.5rem] '>
      <Image className='rounded-lg h-[12.375rem] ' src={props.cover} alt="Book" width={136}
      height={198}>
      </Image>
      <div className='flex-col items-center mt-[0.625rem]  space-y-2 w-[8.5rem]'>
        <h2 className='font-bold text-base  text-justify  leading-[1.125rem]	text-[#555] xl:h-[2.25rem] xl:line-clamp-2 ' >{props.name}</h2>    
        <span className='text-sm text-[#757575] '>{props.author}</span>
      </div>
    </div>
  )
}

export default Book