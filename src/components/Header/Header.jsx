import React from "react";
import "./Header.css";
import logo from "../../assets/UniLogo.png";
import heartHeader from "../../assets/heartHeader.png";
import envelope from "../../assets/envelope.png";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo}></img>
        <p>UniLife</p>
      </div>
      <div className="links-container">
        <div>
          <img src={heartHeader}></img>
          <a>Shortlist</a>
        </div>
        <div>
          <img src={envelope}></img>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
