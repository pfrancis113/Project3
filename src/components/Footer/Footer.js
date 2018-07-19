import React from "react";
import "./Footer.css";
import logo from "./logo.png";


const Footer = () => (
  <footer className="footer">
    <img className="logo" src={logo} alt={"logo"} style={{ height: 80, width: null  }}/> 
  <span>2018</span>
  </footer>
);

export default Footer;
