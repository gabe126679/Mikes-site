import React from 'react'
import aboutimage from '../images/hero.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
        <div className="about-model">
          <img className="about-img" src={aboutimage} alt="#" />
        </div>
        <div className="about-text">
          <h2>Best in Your Area <br/>Wholesale Real Estate</h2>
          <p>Buying and selling real estate can be a daunting task, and that's exactly why we're here to help you ease the process. Our reputation, expertise and client base is the perfect way for you to focus on your dream home or aspiring property</p>
          <Link to="/about"><button>View More Details</button></Link>
          <h3>Get the Best Property</h3>
        </div>
    </div>
  )
}

export default About