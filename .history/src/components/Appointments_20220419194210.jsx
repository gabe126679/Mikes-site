import React from "react";
import styled from 'styled-components/macro';
import Navbar from "./Navbar";
import Form from "./AptForm";
import Footer from "./Footer";
import About from "./About";

const Section = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Break = styled.br`
@media (min-width: 768px) {
    display: none;
}
`;
const XBreak = styled.br`
@media (max-width: 768px) {
    display: none;
}
`;

const ABreak = styled.br`
@media (max-width: 970px) {
    display: none;
}
`;

const Appointments = () => {

    
  return (
    <div>
    <Section>
        
    <div className="form-contact">
        <Navbar/>
        <Form/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ABreak/>
        <ABreak/>
        <ABreak/>
        <ABreak/>
        <ABreak/>
        <ABreak/>
        <About />
    </div>
    </Section>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <ABreak/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    <Break/>
    
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>
    <XBreak/>


    <Footer />
    </div>
  );
};

export default Appointments;