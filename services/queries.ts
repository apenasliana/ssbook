import { gql } from "@apollo/client";
import { executeQuery } from "./executeQuery";

export async function getFavBooks() {

  const query = gql`
    query favoriteBooks {
      favoriteBooks {
        name
        author{
          name
        }
        cover
      }
    }
  `
 const favBooks = await executeQuery(query) 

 return { books: favBooks.favoriteBooks}
}

export async function getFavAuthors() {

  const query = gql`
    query favoriteAuthors {
      favoriteAuthors{
        name
        picture 
        booksCount
      }
    }
  `
 const FavAuthors = await executeQuery(query) 

 return { authors: FavAuthors.favoriteAuthors}
}

export async function getBookById(id:number) {

  const query = gql`
    query MinhaQuery {book(id:${id}){
    name
    cover
    description
    category
  }
  }
    }
  `
 const bookResult = await executeQuery(query) 

 return { book: bookResult.book}
}

export async function getUserPicture() {

  const query = gql`
    query userPicture {
      userPicture
    }
  `
 const userPic = await executeQuery(query) 

 return { image: userPic.userPicture}
}



