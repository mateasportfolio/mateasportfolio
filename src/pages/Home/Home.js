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
import { Box, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

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
      <Stack spacing={3}>
        <Text textColor="white" fontSize="6xl">
          (6xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="5xl">
          (5xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="4xl">
          (4xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="3xl">
          (3xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="2xl">
          (2xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="xl">
          (xl) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="lg">
          (lg) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="md">
          (md) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="sm">
          (sm) In love with React & Next
        </Text>
        <Text textColor="white" fontSize="xs">
          (xs) In love with React & Next
        </Text>
      </Stack>

      <Box bg="white" w="60%" h="10%" p={6} color="white">
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
      <div className="email-box">
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
