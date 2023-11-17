import React from 'react'
import SectionTitle from './section-title'
import IconButton from './icon-button'
import Book from './book'
import { getAllBooks, getBookById } from '@/services/queries'
import {
  useParams,
  useRouter,
  useSearchParams,
  usePathname
} from 'next/navigation'
import Image from 'next/image'

export default async function ContentPage({ bookId }: { bookId: string }) {
  const { book } = await getBookById(parseInt(bookId))
  return (
    <div className=" w-full ">
      <div className="flex-col w-auto h-auto content-end mt-[0.625rem]  ">
        <h2 className="font-bold text-base   text-justify  leading-[1.125rem]	text-[#555] h-[2.25rem]  ">
          {book.name}
        </h2>
        <span className="text-sm  text-[#757575] ">{book.author.name}</span>
      </div>

      <div className=" flex w-full h-auto p-8 border border-white border-opacity-40 bg-[#FFF]  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-0   sm:rounded-tl-[2rem] mb-[5rem]">
        <div>
          <div className="relative w-full flex-col overflow-y-visible ">
            <Image
              className=" absolute rounded-lg -top-[9rem] min-w-[18.5rem] min-h-[27.063rem] "
              src={book.cover}
              alt="book cover"
              width={500}
              height={500}
            />
          </div>
          <IconButton
            text="Favoritar"
            icon="/heart-solid.svg"
          />
          <IconButton
            text="Compartilhar"
            icon="/share-solid.svg"
          />
          <IconButton
            text="Salver em uma lista"
            icon="/arrow-down-tray.svg"
          />
        </div>
        <div className="flex-col self-start pr-[10.75rem] pl-6 whitespace-pre-line">
          <p className="pb-10">{book.description}</p>
          <SectionTitle
            title="Sobre o Autor"
            showAll={false}
          ></SectionTitle>
          <p className="pt-6">descricao autor</p>
        </div>
      </div>
    </div>
  )
}
