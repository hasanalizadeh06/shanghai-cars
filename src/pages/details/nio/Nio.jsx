import React from 'react'
import './Nio.css'
import img1 from "../../../assets/img/nio/1.png"
import img2 from "../../../assets/img/nio/2.png"
import img3 from "../../../assets/img/nio/3.png"
import img4 from "../../../assets/img/nio/4.png"
import img5 from "../../../assets/img/nio/5.png"
import img6 from "../../../assets/img/nio/6.png"

function Byd() {
  return (
    <div className="nio-page">
        <div className="page-intro">
            <img src={img1} alt=""/>
        </div>
        <div className="page-content">
            <div className="about-car">
                <div className="name">Nio ET9</div>
                <div className="description">NIO ET9, Smart Electric Executive flagship. An embodiment of vision and action. Drive the evolution of NIO's design DNA, unlock groundbreaking experiences like never before. Unprecedented dimensions create imposing presence. Cutting-edge technologies optimize space, achieving an 80% utilization rate—unmatched in its class. Upon approach, the car body will quickly lower by 50 millimeters within two seconds, adjusting the seat height to the perfect 638 millimeters. Every millisecond and every millimeter is carefully designed to bring elegant and effortless ingress and egress.</div>
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
                    <div className="name">Nio</div>
                    <div className="description">A holistic power service with chargeable, swappable and upgradable batteries for NIO users. NIO Power is a mobile internet-based power solution with extensive networks for battery charging and battery swap facilities. Enhanced by Power Cloud, it offers a power service system with chargeable, swappable and upgradable batteries to provide users with power services catering to all scenarios. NIO Service is a one-stop service system developed by NIO. Based on the Service Guardian system and the nationwide service network, it is able to identify user needs, providing reassuring, time-saving and cost-saving experiences. NIO offers one-click for service, door-to-door tire repair, post-accident reassurance, Joyride and other services for your worry-free experiences. </div>
                </div>
            </div>
            <div className="model">
                <div className="spacer">
                    <div className="leftSide">
                        <img src={img5} alt="" />
                    </div>
                    <div className="rightSide">
                        <div className="name">Nio ES8</div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="leftSide">
                    <div className="description">Generous dimensions enable a more composed silhouette. Fluid lines sweep from the hood, glide along through the body and flow gracefully to the tailgate, sculpting ES8 with seamless contours. The pronounced shoulder creates a powerful and seamless transition from the side to the rear. Rich Colors Inspired by the Sky. 8 exterior colors curated for every taste, including the NIO Color of 2023 and an ES8 exclusive color. Smart Matrix LED Headlights make nighttime driving safer. ES8 is able to accurately bend light around an oncoming vehicle to avoid blinding oncoming traffic, whilst keeping the rest of the environment lit up. Enhanced by LiDAR, which can actively send and receive laser light, to ensure optimum functionality in varying environmental conditions.</div>
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