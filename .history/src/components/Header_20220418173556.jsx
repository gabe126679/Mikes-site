import React from 'react';
import Navbar from './Navbar'

function Header() {
  return (
    <div className="header">
        <Navbar />
        <div className="intro">
            <p>Looking for a Property !</p>
            <h1><span>Buy </span>and <span>Sell </span> Properties</h1>
            <p className="details">Lorem ipsum dolor sit amet consectetur, repellat a hic totam iure voluptatem expedita. Ipsam nobis aspernatur voluptatum? Unde placeat deserunt magni enim fugiat a at, in nostrum esse dolor maxime incidunt accusantium sit, fuga omnis. Quibusdam mollitia repellendus neque in ipsa consequatur ea?</p>
            <a href="#" className="header-btn">Details</a>

        </div>
    </div>
  )
}

export default Header