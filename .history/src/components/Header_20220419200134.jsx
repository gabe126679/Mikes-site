import React from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <Navbar />
        <div className="intro">
            <p>Looking for a Property !</p>
            <h1><span>Buy </span>and <span>Sell </span> Properties</h1>
            <p className="details">Lorem ipsum dolor sit amet consectetur, repellat a hic totam iure voluptatem expedita. Ipsam nobis aspernatur voluptatum? hic totam iure voluptatem expedita. </p>
            <Link to="/appointments" className="header-btn">Details</Link>
 
        </div>
    </div>
  )
}

export default Header