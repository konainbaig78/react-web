import React from 'react'
import Navbar from './components/Header'
import Skills  from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonal from './components/Testimonals'

const App = () => {
  return (
<div>

  <Navbar/>
   <Skills/>
   <AboutMe/>
   <Projects/>
   <Testimonal/>
   <Contact/>
   <Footer/>

   </div>
  )
}

export default App
