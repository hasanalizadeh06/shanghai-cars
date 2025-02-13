import React from 'react'
import logo from "../../assets/img/logo.png"
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navigation__sticky-container">
      <nav className="navigation__sticky">
          <NavLink to="/">
            <img id='home' src={logo}/>
          </NavLink>
          <ul className="navigation__sticky-list">
              <li className="navigation__sticky-list--items" id="overview-item">
                  <NavLink to="/about-us">
                    About Us
                  </NavLink>
              </li>
              <li className="navigation__sticky-list--items">
                  <NavLink to="/our-services">
                    Our Sevices
                  </NavLink>
              </li>
              <li className="navigation__sticky-list--items">
                  <NavLink to="/cars">
                    Cars
                  </NavLink>
              </li>
              {/* <li className="navigation__sticky-list--items" id="buy-button">
                  Buy
              </li> */}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar