import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useColorMode,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Input } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { Flex, VStack, Heading } from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Imthepk
        </Heading>
      </Flex>
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toogleColorMode}
      ></IconButton>
    </VStack>
  );
}

//return <Input placeholder="Basic usage ÜBUNG" />;

export default App;
