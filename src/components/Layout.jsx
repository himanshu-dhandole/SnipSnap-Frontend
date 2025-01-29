import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
const Layout = () => {
  return (
    <>
      <NavBar/>
       <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout