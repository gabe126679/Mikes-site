import React from "react";


const Footer = () => {
return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>Get the Best Property</h3>
            <div className="contact-input">
                <input type="email" placeholder="example@gmail.com"/>
                <a href="#">Continue</a>
            </div>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
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
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>

      </div>

    </div>
);
};
export default Footer;
