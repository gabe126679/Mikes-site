import React from 'react'
import logo from "../images/logo1.png"

function Navbar() {
  return (
    <nav>

        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="property">Appointments</a>
    </nav>
  )
}

export default Navbar