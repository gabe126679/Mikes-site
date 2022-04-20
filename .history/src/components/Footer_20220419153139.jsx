import React from 'react'

function Footer() {
  return (
    <div id="footer" className="footer_sticky_part" role="footer">
    <div className="container">
      <div className="row">
        <div className="socialfooter col-md-12 col-sm-12 col-xs-12">
          <div className="col-md-3 col-sm-12 col-xs-12" />
          <div className="col-md-3 col-sm-12 col-xs-6 languagecon">
            <div id="google_translate_element" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-6 socailcon">
            <ul className="utf_social_icon rounded social_footer">
              <li>
                <a className="facebook" target="_blank" href="https://www.facebook.com/TalkToBrunoInc/">
                  <i className="icon-facebook" aria-hidden="true" />
                  <span className="sr-only">facebook link</span>
                </a>
              </li>
              <li>
                <a className="twitter" target="_blank" href="https://twitter.com/TalkToBrunoInc">
                  <i className="icon-twitter" aria-hidden="true" />
                  <span className="sr-only">twitter link</span>
                </a>
              </li>
              <li>
                <a className="instagram" target="_blank" href="https://www.instagram.com/talktobruno/">
                  <i className="icon-instagram" aria-hidden="true" />
                  <span className="sr-only">instagram link</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 footermenucontainer">
          <ul className="social_footer_link">
            <li><a href="https://www.talktobruno.com/how-it-works">How it Works</a></li>
            <li><a href="https://www.talktobruno.com/vip-guarantee">VIP Guarantee</a></li>
            <li><a href="https://www.talktobruno.com/terms-conditions">Terms &amp; Conditions</a></li>
            <li><a href="https://www.talktobruno.com/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://www.talktobruno.com/safety">Safety</a></li>
            <li><a href="https://www.talktobruno.com/about-us">About Us</a></li>
            <li><a href="https://www.talktobruno.com/contact-us">Contact Us</a></li>
            <li><a href="https://www.talktobruno.com/rewards">Rewards</a></li>
            <li><a href="https://www.talktobruno.com/faq">FAQ</a></li>
            <li><a href="https://www.talktobruno.com/reviews">Reviews</a></li>
            <li><a href="https://www.talktobruno.com/blog">Blog</a></li>
          </ul>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 ">
          <ul className=" applink">
            <li><a rel="noreferrer" href="https://apps.apple.com/us/app/talk-to-bruno-partner/id1461661613" target="_blank" aria-label="Download from App Store"><img loading="lazy" alt="Download talktobruno IOS app" src="https://d3c32wtptb9fw6.cloudfront.net/template/apappstore_footer.png" /></a></li>
            <li><a rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.talktobruno.partner" target="_blank" aria-label="Download from Google Play Store"><img loading="lazy" alt="Download talktobruno Android app" src="https://d3c32wtptb9fw6.cloudfront.net/template/googleplay_footer.png" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-2">
          <div className="footer_copyright_part" style={{color: 'white'}}>© Copyright 2022 @Talk To Bruno</div>
        </div>
      </div>
    </div>
  </div>
      
  )
}

export default Footer