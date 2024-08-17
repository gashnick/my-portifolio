import React from "react";
import "./header.css";
import me from "../../images/mee.jpg";
function Header() {
  return (
    <section className="header">
      <div className="header-contents">
        <h1 className="header-header">
          Hi
          <span className="dot">,</span>
          <br /> I am <span className="name">Nicolas Gashumba</span>
        </h1>
        <p className="header-text"> I am a web developer</p>
        <div className="btn-box">
          <button className="header-button">Get in Touch</button>
          <button className="header-button-cv">Download cv</button>
        </div>
      </div>
      <img src={me} className="header-image" />
    </section>
  );
}

export default Header;
