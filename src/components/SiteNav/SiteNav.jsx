import React, { useState } from "react";
import "./style.css";
const SiteNav = () => {
  const [Click, setClick] = useState(false);
  const [Navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={Navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onCLick={closeMobileMenu}>
            <img
              src={
                "https://exclusible.com/static/assets/icons/ex_logo_white.svg"
              }
            />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i>{Click ? "X" : "=="}</i>
          </div>
          <div className={Click ? "nav-menu active" : "nav-menu"}>
            <div className="nav-links-test" style={{ display: "flex", flexWrap : 'wrap' }}>
              <li className="nav-item">
                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </a>
              </li>
            </div>
            <div className="nav-cta">
              <button className="GetStarted1">JOIN COMMUNITY</button>
              <button className="GetStarted">CONNECT WALLET</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
