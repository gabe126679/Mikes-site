import React from 'react'
import Bproperty from "./Bproperty";
import CarouselItem from "./CarouselItem";
import pimage1 from "../images/s1.png"
import pimage2 from "../images/s2.png"
import pimage3 from "../images/s3.png"

function Properties() {
  return (



    <div className="product">
        <div className="p-heading">
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vitae.</p>
        </div>

        <div className="product-container">
            <Bproperty image={pimage1} name="AL-Musalla" price="$240,989" />
            <Bproperty image={pimage2} name="AL-Hafz" price="" />
            <Bproperty image={pimage3} name="AL-Bahara" price="" />
        </div>
        <div className="carousel-item">
          <CarouselItem />
        </div>

    </div>




  )
}

export default Properties;