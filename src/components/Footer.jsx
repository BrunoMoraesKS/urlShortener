import React from "react";

import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footerDiv">
      <footer>
        <img src={logo} alt="Logo" className="logo" />

        <ul>
          <section className="features">
            <li className="liTitle">Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </section>

          <section className="resources">
            <li className="liTitle">Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </section>

          <section className="company">
            <li className="liTitle">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Carrers</li>
            <li>Contact</li>
          </section>
        </ul>

        <section className="socialIcons">
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={twitterIcon} alt="Twitter Icon" />
          <img src={pinterestIcon} alt="Pinterest Icon" />
          <img src={instagramIcon} alt="Instagram Icon" />
        </section>
      </footer>
    </div>
  );
};

export default Footer;
