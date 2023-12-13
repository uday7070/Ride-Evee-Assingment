import React from "react";
import "../App.css";
import logo from "../images/logo.png";
import download from "../images/download.png";
import login from "../images/login.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="header-img"></img>
      <div className="contact" style={{ padding: "0 12px", marginTop: "5px" }}>
        +91876578984
      </div>
      <div className="header-download">
        <img src={download} alt=""></img>
        <p style={{ marginTop: "0" }}>Download App</p>
      </div>
      <div className="login">
        <img src={login} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
