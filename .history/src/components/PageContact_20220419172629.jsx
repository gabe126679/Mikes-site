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

      <Footer />
      <br/>
    </div>
    </Section>


  );
};

export default PageContact;