import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import "./customDatePickerWidth.css";

function AptForm() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div className="container-email">
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
    </div> */}
    <div className="container-email">
          <div  className="container border">
            <br/>
            <div className="container-sm">

            <h2 className="h1-responsive font-weight-bold text-center my-4">Book appointment</h2>
            <p className="text-center w-responsive mx-auto mb-5">Select a Date and Time that is most suitable for us to have a chat. I look forward to hearing from you and your pets!</p>
            </div>
              <p> From: </p>
                <div className="customDatePickerWidth">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            console.log(date);
                        }}
                        dateFormat="MM/dd/yyyy hh:mm a" 
                        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                        isClearable
                        scrollableMonthYearDropdown
                        showTimeSelect
                        timeIntervals={15}
                    />
                </div>
                <br/>
                <br/>
              <p> To: (optional)</p>
                <div className="customDatePickerWidth">
                <DatePicker
                    selected={endDate}
                    onChange={(date) => {
                        setEndDate(date);
                        console.log(date);
                    }}
                    dateFormat="MM/dd/yyyy hh:mm a" 
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                    isClearable
                    scrollableMonthYearDropdown
                    showTimeSelect
                    timeIntervals={15}
                    className="wide"
                />
                </div>
                <br/>
                <br/>
                <br/>

                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <label for="comments">Additional Comments</label>
                                <br/>
                                <br/>
                                <textarea type="text" id="comments" name="comments" rows="2" className="form-control md-textarea"></textarea>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="text-center text-md-left d-flex justify-content-center">
                        <button className="btn" type="submit" to="/">Send</button>
                    </div>
                    <br/>
                    <br/>
                </form>


        </div>
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
        <br/>
  </div>
  )
}

export default AptForm