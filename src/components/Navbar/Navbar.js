import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button, Box } from "@chakra-ui/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
      <Box alignItems="center" gap="2">
        <Button colorScheme="pink">
          <Link to="/">Home</Link>
        </Button>
        <Button colorScheme="pink">
          <Link to="/code">Code</Link>
        </Button>
        <Button colorScheme="pink">
          <Link to="/hosting">Hosting</Link>
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
