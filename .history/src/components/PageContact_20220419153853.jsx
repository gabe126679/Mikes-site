import React from "react";
import styled from 'styled-components/macro';
import Dog from '../images/home-2.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";


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
    </div>
    <Footer />
    </Section>


  );
};

export default PageContact;