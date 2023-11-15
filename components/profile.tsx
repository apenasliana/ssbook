import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className='flex items-center gap-3' >
      <Image className='rounded-full border' src="/profilePicture.png" alt="" width={22} height={22} />
      <p className='font-bold'>Poggerina</p>
    </div>
  )
}
