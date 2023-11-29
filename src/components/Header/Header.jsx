import React from 'react'
import "./Header.css"
import logo from "../../assets/UniLogo.png"
import heart from "../../assets/heart.png"
import envelope from "../../assets/envelope.png"

function Header() {
  return (
      <div className="header-container">
        <div className='logo-container'>
            <img src={logo}></img>
            <p>UniLife</p>
        </div>
        <div className='links-container'>
            <img src={heart}></img>
            <a>Shortlist</a>
            <img src={envelope}></img>
            <a>Contact Us</a>
        </div>
      </div>
  );
}

export default Header