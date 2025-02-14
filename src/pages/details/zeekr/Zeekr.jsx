import React from 'react'
import './Zeekr.css'
import img1 from "../../../assets/img/zeekr/1.png"
import img2 from "../../../assets/img/zeekr/2.png"
import img3 from "../../../assets/img/zeekr/3.png"
import img4 from "../../../assets/img/zeekr/4.png"
import img5 from "../../../assets/img/zeekr/5.png"
import img6 from "../../../assets/img/zeekr/6.png"

function Byd() {
  return (
    <div className="zeekr-page">
        <div className="page-intro">
            <img src={img1} alt=""/>
        </div>
        <div className="page-content">
            <div className="about-car">
                <div className="name">Zeekr 001</div>
                <div className="description">Its avant-garde styling and striking details combine the elegance of a shooting brake with the sportiness of a crossover coupé. Every Zeekr is based on the Sustainable Experience Architecture (SEA). An innovative, modular, and scalable fully electric platform that seamlessly integrates the latest technologies. Up to 620km Range, less-than-30-Minute 10%-80% Charge with 200kW DC charging standard onboard. Access to over 600 thousands charging stations across Europe. Maximum features. Three Trims, Fully Equipped. The Zeekr 001 product offer is straight to the point.</div>
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
                    <div className="name">Zeekr</div>
                    <div className="description">Through design, technology, and innovation, we encourage to re-imagine electric vehicles. Zeekr Power aims at making EV charging a seamless experience for our drivers. With our wide range of services, Zeekr drivers will be able to enjoy a hassle-free driving experience without the charging and range anxiety in mind. Use our charging services to charge at home or on the road. A state-of-the-art diagnostics platform, an industry-leading warranty and a comprehensive service network give you convenience and piece of mind throughout the lifetime of your Zeekr vehicle. Our Zeekr Connected services ensure that every journey becomes more convenient, innovative, and rewarding. Want to own your Zeekr and pay for it in monthly installments? Then Zeekr's financing solution is a good option.</div>
                </div>
            </div>
            <div className="model">
                <div className="spacer">
                    <div className="leftSide">
                        <img src={img5} alt="" />
                    </div>
                    <div className="rightSide">
                        <div className="name">Zeekr 7X</div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="leftSide">
                    <div className="description">The all-new Zeekr 7X recognises you. From your seat to your steering wheel, it knows your settings. It knows your schedule. Your regular route is preloaded.  This is the height of technological sophistication, so you relax and focus on the big moments. The high-voltage electrical system offers a range of up to 615km, plus fast DC charging from 10% to 80% up to 13 minutes, with a 360kW charging station. You can also choose from up to six driving modes, helping you deal with a wide range of road conditions. Throughout the interior of the Zeekr 7X, you will enjoy high-quality materials, premium finishes and striking colour schemes, all curated by Zeekr’s European design team, based in Gothenburg, Sweden</div>
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