import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@chakra-ui/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
      <ul className="links">
        <Button colorScheme="cyan">
          <Link to="/">Home</Link>
        </Button>
        <Button colorScheme="cyan">
          <Link to="/code">Code</Link>
        </Button>
        <Button colorScheme="cyan">
          <Link to="/hosting">Hosting</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
