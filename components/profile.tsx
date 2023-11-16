import Image from 'next/image'
import React from 'react'

interface ProfileProps {
  image: string
}
const Profile: React.FC<ProfileProps> = props => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image
        className="rounded-full border"
        src={props.image}
        alt=""
        width={22}
        height={22}
      />
      <p className="font-bold">Poggerina</p>
    </div>
  )
}

export default Profile
