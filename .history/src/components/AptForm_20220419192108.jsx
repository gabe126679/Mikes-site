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
    <div className="container-email">
          <div  className="container border">
            <br/>
            <div className="container-sm">

            <h2 className="text-content">Book appointment</h2>
            <p  >Select a Date and Time that is most suitable for us to have a chat. We look forward to hearing from you!</p>
            </div>
              <p className="text-content"> From: </p>
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
              <p className="text-content"> To: (optional)</p>
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
                        <input type="submit" to="/"/>
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