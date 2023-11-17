import React from 'react'
import SectionTitle from './section-title'
import Book from './book'
import SectionTabbing from './section-tabbing'
import { getFavBooks } from '@/services/queries'
import Link from 'next/link'

interface Author {
  name: string
}
interface BookData {
  id: string
  name: string
  author: Author
  cover: string
}

export default async function FavoriteBooks() {
  const fav = await getFavBooks()
  return (
    <div
      className="flex-col 
    mt-8
    w-full
    mb-12

    md:mx-8 md:mb-8 md:h-auto md:space-y-6 
    "
    >
      <div className="  hidden md:block md:mr-[10.75rem] ">
        <SectionTabbing />
        <div className="   h-0 border border-[#E7E7E7]" />
      </div>

      <div
        className="px-4    md:mr-[10.75rem]
 "
      >
        <SectionTitle
          title={'Livros Favoritos'}
          showAll={true}
        />
      </div>
      <div className="overflow-x-scroll px-4 max-h-[16.375rem] flex gap-5 md:flex-wrap  md:gap-6 md:overflow-hidden">
        {fav.books.map(function (data: BookData) {
          return (
            <Link href={{ pathname: '/book', query: { id: `${data.id}` } }}>
              <Book
                key={data.id}
                name={data.name}
                author={data.author.name}
                cover={data.cover}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
