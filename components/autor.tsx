import Image from 'next/image';
import React from 'react'

interface AutorProps {
  name: string;
  numBooks: number;
  src: string;
}
const Autor: React.FC<AutorProps> = (props) =>  {

  return (
    <div className='h-[4.4rem] w-[18rem] flex flex-none border-2 rounded-lg'>
      <Image src={props.src} alt="autor" width={68} height={68}>
      </Image>

      <div className='flex-col items-center mx-4 mt-2  space-y-2'>
        <h2 className='text-base' >{props.name}</h2>
        <span className='text-sm text-gray-700'>{props.numBooks} livros</span>
      </div>
    </div>
  )
}

export default Autor