import React, { useRef, useState } from 'react'

import sr from "scrollreveal"

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Hightline from './components/Hightline'
import Products from './components/Products'
import Form from './components/Form'
import Footer from './components/Footer'
import BtnToTop from './components/BtnToTop'

function App() {

  sr({reset: true, duration: 2500})

  sr().reveal('.reveal-bottom', {
    origin: 'bottom',
    distance: '60px'
  })
  sr().reveal('.reveal-top', {
    origin: 'top',
    distance: '60px'
  })
  sr().reveal('.reveal-right', {
    origin: 'right',
    distance: '60px'
  })
  sr().reveal('.reveal-left', {
    origin: 'left',
    distance: '60px'
  })
  sr().reveal('.reveal-rotate', {
    rotate: {x:0,y:80,z:0}
  })

  return (
    <>     
      <Header />
      <main id="main">
        <Home />
        <About />
        <Hightline />
        <Products />
        <Form />
      </main>
      <Footer />      
      <BtnToTop />
    </>
  )
  
}

export default App
