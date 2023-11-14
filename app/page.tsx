import FavoriteBooks from "@/components/favorite-books";
import Header from "@/components/header";
import Library from "@/components/library";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col">
        <Header/>
        <FavoriteBooks/>
        <Library/>
    </main>
  )
}
