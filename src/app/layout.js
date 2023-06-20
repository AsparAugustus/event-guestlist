import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guest list',
  description: 'Sign-in here',
}

export default function RootLayout({ children }) {

  const backgroundStyle = {
    backgroundImage: 'url("/Asset 3.png")',
    backgroundRepeat: 'repeat',
    height: '100vh',  
    width: '100vw',  

  };

  return (
    <html lang="en">
     <body className={inter.className} >
        
        {children}
        </body>
    </html>
  )
}
