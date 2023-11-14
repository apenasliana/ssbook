import React from 'react'

export default function SectionTitle(title: string, showAll: boolean) {
  return (
    <div className='flex items-baseline justify-around'>
      <h2>{title}</h2>
      <a><p>ver todos</p></a>
    </div>
  )
}
