
import React from 'react'
import SectionTitle from './section-title'
import Book from './book'
import SectionTabbing from './section-tabbing'
import { getFavBooks } from '@/services/queries'


interface Author {
  name: string;
}
interface BookData {
  name: string;
  author: Author; 
  cover: string;  
}

export default async function FavoriteBooks() {
  const fav = await getFavBooks();

  return (
    <div className='flex-col mx-8 mb-8 h-auto space-y-6 mr-[10.75rem]'>
      <SectionTabbing />

      <SectionTitle title={"Livros Favoritos"} showAll={true} />

      <div className='flex gap-6 object-contain overflow-hidden'>
        {fav.books.map(function (data: BookData) {
          return (
            <Book
              key={data.name}
              name={data.name}
              author={data.author.name} // Accessing the name property directly
              cover={data.cover}
            />
          );
        })}
      </div>
    </div>
  );
}
