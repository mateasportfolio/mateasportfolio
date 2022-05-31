import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/code">Code</Link>
        </li>
        <li>
          <Link to="/hosting">Hosting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
