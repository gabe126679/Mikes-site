import React from 'react'
import Header from './Header'
import Howitworks from './Howitworks'
import About from './About'
import Agent from './Agent'
import Properties from './Properties'
import Contact from './Contact'


function All() {
  return (
    <div className="App">
      <Header />
      <Howitworks />
      <About />
      <Agent />
      <Properties />
      <Contact />

    </div>
  )
}

export default All;