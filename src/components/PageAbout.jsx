import React from 'react';
import ImageOne from '../images/home-1.jpg';
import styled from 'styled-components';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Howitworks from "./Howitworks";
import { Link } from 'react-router-dom';
import CarouselItem from "./CarouselItem";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
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
const Button = styled.button`

    width: 140px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    background-color:#236c7e;
`;



function PageAbout() {
  return (
    <div>
    <Section>
        <Navbar/>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <h2 >Origins</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h2 >Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3 >We look forward to collaborating with you</h3>
                <br/>
                <p >Let's Get In Touch!</p>
                <br/>
                <p>

                </p>

                <div className="wide">
                    <Link to="/contact"><Button>Book an Appointment</Button></Link>
                </div>
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

      <CarouselItem />
      <br/>
      <br/>
      <br/>
      <Footer />
    </Section>


    </div>
  )
}

export default PageAbout;