import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Head/Header'
import About from './components/About/About'
import Services from './components/Services/services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App