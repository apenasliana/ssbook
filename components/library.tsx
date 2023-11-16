import React from 'react'
import SectionTitle from './section-title'
import Book from './book'
import Autor from './autor'
import BookCard from './book-card'
import SectionButtons from './section-buttons'

import { getAllBooks, getFavAuthors } from '@/services/queries'

interface Author {
  name: string
}
interface BookData {
  name: string
  author: Author
  cover: string
}

interface Authors {
  name: string
  booksCount: string
  picture: string
}

export default async function Library() {
  const allBooks = await getAllBooks()
  const favAuthors = await getFavAuthors()

  return (
    <div className=" h-screen p-8 border border-white border-opacity-40 bg-[#FFF]  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-auto sm:top-0   sm:rounded-tl-[2rem] ">
      <div className="flex-col mr-[8.8rem]">
        <div>
          <SectionTitle
            title="Artistas favoritos"
            showAll={true}
          />
          <div className="flex my-6 flex-wrap overflow-hidden gap-6 max-h-[4.375rem]">
            {favAuthors.authors.map(function (data: Authors) {
              return (
                <div>
                  <Autor
                    name={data.name}
                    booksCount={data.booksCount}
                    picture={data.picture}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <SectionTitle
            title="Biblioteca"
            showAll={false}
          />
          <SectionButtons />

          <div className=" flex my-6 flex-wrap overflow-hidden gap-6 h-[21.75rem] ">
            {allBooks.books.map(function (data: BookData) {
              return (
                <div>
                  <BookCard
                    name={data.name}
                    author={data.author.name}
                    cover={data.cover}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
