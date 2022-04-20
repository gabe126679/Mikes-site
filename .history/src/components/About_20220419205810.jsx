import React from 'react'
import aboutimage from '../images/hero.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
        <div className="about-model">
          <img src={aboutimage} alt="about image"/>
        </div>
        <div className="about-text">
          <h2>Best in Your Area <br/>Wholesale Real Estate</h2>
          <p>Buying and selling real estate can be a daunting task, and that's exactly why we're here to help you ease the process. Our reputation, expertise and client base is the perfect way for you to focus on your dream home</p>
          <Link to="/about"><button>View More Details</button></Link>
          <h3>Get the Best Property</h3>
        </div>
    </div>
  )
}

export default About