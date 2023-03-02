import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="#" />
          </Link>
          <ul>
            <li>
              <Link className="active" to="allUsers">
                Get Users
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
