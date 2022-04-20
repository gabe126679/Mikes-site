import React from 'react'
import logo from "../images/logo1.png"

function Navbar() {
  return (
    <nav>
        <a href="/homes" className="logo">
            <img src={logo} alt="logo"/>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/homes">Contact</a></li>
        </ul>
        <a href="/homes" className="property">Appointments</a>
    </nav>
  )
}

export default Navbar