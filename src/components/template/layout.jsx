import { Header } from "../share/header"
import { Footer } from "../share/footer"

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <div className='relative'>
            <Header/>
            <main className='max-w-7xl w-full mx-auto h-full py-14 px-5 lg:px-10'>
                {children}
            </main>
        </div>
        <Footer/>
    </div>
  )
}
