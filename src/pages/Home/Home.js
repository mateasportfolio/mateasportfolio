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
import { Grid, GridItem } from "@chakra-ui/react";
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
            <b>new Skills and Technology.</b>
          </p>
        </div>
        <div className="icons">
          <InstagramIcon />
          <EpekworksIcon />
          <LinkedinIcon />
        </div>
      </div>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"300px 1fr 400px"}
        gridTemplateColumns={"700px 1fr"}
        h="00px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          pl="2"
          bg="orange.300"
          area={"header"}
          spacing="3"
          textColor="white"
          fontSize="6xl"
        >
          Chakra-UI /In love with React & Coding
        </GridItem>
        <GridItem
          pl="2"
          bg="pink.300"
          area={"nav"}
          spacing="3"
          textColor="white"
          fontSize="3xl"
        >
          React.js /In love with React & Coding
        </GridItem>
        <GridItem
          pl="2"
          bg="green.300"
          area={"main"}
          spacing="3"
          textColor="white"
          fontSize="xl"
        >
          Node.js /In love with React & Coding
        </GridItem>
        <GridItem
          pl="2"
          bg="blue.300"
          area={"footer"}
          spacing="3"
          textColor="white"
        >
          Java Script /In love with React & Coding
        </GridItem>
      </Grid>

      <Box bg="ghost" w="60%" h="10%" p={6} color="white">
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
