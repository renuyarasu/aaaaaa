import React from "react";
import "./Menu.css";

const toggleMenuClasses = () => {
    let hamburger = document.getElementById('burger');
    hamburger.classList.toggle('is-active');

    let mobileMenu = document.getElementById('menu-container');
        mobileMenu.classList.toggle('opened');
}
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
          <div className="menu-logo"><img className="menu-logo-img" src={('https://www.petsfolio.com/_ui/images/logo.png')} alt="logo" /></div>
          <div className="menu-title">Menu</div>
        </div>
    </div> 
  );
};

export default Menu;
