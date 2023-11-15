"use client"

import React from 'react'
import SectionTitle from './section-title'
import Book from './book'
import SectionTabbing from './section-tabbing'


export default function FavoriteBooks() {
  const books=[{
    title:"poggers",
    autor:"among us",
    src:"/bookNormal.png"},
    {
      title:"asgfda",
      autor:"among  asfdus",
      src:"/bookNormal.png"},
    {
      title:"poggers 2",
      autor:"amonaaag us",
      src:"/bookNormal.png"},
    {
      title:"pogger 3s",
      autor:"among u111s",
      src:"/bookNormal.png"},
    {
      title:"book4",
      autor:"among124 us",
      src:"/bookBIG.png"},
      {
        title:"book4",
        autor:"among124 us",
        src:"/bookBIG.png"},
        {
          title:"book4",
          autor:"among124 us",
          src:"/bookBIG.png"},
    ]
  
 //todo add api and scroll to right

  return (
    <div className='flex-col mx-8 mb-8 h-auto space-y-6 mr-[10.75rem]'>
      <SectionTabbing />

      <SectionTitle title={"Livros Favoritos"} showAll={true} />
      
      <div className='flex gap-6 object-contain overflow-hidden'>
          {books.map(function(data) {
          return (
            <Book title={data.title} autor={data.autor} src={data.src} />
          )
        })}
        
      </div>
    </div>
  )
}
