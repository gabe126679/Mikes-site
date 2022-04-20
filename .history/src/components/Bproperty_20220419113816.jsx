import React from 'react'

function Bproperty(props) {
  return (
    <div className="p-box">
        <img src={props.image} alt="product"/>
        <p><img src={props.name} alt="product"/> </p>
        <a href="#" className="price">
            {props.price}
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="#" className="buy-btn">
            Add to Cart            
        </a>
    </div>
  )
}

export default Bproperty;