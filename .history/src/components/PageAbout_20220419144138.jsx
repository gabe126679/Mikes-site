import React from 'react'
import ImageOne from '../images/home-1.jpg';
import styled from 'styled-components';
import Navbar from "./Navbar"
import About from "./About"
import Agent from "./Agent"
import Howitworks from "./Howitworks"
import { Link } from 'react-router-dom'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: relative;
  @media (min-width: 768px) {
    height: 100%;
    width: 70%;
    object-fit: contain;
  }
`;
  const Break = styled.br`
    @media (min-width: 768px) {
        display: none;
    }
`;

function PageAbout() {
  return (
    <div>
    <Section>
        <Navbar/>
        {/* <br className="break"/>
        <br className="break"/>
        <br className="break"/>
        <br className="break"/>
        <br className="break"/>
        <br className="break"/> */}
        <Break />
        <Break />
        <Break />
        <Break />
        <Break />
        <Break />

        <Container>
            <Wrap>
            <ColumnLeft>
                <Content
                data-aos='fade-right'
                data-aos-duration='1200'
                data-aos-delay='300'
                data-aos-once='true'
                data-aos-anchor-placement='center bottom'
                className="border rounded text-center"
                >

                <h1 >Maryland Wholesale Real Estate</h1>
                <h2 >Summary</h2>
                <p>
                    I've been caring for animals my entire life, and I've been a professional animal caretaker for over 6 years. My experience with pets of all kinds takes me above and beyond the love of what I do and provides me with a true purpose for providing pets with the most accommodating attention each animal needs and deserves. 
                </p>
                <h2 >Origins</h2>
                <p>
                    Growing up on a farm, I developed a unique relationship with many animals, and I naturally learned everything about how to service and comfort animals and to help them thrive in the most suitable environment. I currently work as a veterinary technician, as I've done for the past 6 years and I absolutely LOVE my job.
                </p>
                <h2 >Services</h2>
                <p>
                    I offer pet walking, sitting, medical administration and a wide range of other services. Most importantly, what I provide is quintissential information regarding pets needs based on my experience treating animals with the best care and attention.
                </p>
                <h3 >We look forward to collaborating with you</h3>
                <br/>
                <p >Let's Get In Touch!</p>
                <br/>
                <p>

                </p>
                <ul className="menu">
                    <li><Link to="/contact" className="active">Book an Appointment</Link></li>
                </ul>
                <br/>
                <br/>

                </Content>
            </ColumnLeft>
            <ColumnRight>
                <Image
                src={ImageOne}
                />
            </ColumnRight>
            </Wrap>
        </Container>
      <Howitworks/>
      <About/>
    </Section>


    </div>
  )
}

export default PageAbout;