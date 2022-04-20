import React from 'react'
import logo from "../images/logo1.png"

function Navbar() {
  return (
    <div>
        <a href="#" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </div>
  )
}

export default Navbar