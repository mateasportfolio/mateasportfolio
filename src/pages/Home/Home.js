import React from "react";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as FreecodecampIcon } from "../../assets/freecodecamp.svg";
import { ReactComponent as NetlifyIcon } from "../../assets/netlify.svg";
import { ReactComponent as EpekworksIcon } from "../../assets/epekworksicon.svg";
import Aura from "../../assets/Aura.jpeg";
import "./style.css";
import { Box } from "@chakra-ui/react";
import lottie from "lottie-web";
import Animation from "./Animation.json";
import { useEffect, useRef } from "react";
import { Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: Animation,
    });
  }, []);

  return (
    //<div className="home-page">
    <div className="main-box">
      <img src={Aura} className="aura-img" alt="main-img" />
      <div className="info">
        <Heading
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Welcome
        </Heading>
        <Box maxW="32rem">
          <Heading
            fontSize="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="semibold"
          >
            I’m Matea,
            <Text
              fontSize="xl"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="semibold"
            >
              I'm a future Mediadesigner/Webdesigner,I am having an Internship
              at epekworks.com.
            </Text>
            Im a Free Spirit, interested into Art, Music, learning new Skills
            and Technology.
          </Heading>
        </Box>
        {/* <h1>Welcome</h1>
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
        </div> */}
        <Box p={(40, 0, 40, 20)} bg="white" color="white">
          <div className="icons">
            <div className="link">
              <a
                href="https://epekworks.com/project/53a049fc-779b-4841-a540-0b22a9740174"
                target="_blank"
                rel="noreferrer"
              >
                <EpekworksIcon />
              </a>
            </div>

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
                href="https://dulcet-tiramisu-8b2b08.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <NetlifyIcon />
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
          </div>
        </Box>
        <div ref={container} paddingbottom={10}></div>
      </div>
    </div>
  );
};

export default Home;
