import React from "react";

import logo from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <button>
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export default Header;
