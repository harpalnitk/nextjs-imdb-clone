import Providers from './Providers';
import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

// charset and viewport meta tags are added by default 
//favicon is also added automatically
export const metadata = {
  title: 'Nextjs IMDB Clone',
  description: 'Nextjs 13 IMDB Clone project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>
      <Providers>
        <Header/> 
        <Navbar/>
        <SearchBox/>
        {children}
        </Providers>
    </body>
    

    </html>
  )
}
