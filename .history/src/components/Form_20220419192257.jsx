import React from 'react'


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
      <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Bel Alton, MD 20611, USA</p>
                    </li>

                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>+301-861-9588</p>
                    </li>

                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>Mike@Melius.com</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Form