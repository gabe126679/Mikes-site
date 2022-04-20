import React from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <Navbar />
        <div className="intro">
            <p>Buying or selling Property?</p>
            <h1><span>MFM </span> Speaks <span>Real</span> Estate</h1>
            <p className="details">Our proven methods of effectively fitting people with the best deal money can buy is now available to you! Let's talk today  </p>
            <Link to="/appointments" className="header-btn">Details</Link>
 
        </div>
    </div>
  )
}

export default Header