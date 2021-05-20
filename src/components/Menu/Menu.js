import React from "react";
import "./Menu.css";

const toggleMenuClasses = () => {
  let hamburger = document.getElementById("burger");
  hamburger.classList.toggle("is-active");

  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.toggle("opened");
};
const Menu = () => {
  return (
    <div>
      <div className="burger" id="burger" onClick={toggleMenuClasses}>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="menu-container" id="menu-container">
        <div className="menu-logo">
          <img
            className="menu-logo-img"
            src={"https://www.petsfolio.com/_ui/images/logo.png"}
            // src={`../../assets/logo.png`} 
            alt="logo"
          />
        </div>
        <div className="menu-title">
          <a href="/">Home</a>
        </div>
        <div className="menu-title">
          <a href="https://dog.ceo/dog-api/breeds-list">Api</a>
        </div>
        <div className="menu-title">
          <a href="https://github.com/renuyarasu/dogbreed">GitHub</a>
        </div>
        <div className="menu-title">
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
