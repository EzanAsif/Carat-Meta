import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const SiteFooter = () => {
  const otherLinks = [
    { name: "Contact Us", linkTo: "contact-us" },
    { name: "Work with us", linkTo: "work-with-us" },
    { name: "Team", linkTo: "team" },
    { name: "About", linkTo: "about" },
    { name: "Terms of use", linkTo: "terms-of-use" },
    { name: "Privacy", linkTo: "privacy" },
    { name: "Faq", linkTo: "faq" },
    { name: "Our newsletter", linkTo: "newsletter" },
  ];

  const socialAccounts = [
    { icon: <FaDiscord />, linkTo: "#" },
    { icon: <FaYoutube />, linkTo: "#" },
    { icon: <AiFillInstagram />, linkTo: "#" },
    { icon: <FaLinkedin />, linkTo: "#" },
  ];

  return (
    <div className="siteFooter">
      <div className="footerContent">
        <div className="extraLinks">
          <div className="footerLogo">
            <Link to="/">
              <img src="https://exclusible.com/static/assets/icons/ex_logo_white.svg" />
            </Link>
          </div>
          <ul>
            {otherLinks.map((obj, index) => {
              return (
                <li key={index}>
                  <Link to={obj.linkTo}>{obj.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="newsLetter">
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Exclusible.
          </p>
          <div className="newsLetterInputContainer">
            <input type="text" placeholder="ex : john.doe@mail.com" />
            <button>Subscribe Now</button>
          </div>
          <ul className="socialIconsContainer">
            {socialAccounts.map((obj, index) => {
              return (
                <li key={index}>
                  <a href={obj.linkTo}>{obj.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="footer-copyright" >Copyright (c) 2022 - Exclusible</p>
    </div>
  );
};

export default SiteFooter;
