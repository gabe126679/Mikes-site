import React from 'react'

function Bproperty(props) {
  return (
    <div className="p-box">
        <div className="container-reviews">
            <img src={props.image} alt="product"/>
            <br/>
            <p><img src={props.name} alt="product"/> </p>
        </div>

        <a href="#" className="buy-btn">
            Add to Cart            
        </a>
    </div>
  )
}

export default Bproperty;