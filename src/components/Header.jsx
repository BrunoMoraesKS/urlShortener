import React, { useState } from "react";

import logo from "../images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);

    const menu = document.getElementById("menu");
    menu.classList.add("showMenu");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    const menu = document.getElementById("menu");
    menu.classList.remove("showMenu");
  };

  return (
    <header>
      <img src={logo} alt="Logo" />

      {isMenuOpen ? (
        <AiOutlineClose className="menuIcon" onClick={closeMenu} />
      ) : (
        <AiOutlineMenu className="menuIcon" onClick={openMenu} />
      )}

      <nav id="menu">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <div className="horizontalLine"></div>
          <li>Login</li>
          <button className="getStarted">Sign Up</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
