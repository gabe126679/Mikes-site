import React from 'react'
import { Link } from 'react-router-dom';

function Form() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container-email">
        <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="Location">Location (street address, zip, etc.)</label>
            <select id="Location" name="Location">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
            <Link to="/"><input type="submit" defaultValue="Submit" /></Link>
        </form>
      </div>
      
    </div>
  )
}

export default Form