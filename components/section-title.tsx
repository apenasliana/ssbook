import React from 'react'

interface SectionTitleProps {
  title: string
  showAll: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = props => {
  return (
    <div className="mb-5 font-bold flex items-start justify-between w-full">
      <h2 className="text-xl md:text-3xl ">{props.title}</h2>
      <a className="text-base self-end cursor-pointer text-[#A076F2]">
        ver todos
      </a>
    </div>
  )
}

export default SectionTitle
