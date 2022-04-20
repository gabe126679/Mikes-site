import React from "react";
import styled from 'styled-components/macro';
import Navbar from "./Navbar";
import Form from "./Form";
import Footer from "./Footer";
import About from "./About";

const Section = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContact = () => {

  return (
    <Section>
    <div className="header-form">
      <Navbar/>
      <Form/>
      <About />
      <h3>Join Our Mailing Listmj</h3>
      <div className="container">
        <div className="contact-input">
            <input type="email" placeholder="example@gmail.com"/>
            <a href="#">Continue</a>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
    </Section>


  );
};

export default PageContact;