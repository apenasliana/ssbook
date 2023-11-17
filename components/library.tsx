import React from 'react'
import SectionTitle from './section-title'
import Book from './book'
import Autor from './autor'
import BookCard from './book-card'
import SectionButtons from './section-buttons'
import { redirect } from 'next/navigation'

import { getAllBooks, getFavAuthors } from '@/services/queries'
import Link from 'next/link'

interface Author {
  name: string
}
interface BookData {
  name: string
  author: Author
  cover: string
  id: string
}
;('')
interface Authors {
  name: string
  booksCount: string
  picture: string
}

export default async function Library() {
  const allBooks = await getAllBooks()
  const favAuthors = await getFavAuthors()

  return (
    <div className=" h-full  p-8 border border-white  bg-[#FFF]  shadow-lg shadow-black/[0.03] md:w-auto    rounded-tl-[2rem] ">
      <div className="flex-col mr-0 md:mr-[8.8rem]">
        <div>
          <SectionTitle
            title="Autores favoritos"
            showAll={true}
          />
          <div className="flex mt-5 mb-[1.875rem] md:my-6 gap-5 overflow-x-scroll md:flex-wrap  md:gap-6 md:overflow-hidden max-h-[4.375rem]">
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

          <div className=" flex my-6 gap-5 overflow-y-scroll mx-5 h-auto flex-wrap md:overflow-hidden md:gap-6 md:h-[21.75rem] ">
            {allBooks.books.map(function (data: BookData) {
              return (
                <Link href={{ pathname: '/book', query: { id: `${data.id}` } }}>
                  <BookCard
                    name={data.name}
                    author={data.author.name}
                    cover={data.cover}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
