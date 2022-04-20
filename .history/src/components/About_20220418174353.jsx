import React from 'react'
import aboutImage from '../images/about.png';

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutImage} alt="about image"/>
      </div>
    </div>
  )
}

export default About