import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import { Nunito } from "next/font/google"

export const metadata =  {
  title: 'AirBnB',
  description: 'AirBnB Clone',
}


const font = Nunito({
  subsets: ['latin'],

})

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
        <ClientOnly>
          <Modal title = "Hello world"   isOpen = {true}/>
          <Navbar />
        </ClientOnly>
       
        {children}
      </body>
    </html>
  )
}
