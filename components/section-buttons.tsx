import React, { useState } from 'react'
import Divider from './divider';


interface SectionButtonsProps {

}
const buttons=[{
  title:"Todos",},
  {
  title:"Romance"},
  {
    title:"Aventura"},
    {
      title:"Comédia"},
      {
        title:"Drama"},
        
  ]
 


  const SectionButtons: React.FC<SectionButtonsProps> = (props) =>  {

 
  
  
    return (
    <div className='my-6'>
      
      <div className='flex gap-4 '>
          {buttons.map(function(data) {
          return (
            <div className='h-8 py-[0.375rem] px-4 border rounded-full border-[#E0E0E0] items-center
            first:bg-[#A076F2] first:text-[#FFFFFF]
           cursor-pointer select-none
           hover:bg-[#A076F2] hover:text-[#FFFFFF] hover:bg-opacity-60 
            
            
            '>
              <h2 className='text-sm'>{data.title}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SectionButtons