import Image from 'next/image'
import React from 'react'

interface IconButtonProps {
  text: string
  icon: string
}

const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <a className="flex items-center justify-center h-12 w-fit mx-2 cursor-pointer">
      <Image
        className="h-[1.5rem] w-[1.5rem]"
        src={props.icon}
        alt=""
        width={24}
        height={24}
      ></Image>
      <p className=" inline ml-3 text-sm font-bold w-full ">{props.text}</p>
    </a>
  )
}

export default IconButton
