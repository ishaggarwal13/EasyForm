import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </li>{" "}
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            {" "}
            Home{" "}
          </Link>{" "}
        </li>{" "}
        <li className="navbar-item">
          <Link to="Form" className="navbar-link">
            {" "}
            Form{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default NavBar;
