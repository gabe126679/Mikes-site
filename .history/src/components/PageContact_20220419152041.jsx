import React from "react";
import styled from 'styled-components/macro';
import Dog from '../images/home-2.jpg';
import Navbar from "./Navbar";


const Section = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContact = () => {

  return (
    <div className="header-form">
      <Navbar/>
      <div className="container-form">
        <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
            <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>


  );
};

export default PageContact;