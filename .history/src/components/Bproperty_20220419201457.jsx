import React from 'react'
import { Link } from 'react-router-dom'

function Bproperty(props) {
  return (
    <div className="p-box">
        <div className="container-reviews">
            <img src={props.image} alt="product"/>
            <br/>
            <p><img src={props.name} alt="product"/> </p>
        </div>
        <div className="price-container">
            <a href="#" className="price">
                {props.price}
            </a>
        </div>


        <Link to="contact"><a href="#" className="buy-btn">
            Get In Touch           
        </a></Link>
    </div>
  )
}

export default Bproperty;