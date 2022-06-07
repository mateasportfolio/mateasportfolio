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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Flex, VStack, Heading } from '@chakra-ui/layout';
import { FaSun, FaMoon } from 'react-icons/fa';

function App(params) {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Mateas POrtfolio App
        </Heading>
      </Flex>
      <IconButton></IconButton>
    </VStack>
  );
}

export default App;
