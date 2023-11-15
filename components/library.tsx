"use client"

import React from 'react'
import {motion} from 'framer-motion'
import SectionTitle from './section-title'
import Book from './book'
import Autor from './autor'
import BookCard from './book-card'
import SectionButtons from './section-buttons'

export default function Library() {

  const autors=[
    {
      name:"NameName",
      numBooks:55,
      src:"/autorPicture.png"},
    {
      name:"Name NameNameaA",
      numBooks:5,
      src:"/autorPicture.png"},
    {
      name:"Name Name",
      numBooks:9,
      src:"/autorPicture.png"},
    {
      name:"Name NameName",
      numBooks:8,
      src:"/autorPicture.png"},
    {
      name:"Name NameNameName",
      numBooks:6,
      src:"/autorPicture.png"},
    {
      name:"Name",
      numBooks:4,
      src:"/autorPicture.png"},
    ]


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
          title:"asgfda",
          autor:"among  asfdus",
          src:"/bookNormal.png"},
        {
          title:"poggers 2",
          autor:"amonaaag us",
          src:"/bookNormal.png"},
          {
            title:"asgfda",
            autor:"among  asfdus",
            src:"/bookNormal.png"},
          {
            title:"poggers 2",
            autor:"amonaaag us",
            src:"/bookNormal.png"},{
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





  return (
    
    <motion.div className=' h-screen p-8 border border-white border-opacity-40 bg-[#FFF]  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-auto sm:top-0   sm:rounded-tl-[2rem] '
        initial={{ y: -100, x: 1, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
    >

    <div className='flex-col mr-[8.8rem]'>

      <div>
        <SectionTitle title='Artistas favoritos' showAll={true}/>
        <div className='flex my-6 flex-nowrap overflow-hidden gap-6 '>
          {autors.map(function(data) {
            return (
              <div>
              <Autor name={data.name} numBooks={data.numBooks} src={data.src}/>
              </div>
            )
          })}
        </div>
      </div>
      <div >

          <SectionTitle title='Biblioteca' showAll={false}/>
          <SectionButtons/>

        <div className=' flex my-6 flex-wrap overflow-hidden gap-6 '>
          {books.map(function(data) {
            return (
              <div >
                <BookCard title={data.title} autor={data.autor} src={data.src} />
              </div>
            )})}
        </div>
      </div>
    </div>

    </motion.div>
    
  )
}
