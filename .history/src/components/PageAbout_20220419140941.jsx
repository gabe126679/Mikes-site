import React from 'react'
import aboutimage from '../images/hero.png';
import Contact from "./Contact"
import About from "./About"
import Howitworks from "./Howitworks"

function PageAbout() {
  return (
    <div className="about">
        <Howitworks/>
        <About/>

    </div>
  )
}

export default PageAbout;