import React from 'react'
import './Byd.css'
import img1 from "../../../assets/img/byd/1.png"
import img2 from "../../../assets/img/byd/2.png"
import img3 from "../../../assets/img/byd/3.png"
import img4 from "../../../assets/img/byd/4.png"
import img5 from "../../../assets/img/byd/5.png"
import img6 from "../../../assets/img/byd/6.png"

function Byd() {
  return (
    <div className="byd-page">
        <div className="page-intro">
            <img src={img1} alt=""/>
        </div>
        <div className="page-content">
            <div className="about-car">
                <div className="name">BYD Atto 3</div>
                <div className="description">The front design of the BYD ATTO3 is inspired by the gaze of a dragon. The LED daytime running lights and the integrated light strip provide an impressive appearance at first glance. When you unlock the car doors, the front and rear LED lighting ensemble gradually illuminates as if a dragon is awakening for the first time, greeting you. With its upwardly sloping shoulder line and the effect of dynamic wheel design, the BYD ATTO 3 has a sporty and aerodynamic design. The drag coefficient is only 0.29 Cd. The low drag coefficient contributes to an increase in driving range.</div>
            </div>
            <div className="interyer">
                <div className="leftSide">
                    <img src={img2} alt="" />
                </div>
                <div className="rightSide">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="mark">
                <div className="leftSide">
                    <img src={img4} alt="" />
                </div>
                <div className="rightSide">
                    <div className="name">BYD Seal</div>
                    <div className="description">The BYD SEAL AWD's headlights are arranged in a staggered manner, providing stereo effect lighting thanks to their special U shape. This allows you to see the road better than ever before, offering you a safer and more comfortable journey. BYD has been a leading brand in battery production for over 30 years. The BYD Blade Battery, featured in our BYD SEAL AWD model, is the most concrete product of our extensive experience. It has become one of the safest batteries in the world by undergoing a series of demanding tests under tough conditions. BYD has an extraordinary vertical integration capacity in its supply chain. BYD produces the world's first mass-produced 8-in-1 electric powertrain system by integrating 8 core components including VCU, BMS, MCU, PDU, DC-DC controller, built-in charger, drive motor, and transmission. It provides energy efficiency by optimizing space utilization.</div>
                </div>
            </div>
            <div className="model">
                <div className="spacer">
                    <div className="leftSide">
                        <img src={img5} alt="" />
                    </div>
                    <div className="rightSide">
                        <div className="name">BYD Dolphin</div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="leftSide">
                    <div className="description">This data indicates the maximum distance you can travel with a fully charged electric vehicle before the gasoline or diesel motor kicks in, across different travel types (from city driving to highway). While it represents a value achievable under ideal conditions, real-world daily journeys are never the same and are influenced by various external factors. This means your individual electric range may vary.</div>
                </div>
                <div className="rightSide">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Byd