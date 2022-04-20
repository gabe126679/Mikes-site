import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import img1 from "../images/home-1.jpg"
import img2 from "../images/home-2.jpg"
import img3 from "../images/interior-1.jpg"
import img4 from "../images/slide-2.jpg"
import img5 from "../images/house-3.jpg"
import img6 from "../images/kitchen-1.jpg"
import img7 from "../images/slide-1.jpg"
import img8 from "../images/house-4.jpg"
import img9 from "../images/slide-3.jpg"


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function CarouselItem() {
  return (
    <>
      <br/>
      <h1 style={{ textAlign: "center" }}>Here are some of our recent properties</h1>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Item ><img className="carousel-img" src={img1} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img2} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img3} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img4} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img5} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img6} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img7} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img8} alt="img"/></Item>
          <Item ><img className="carousel-img" src={img9} alt="img"/></Item>
        </Carousel>
      </div>
    </>
  )
}

export default CarouselItem