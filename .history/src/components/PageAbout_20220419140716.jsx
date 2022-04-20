import React from 'react'
import aboutimage from '../images/hero.png';
import Contact from "./Contact"

function PageAbout() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-model">
          <img src={aboutimage} alt="about image"/>
        </div>
        <div className="about-text">
          <h2>Best in your area <br/>Wholesale Real Estate</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aut libero at quod, eius vero enim, exercitationem ipsa repellendus magnam iure eaque placeat alias recusandae consequatur. Doloribus earum officia voluptatum veniam necessitatibus ratione dolor quam?</p>
          <button>View More Details</button>
          <h3>Get the Best Property</h3>
          
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default PageAbout;