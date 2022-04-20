import React from 'react'
import Bproperty from "./Bproperty";
import CarouselItem from "./CarouselItem";
import pimage1 from "../images/s1.png"
import pimage2 from "../images/s2.png"
import pimage3 from "../images/s3.png"
import gold from "../images/gold.png"

function Properties() {
  return (
    <div className="product">
        <div className="p-heading">
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae.</p>
        </div>

        <div className="product-container">
            <Bproperty image={pimage1}  name={gold} price="Lorem ipsum dolor sit amet! Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae." />
            <Bproperty image={pimage2}  name={gold} price="Lorem ipsum dolor sit amet! Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae." />
            <Bproperty image={pimage3} name={gold} price="Lorem ipsum dolor sit amet! Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae." />
        </div>
        <div className="carousel-item">
          <CarouselItem />
        </div>
    </div>
  )
}

export default Properties;