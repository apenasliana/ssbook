import FavoriteBooks from "@/components/favorite-books";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Library from "@/components/library";

export default function Home() {
  return (
    <main className="flex   w-screen flex-col">
        <Header/>
        <div className="ml-[8.8rem] mt-[6rem]">
          <FavoriteBooks/>
          <Library/>

        </div>
        <Footer/>
    </main>
  )
}
