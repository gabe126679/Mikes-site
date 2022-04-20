import React from "react";


const Footer = () => {
return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <div className="container-email">
                <h3>Join Our Mailing List</h3>
                <div className="contact-input">
                    <input type="email" placeholder="example@gmail.com"/>
                    <a href="#">Continue</a>
                </div>
            </div>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Legal</h4>
            <ui className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          <br/>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MFM Investments LLC | All rights reserved |
            Developed by Parallel Innovations | Privacy
          </p>
        </div>
        <br/>
      </div>
    </div>
);
};
export default Footer;
