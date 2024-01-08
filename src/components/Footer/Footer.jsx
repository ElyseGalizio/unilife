import React from 'react'
import "./Footer.css"
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-email">
        <h3>Keep in touch</h3>
        <p>
          Curious about new offerings? Sign up for our weekly newsletter and
          stay informed.
        </p>
        <input type="email" placeholder="Your email"></input>
      </div>
      <div className="footer-socialize">
        <h3>Let's Socialize</h3>
        <div>
          <img src={facebook}></img>
          <a>Facebook</a>
        </div>
        <div>
          <img src={twitter}></img>
          <a>Twitter</a>
        </div>
        <div>
          <img src={instagram}></img>
          <a>Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer