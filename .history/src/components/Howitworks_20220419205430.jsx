import React from 'react'

function Howitworks() {
  return (
    <div className="how-it-works">
        <div className="container">
            <h2>How It Works</h2>
            <div className="flex">
                <div>
                    <span className="fas fa-home"></span>
                    <h4>List your Property</h4>
                    <p>We perform a detailed analysis of your propertie's most desirable aspects</p>
                </div>

                <div>
                    <span className="fas fa-dollar-sign"></span>
                    <h4>Link with a Buyer</h4>
                    <p>We find the best candidates with the highest offer to match your property</p>
                </div>

                <div>
                    <span className="fas fa-chart-line"></span>
                    <h4>Close the Deal</h4>
                    <p>We make it easy to connect with a host of potential options to complete your sale</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Howitworks;