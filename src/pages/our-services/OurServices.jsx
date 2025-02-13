import React from 'react'
import "./OurServices.css"

import header_img from "../../assets/img/car_inside.jpg"
import details_img from "../../assets/img/interyer.jpg"

function OurServices() {
  return (
    <div className="our-services">
      
      <div className="services-header">
        <img src={header_img} alt="" className="header-image" />
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
                  Services
                </h1>
              </div>
            </div>
            <div className="second-row content-row">
              <div className="service service-3">
                <h1>
                  Services
                </h1>
              </div>
              <div className="service service-4">
                <h1>
                  Services
                </h1>
              </div>                  
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="services-header">
          <h1>Details</h1>
        </div>
        <div className="items">
          <div className="item1 item">
            <div className="leftSide">
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
              </p>
            </div>
            <div className="rightSide">
              <img src={details_img} alt="" />
            </div>
          </div>
          <div className="item2 item">
            <div className="leftSide">
              <img src={details_img} alt="" />
            </div>
            <div className="rightSide">
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="item3 item">
            <div className="leftSide">
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
              </p>
            </div>
            <div className="rightSide">
              <img src={details_img} alt="" />
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