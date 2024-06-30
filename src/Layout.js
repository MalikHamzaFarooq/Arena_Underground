import React from 'react'
import Header from './Header/Header'
import SearchComponent from './Pages/SearchComponent'
import Footer from './Footer/Footer'



export default function Layout({ children }) {
  return (
    <div>
           <Header/>
           <main>{children}</main>
           <SearchComponent/>
           <Footer/>
    </div>
  )
}
