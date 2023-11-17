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
    <div className=" ">
      <div className=" h-full  p-8 border border-white  bg-[#FFF]  shadow-lg shadow-black/[0.03] md:w-auto  mt-[16.25rem]   px-5 pt-8  rounded-tl-[2rem] ">
        <div className="absolute  inset-0 w-full flex-col overflow-y-visible ">
          <div className="z-[-2]">
            <Image
              className=" absolute"
              src="/pretinho-protecao.svg"
              alt="shadow"
              width={500}
              height={500}
            />
            <Image
              className=" min-w-[18.5rem] min-h-[27.063rem] h-[32.25rem] w-[22.5rem] "
              src={book.cover}
              alt="book cover"
              width={500}
              height={500}
            />
          </div>
          <div className="z-[-1]  m-4 w-full">
            <Image
              className="absolute left-0 top-0 h-[1.5rem] w-[1.5rem] mx-auto "
              src="/back-button.svg"
              alt="nav button"
              width={24}
              height={24}
            ></Image>
            <Image
              className="absolute top-0 right-0 h-[1.5rem] w-[1.5rem] mx-auto "
              src="/options.svg"
              alt="nav button"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
        <div className="flex-col px-5  ">
          <div className="flex gap-5">
            <h2 className="font-bold text-xl md:text-base   text-justify  l	text-[#555]  ">
              {book.name}
            </h2>
            <Image
              className="h-[1.5rem] w-[1.5rem] mx-auto "
              src="/heart.svg"
              alt="nav button"
              width={24}
              height={24}
            ></Image>
          </div>

          <span className="text-sm  text-[#757575] ">{book.author.name}</span>
        </div>
        <div className="hidden">
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
        <div className="flex-col self-start pr-[10.75rem] pl-6 whitespace-pre-line pt-5">
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
