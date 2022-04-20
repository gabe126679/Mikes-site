import React from 'react'
import aboutimage from '../images/about.png';

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image"/>
      </div>
    </div>
  )
}

export default About