import React from 'react';

function Contact() {
  return (
    <div className="contact">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <div className="container-email">
                <h3>Join Our Mailing List</h3>
                <div className="contact-input">
                    <input type="email" placeholder="example@gmail.com"/>
                    <a href="/">Continue</a>
                </div>
            </div>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Navigation</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Legal</h4>
            <ui className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ui>
          </div>
          <br/>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MFM Investments LLC | All rights reserved |
            Developed by <a href="https://parallelinnovations.dev/" onClick={
              () => {
                window.location.href = "https://parallelinnovations.dev/"
              }
            }>Parallel Innovations</a>
          </p>
          </div>
        </div>
        <br/>
      </div>
    </div>
    </div>
  )
}

export default Contact;