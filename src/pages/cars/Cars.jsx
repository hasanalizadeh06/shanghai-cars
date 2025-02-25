import React from 'react'
import "./Cars.css"
import header_img from "../../assets/img/cars/1.png"
import img1 from "../../assets/img/cars/cars1.png"
import img2 from "../../assets/img/cars/cars2.jpg"
import img3 from "../../assets/img/cars/cars3.png"
import img4 from "../../assets/img/cars/cars4.png"
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
            <p>BYD Auto, a subsidiary of the Chinese multinational BYD Company, has rapidly emerged as a global leader in the electric vehicle (EV) industry. Founded in 2003, BYD specializes in the production of battery electric vehicles (BEVs) and plug-in hybrid electric vehicles (PHEVs), collectively known as new energy vehicles (NEVs). The company's extensive vertical integration allows it to control most aspects of its supply chain, from battery production to electronic components, ensuring cost efficiency and quality control.</p>
            <Link to="byd">
              <button>Details</button>
            </Link>
            </div>
        </div>
        <div className="text">
          <Link to="zeekr">
            <button>Details</button>
          </Link>
          <div className="text-content">
            <div className="text-header">
              <h1>Zeekr</h1>
            </div>
            <div className='text-body'>
              <p>Zeekr, established in March 2021 by the Geely Group, is a premium electric vehicle (EV) brand aiming to compete with industry leaders like Nio and Tesla. The brand's name combines "Generation Z" and "geek," reflecting its focus on innovation and a tech-savvy audience.</p>
            </div>
          </div>
        </div>
        <div className="img1">
          <img src={img2} alt="" />
        </div>
        <div className="nio">
          <div className="leftSide">
            <h1>NIO</h1>
            <p>NIO Inc., founded in November 2014 by William Li, is a prominent Chinese electric vehicle (EV) manufacturer headquartered in Shanghai. The company specializes in designing and developing premium smart electric vehicles, aiming to shape a sustainable future under its mission "Blue Sky Coming."</p>
            <Link to="nio">
              <button>Details</button>
            </Link>
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
            Li Auto Inc., founded in 2015 by Li Xiang, is a prominent Chinese electric vehicle (EV) manufacturer headquartered in Beijing, with production facilities in Changzhou, Jiangsu province. The company specializes in designing and producing premium smart electric vehicles, focusing on extended-range electric vehicles (EREVs) and, more recently, battery electric vehicles (BEVs).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars