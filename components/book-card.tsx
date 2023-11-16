import Image from 'next/image'
import React from 'react'

interface BookCardProps {
  name: string
  author: string
  cover: string
}

//flex-shrink
const BookCard: React.FC<BookCardProps> = props => {
  return (
    <div className="h-[6.25rem] w-[18.5rem] flex flex-none  ">
      <Image
        className="rounded-lg h-[6.25rem]"
        src={props.cover}
        alt="autor"
        width={68}
        height={100}
      ></Image>
      <div className=" flex-col items-center ml-4 ">
        <h2 className="text-base font-bold leading-[1.125rem]  line-clamp-3  mt-3">
          {props.name}
        </h2>
        <span className="text-sm font-normal  leading-normal text-[#757575] ">
          {props.author}
        </span>
      </div>
    </div>
  )
}

export default BookCard
