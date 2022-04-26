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
            <br/>
            <div className="text-color">
            <br/>
            <p className="details">Our proven methods of effectively fitting buyers and sellers with the best deals anyone can find is now available to you! Let's talk today  </p>
            <br/>
            </div>
            <br/>
            <Link to="/appointments" className="header-btn">Details</Link>
 
        </div>
    </div>
  )
}

export default Header