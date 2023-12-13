import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item1">
        <img
          src={logo}
          alt=""
          style={{ width: "12.22rem", height: "4.06rem" }}
        ></img>
      </div>
      <div className="footer-item2">
        <div className="footer-subitem">Home</div>
        <div className="footer-subitem">About</div>
        <div className="footer-subitem">Services</div>
        <div className="footer-subitem">News</div>
        <div className="footer-subitem">Contact</div>
        <div className="footer-subitem">Privacy policy</div>
      </div>
      <div className="footer-item3">
        <div>Newsletter</div>
        <div className="footer-email">Email</div>
        <div className="footer-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="22"
            viewBox="0 0 27 22"
            fill="none"
          >
            <path
              d="M16.1667 1.6665L25.5 10.9998M25.5 10.9998L16.1667 20.3332M25.5 10.9998H1.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="footer-item4">
        <p>All Copyrights are reserved by RIDE EVEE</p>
      </div>
    </div>
  );
};

export default Footer;
