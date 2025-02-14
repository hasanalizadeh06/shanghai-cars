import React from 'react'
import './Li.css'
import img1 from "../../../assets/img/li/1.png"
import img2 from "../../../assets/img/li/2.png"
import img3 from "../../../assets/img/li/3.png"
import img4 from "../../../assets/img/li/4.png"
import img5 from "../../../assets/img/li/5.png"
import img6 from "../../../assets/img/li/6.png"

function Li() {
return (
    <div className="li-page">
            <div className="page-intro">
                    <img src={img1} alt=""/>
            </div>
            <div className="page-content">
                    <div className="about-car">
                            <div className="name">LI Auto 9 Suv</div>
                            <div className="description">
                            The expansive three-row design offers ample space for each family member to stretch out freely. With the Magic Carpet driver seat, brand-new queen seat, and Spa-grade 10-point massage, the vehicle offers your family a first-class riding experience. Electric seats come as standard in all three rows and feature an exclusively designed queen seat and a variety of customizable seat modes, ensuring comfort and security for the family, whether sitting or lying down. Even at high speeds, the vehicle remains exceptionally quiet. Easy conversation on the road while loved ones and children enjoy uninterrupted, peaceful sleep. The vehicle is equipped with a 12.8-inch central control screen and a 12.3-inch full LCD instrument panel, providing a more intuitive and user-friendly interactive experience. The vehicle is equipped with a 12.8-inch central control screen and a 12.3-inch full LCD instrument panel, providing a more intuitive and user-friendly interactive experience.
                            </div>
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
                                    <div className="name">Li</div>
                                    <div className="description">Li Auto is a Chinese electric vehicle manufacturer known for its innovative and luxurious SUVs. The brand focuses on providing a premium driving experience with advanced technology, spacious interiors, and high safety standards. Li Auto's vehicles are designed to offer comfort and convenience, making them ideal for families and long-distance travel. The company's commitment to sustainability and cutting-edge design has positioned it as a leader in the electric vehicle market, appealing to environmentally conscious consumers who do not want to compromise on luxury and performance.</div>
                            </div>
                    </div>
                    <div className="model">
                            <div className="spacer">
                                    <div className="leftSide">
                                            <img src={img5} alt="" />
                                    </div>
                                    <div className="rightSide">
                                            <div className="name">LI auto 7 </div>
                                    </div>
                            </div>
                    </div>
                    <div className="description">
                            <div className="leftSide">
                                    <div className="description">Try our automatically unfolding electric footrests, adjustable second-row backrests up to 40°, and forward-moving front passenger seat. Expand the second-row leg room up to 1160 mm for ample space. Even someone 175 cm tall can stretch freely. Nappa leather seats with thickened high-density comfort sponges offer firmer support and more comfort. The backrest is thicker and higher, providing a comprehensive sense of body wrapping. A long-distance ride is no longer tiring. Two flat "single beds" are created by putting down and joining the first-row with second-row seats, making it ideal for a cozy nap or camping.</div>
                            </div>
                            <div className="rightSide">
                                    <img src={img6} alt="" />
                            </div>
                    </div>
            </div>
    </div>
)
}

export default Li