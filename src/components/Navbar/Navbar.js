import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button, Stack } from "@chakra-ui/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
      <Stack direction="row" spacing={8} align="center">
        <Button
          colorScheme="pink"
          loadingText="Loading"
          spinnerPlacement="start"
          iconSpacing="-1.5"
        >
          <Link to="/">Home</Link>
        </Button>

        <Button
          colorScheme="pink"
          loadingText="Loading"
          spinnerPlacement="start"
          iconSpacing="-1.5"
        >
          <Link to="/code">Code</Link>
        </Button>
        <Button
          colorScheme="pink"
          loadingText="Loading"
          spinnerPlacement="start"
          iconSpacing="-1.5"
          variant="solid"
        >
          <Link to="/hosting">Hosting</Link>
        </Button>
      </Stack>
    </nav>
  );
};

export default Navbar;
