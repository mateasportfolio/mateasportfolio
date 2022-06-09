import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button, Box, Flex } from "@chakra-ui/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
      <Flex alignItems="center" gap="2">
        <Button colorScheme="cyan">
          <Link to="/">Home</Link>
        </Button>
        <Button colorScheme="cyan">
          <Link to="/code">Code</Link>
        </Button>
        <Button colorScheme="cyan">
          <Link to="/hosting">Hosting</Link>
        </Button>
      </Flex>
    </nav>
  );
};

export default Navbar;
