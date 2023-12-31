import React from 'react'

interface SectionTabbingProps {}
const tabs = [
  {
    title: 'Meus livros'
  },
  {
    title: 'Emprestados'
  }
]
//todo selecionar primeira tab e hover
const SectionTabbing: React.FC<SectionTabbingProps> = props => {
  return (
    <div className="font-bold flex-col items-center ">
      <div className=" flex items-center gap-6 h-12 ">
        {tabs.map(function (data) {
          return (
            <div>
              <h2 className="text-sm pt-3 pb-3 px-4">{data.title}</h2>
              <div className="h-1 bg-transparent self-end rounded-t-lg cursor-pointer  first:bg-[#A076F2]  hover:bg-[#A076F2]  hover:bg-opacity-60 " />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SectionTabbing
