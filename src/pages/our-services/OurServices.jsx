import React from 'react'
import "./OurServices.css"

import header_img from "../../assets/img/car_inside.jpg"
import details_img from "../../assets/img/interyer.jpg"
import img1 from "../../assets/img/our-services/1.png"
import img6 from "../../assets/img/our-services/6.png"
import img7 from "../../assets/img/our-services/7.png"
import img8 from "../../assets/img/our-services/8.png"

function OurServices() {
  return (
    <div className="our-services">
      
      <div className="services-header">
        <img src={img1} alt="" className="header-image" />
      </div>

      <div className="main">
        <div className="container">
          <div className="services-header">
            <h1>
              Our Services
            </h1>
          </div>
          <div className="content">
            <div className="first-row content-row">
              <div className="service service-1">
                <h1>
                  Services
                </h1>
              </div>
              <div className="service service-2">
                <h1>
                  Details
                </h1>
              </div>
            </div>
            <div className="second-row content-row">
              <div className="service service-3">
                <h1>
                  Cars
                </h1>
              </div>
              <div className="service service-4">
                <h1>
                  Repair
                </h1>
              </div>                  
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="services-header">
          <h1>Why Choose Shangai Cars</h1>
        </div>
        <div className="items">
          <div className="item1 item">
            <div className="leftSide">
              <p>
              Advanced Technology: <br/>
              From AI-powered features to autonomous driving capabilities, Chinese manufacturers are pushing the boundaries of innovation.
              </p>
            </div>
            <div className="rightSide">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="item2 item">
            <div className="leftSide">
              <img src={img7} alt="" />
            </div>
            <div className="rightSide">
              <p>
              Eco-Friendly Solutions: Many Chinese brands specialize in electric vehicles (EVs) and hybrid models that promote sustainability.
              </p>
            </div>
          </div>
          <div className="item3 item">
            <div className="leftSide">
              <p>
              Affordability: Offering high-tech features at competitive prices, Chinese cars provide great value for money.
              </p>
            </div>
            <div className="rightSide">
              <img src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="campaigns">
        <div className="services-header">
          <h1>Campaigns</h1>
        </div>
        <div className="items">
          <div className="item">
            <div className="upper"></div>
            <div className="down">
              <p>20% OFF</p>
            </div>
          </div>
          <div className="item">
            <div className="upper"></div>
            <div className="down">
              <p>20% OFF</p>
            </div>
          </div>
          <div className="item">
            <div className="upper"></div>
            <div className="down">
              <p>20% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default OurServices