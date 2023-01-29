import React from "react";
import {
  Center,
  ChakraProvider,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <Center m="3" minH="0" h="100vh">
        <VStack alignItems="flex-start">
          <Heading>Hi, I'm Goh</Heading>
          <Text>
            Welcome to my site!
            <br />
            If you're looking for a software engineer, then you've come to the
            right place.
          </Text>
          <HStack spacing="3">
            <Text>Here's some links: </Text>
            <Link
              href="https://docs.google.com/document/d/1ueFORxZrO8jNOTykctQwNlhQ7H_0Feo3kNbnkt9gU4c/edit?usp=sharing"
              isExternal
              color="blue.400"
            >
              resume
            </Link>
            <Link href="https://github.com/gohsato" isExternal color="blue.400">
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/gohsato/"
              isExternal
              color="blue.400"
            >
              linkedin
            </Link>
          </HStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default App;
