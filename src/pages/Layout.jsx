import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import Footer from '../components/Footer'
import Project from './Project'

const Layout = () => {
  return (
    <div>
      <Home/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default Layout
