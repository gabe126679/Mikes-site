import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import img1 from "../images/home-1.png"
import img2 from "../images/home-2.png"
import img3 from "../images/interior-1.png"
import img4 from "../images/slide-2.png"
import img5 from "../images/house-3.png"
import img6 from "../images/kitchen-1.png"
import img7 from "../images/slide-1.png"
import img8 from "../images/house-5.png"
import img9 from "../images/slide-3.png"


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function CarouselItem() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
          <Item><img src={img1} alt="img"/></Item>
        </Carousel>
      </div>
    </>
  )
}

export default CarouselItem