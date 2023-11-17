import ContentPage from '@/components/content-page'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function BookPage({
  searchParams
}: {
  searchParams: { [key: string]: string }
}) {
  return (
    <main className="flex h-full   flex-col">
      <div className="hidden">
        <Header />
      </div>
      <div className="m-0 md:ml-[8.8rem] md:mt-[10.5rem]">
        <ContentPage bookId={searchParams.id} />
      </div>
      <Footer />
    </main>
  )
}
