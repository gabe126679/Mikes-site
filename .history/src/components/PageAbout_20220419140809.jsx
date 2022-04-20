import React from 'react'
import aboutimage from '../images/hero.png';
import Contact from "./Contact"
import About from "./About"

function PageAbout() {
  return (
    <div className="about">
        <About/>
        <Contact />
    </div>
  )
}

export default PageAbout;