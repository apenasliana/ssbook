import React from 'react'
import Divider from './divider'

interface SectionTabbingProps {}
const tabs = [
  {
    title: 'Meus livros'
  },
  {
    title: 'Emprestados'
  }
]

const SectionTabbing: React.FC<SectionTabbingProps> = props => {
  return (
    <div className="font-bold flex-col items-center">
      <div className=" flex items-center gap-6 h-12">
        {tabs.map(function (data) {
          return <h2 className="text-sm">{data.title}</h2>
        })}
      </div>
      <div className="w-auto border border-gray-400 sm:w-full" />
    </div>
  )
}
export default SectionTabbing
