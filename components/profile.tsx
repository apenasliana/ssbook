import Image from 'next/image'
import React from 'react'

interface ProfileProps {
  image: string
}
const Profile: React.FC<ProfileProps> = props => {
  return (
    <div className="flex px-3 pr-5 md:items-center md:gap-3 md:px-0  cursor-pointer">
      <Image
        className="rounded-full  object-cover w-[1.375rem] h-[1.375rem] "
        src={props.image}
        alt=""
        width={22}
        height={22}
      />

      <p className="hidden font-bold md:block">Poggerina</p>
    </div>
  )
}

export default Profile
