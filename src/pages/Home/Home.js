import React from "react";
import { ReactComponent as InstagramIcon } from "../../assets/instagram_svg.svg";
import { ReactComponent as EpekworksIcon } from "../../assets/epeklogo.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as FreecodecampIcon } from "../../assets/freecodecamp.svg";
import { ReactComponent as NetlifyIcon } from "../../assets/netlify.svg";
import Aura from "../../assets/Aura.jpeg";
import "./style.css";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-box">
        <img src={Aura} className="aura-img" alt="main-img" />
        <div className="info">
          <h1>Welcome</h1>
          <p>
            I’m<b> Matea</b>
          </p>
          <p>
            I'm a future Mediadesigner / Webdesigner,I am having an Internship
            at
            <b> epekworks.com.</b>
          </p>
          <p>
            Im a <b>Free Spirit</b> ,interested into <b>Art</b>,learning{" "}
            <b>new Skills and Technology</b>
          </p>
        </div>
        <div className="icons">
          <InstagramIcon />
          <EpekworksIcon />
          <LinkedinIcon />
        </div>
      </div>

      <Box bg="white">
        <div className="icons">
          <div className="link">
            <a
              href="https://www.freecodecamp.org/matea"
              target="_blank"
              rel="noreferrer"
            >
              <FreecodecampIcon />
            </a>
          </div>
          <div className="link">
            <a
              href="https://www.linkedin.com/in/matea-tabak-83440a230/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="link">
            <a
              href="https://dulcet-tiramisu-8b2b08.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <NetlifyIcon />
            </a>
          </div>
        </div>
      </Box>
      <div className="third-box">
        <FormControl colorScheme="cyan">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default Home;
