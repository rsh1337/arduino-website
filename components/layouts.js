import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Link,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import Head from "next/head";
import NextLink from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [display, changeDisplay] = useState("none");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Container maxW={{ base: "container.xl" }}>
        <Stack spacing={4} direction="row">
          <Heading>Arduino</Heading>
          <Spacer />
          <Stack
            spacing={4}
            direction="row"
            display={{ base: "none", md: "flex" }}
          >
            <Center>
              <NextLink href="/" passHref>
                <Button variant="ghost">Despre Arduino</Button>
              </NextLink>
            </Center>
            <Center>
              <NextLink href="#" passHref>
                <Button variant="ghost">Instalare</Button>
              </NextLink>
            </Center>
            <Center>
              <NextLink href="#" passHref>
                <Button variant="ghost">Senzori</Button>
              </NextLink>
            </Center>
            <Center>
              <NextLink href="#" passHref>
                <Button variant="ghost">Proiecte</Button>
              </NextLink>
            </Center>
            <Center>
              <NextLink href="#" passHref>
                <Button variant="ghost">Lectii</Button>
              </NextLink>
            </Center>
          </Stack>
          <Spacer />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={() => {
              changeDisplay("flex");
              onToggle();
            }}
          />
        </Stack>
      </Container>
      <Box
        w="100vw"
        display={display}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        bg="#4f6a8f"
      >
          <ScaleFade initialScale={0.9} in={isOpen}>
          <IconButton
              aria-label="Close Menu"
              size="lg"
              bg="#4f6a8f"
              mr={2}
              icon={<CloseIcon />}
              display={{ base: "block", md: "none" }}
              onClick={() => {onToggle(); changeDisplay("none");}}
              w="100%"
              _hover={{bg: "#88a2bc"}}
              color="white"
            />
          <VStack spacing={2} color="white">
            <NextLink href="/" passHref>
              <Button variant="ghost" w="100%" _hover={{bg: "#88a2bc"}}>
                Despre Arduino
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button variant="ghost" w="100%" _hover={{bg: "#88a2bc"}}>
                Instalare
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button variant="ghost" w="100%" _hover={{bg: "#88a2bc"}}>
                Senzori
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button variant="ghost" w="100%" _hover={{bg: "#88a2bc"}}>
                Proiecte
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button variant="ghost" w="100%" _hover={{bg: "#88a2bc"}}>
                Lectii
              </Button>
            </NextLink>
          </VStack>
          </ScaleFade>
      </Box>
    </Box>
  );
}

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid minH="100vh">
        <VStack align="stretch" w="full" spacing={8}>
          <Navbar />
          <Box as="main" h="full">
            {children}
          </Box>
        </VStack>
      </Grid>
    </>
  );
}
