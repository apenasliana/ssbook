import Image from 'next/image'
import React from 'react'

interface IconButtonProps {
  text: string
}
const icon = [
  {
    icon: 'iconName'
  },
  {
    text: 'Emprestados'
  }
]

const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <a className="flex items-center justify-center h-12 ">
      <Image
        src="/iconAdicionar.svg"
        alt=""
        width={24}
        height={24}
      ></Image>
      <p className=" inline ml-3 text-sm font-bold w-full ">{props.text}</p>
    </a>
  )
}

export default IconButton
