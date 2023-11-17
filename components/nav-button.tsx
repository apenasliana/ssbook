import Image from 'next/image'
import React from 'react'

interface NavButtonProps {
  text: string
  icon: string
}

const NavButton: React.FC<NavButtonProps> = props => {
  return (
    <div className="flex-col place-items-center cursor-pointer h-[2.375rem] w-[3.5rem]">
      <Image
        className="h-[1.5rem] w-[1.5rem] mx-auto "
        src={props.icon}
        alt="nav button"
        width={24}
        height={24}
      ></Image>
      <p className="  text-[0.625rem] text-center  font-medium w-full ">
        {props.text}
      </p>
    </div>
  )
}

export default NavButton
