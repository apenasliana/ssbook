import React from 'react'

interface SectionTitleProps {
  title: string
  showAll: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = props => {
  return (
    <div className="font-bold flex items-start justify-between w-full">
      <h2 className="text-3xl ">{props.title}</h2>
      <a className="text-base self-end cursor-pointer text-[#A076F2]">
        ver todos
      </a>
    </div>
  )
}

export default SectionTitle
