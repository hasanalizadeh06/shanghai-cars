import React from 'react'
import "./Cars.css"
import header_img from "../../assets/img/car_inside.jpg"
import img1 from "../../assets/img/cars1.png"
import img2 from "../../assets/img/cars2.jpg"
import img3 from "../../assets/img/cars3.png"
import img4 from "../../assets/img/cars4.png"
import { Link } from 'react-router-dom'

function Cars() {
  return (
    <div className="cars">
      <div className="services-header">
        <img src={header_img} alt="" className="header-image" />
      </div>
      <div className="content">
        <div className="content-header">
          <h1>Cars</h1>
        </div>
        <div className="byd">
          <div className="leftSide">
            <img src={img1} alt="" />
          </div>
          <div className="rightSide">
            <h1>BYD</h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            <button>Details</button>
          </div>
        </div>
        <div className="text">
          <button>Details</button>
          <div className="text-content">
            <div className="text-header">
              <h1>Zeekr</h1>
            </div>
            <div className='text-body'>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="img1">
          <img src={img2} alt="" />
        </div>
        <div className="nio">
          <div className="leftSide">
            <h1>NIO</h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            <button>Details</button>
          </div>
          <div className="rightSide">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="img">
          <img src={img4} alt="" />
        </div>
        <div className="li">
          <div className="upper">
            <div className="left">
              <h1>Li</h1>
            </div>
            <div className="right">
              <Link to="li">
                <button>Details</button>
              </Link>
            </div>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars