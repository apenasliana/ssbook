import Image from 'next/image';
import React from 'react'

interface BookCardProps {
  title: string;
  autor: string;
  src: string;
}
const BookCard: React.FC<BookCardProps> = (props) =>  {

  return (
    <div className='h-[6.25rem] w-[18rem] flex flex-none  '>
      <Image src={props.src} alt="autor" width={68} height={100}>
      </Image>

      <div className='flex-col items-center ml-4 my-[1.25rem]  '>
        <h2 className='text-base font-bold' >{props.title}</h2>
        <span className='text-sm text-[#555555] '>{props.autor}</span>
      </div>
    </div>
  )
}

export default BookCard