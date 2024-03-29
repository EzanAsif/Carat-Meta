import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="navbar-logo" onCLick={closeMobileMenu}>
            <img
              src={
                "https://exclusible.com/static/assets/icons/ex_logo_white.svg"
              }
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i>{Click ? "X" : "="}</i>
          </div>
          <div className={Click ? "nav-menu active" : "nav-menu"}>
            <div
              className="nav-links-container"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li className="nav-item">
                <Link
                  to="/drop"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Drop Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Hub
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  White Paper
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Sustainability
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
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
