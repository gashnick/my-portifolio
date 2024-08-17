import React from "react";
import { SocialIcon } from "react-social-icons/component";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav>
      <h1>GNicolas</h1>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Showcase</a>
      </div>
      <div className="social-icons">
        <FaFacebook className="facebook" />
        <FaTwitter className="twitter" />
        <FaLinkedin className="linkedin" />
      </div>
    </nav>
  );
}

export default Navbar;
