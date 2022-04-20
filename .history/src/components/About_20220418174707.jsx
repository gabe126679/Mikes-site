import React from 'react'
import aboutimage from '../images/hero.png';

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image"/>
      </div>
      <div className="about-text">
        <h2>Best in your area <br/>Wholesale Real Estate</h2>
      </div>
    </div>
  )
}

export default About