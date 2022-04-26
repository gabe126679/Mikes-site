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
            <input type="text" id="fname" name="firstname" placeholder="Your Name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your Last Name.." />
            <label htmlFor="Location">Location (street address, zip, etc.)</label>
            <input type="text" id="Location" name="location" placeholder="Your Location.." />
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Comments, Concerns, Points of Outrage.." style={{height: '200px'}} defaultValue={""} />
            <Link to="/"><input type="submit" defaultValue="Submit" /></Link>
        </form>
      </div>
      <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-3 text-center">
                <ul >
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Bel Alton, MD 20611, USA</p>
                    </li>

                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p><a href="tel:301-861-9589">+301-861-9588</a></p>
                    </li>

                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>Mike@Melius.com</p>
                    </li>
                </ul>
            </div>
        </div>
        <br/>
      
    </div>
  )
}

export default Form