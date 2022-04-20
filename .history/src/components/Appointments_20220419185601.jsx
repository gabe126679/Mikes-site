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

const Appointments = () => {

  return (
    <div>
    <Section>
        
    <div className="form-contact">
        <Navbar/>
        <Form/>
        <br/>
        <br/>
        <About />
    </div>
    </Section>
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


    <Footer />
    </div>



  );
};

export default Appointments;