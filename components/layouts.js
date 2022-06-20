import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { MenuIcon } from "@chakra-ui/menu";
import { Switch } from "@chakra-ui/switch";
import Head from "next/head";
import NextLink from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [display, changeDisplay] = useState("none");
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
            onClick={() => changeDisplay("flex")}
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
      >
        <IconButton
          aria-label="Close Menu"
          size="lg"
          bg="white"
          mr={2}
          icon={<CloseIcon />}
          display={{ base: "block", md: "none" }}
          onClick={() => changeDisplay("none")}
        />
        <VStack spacing={2}>
          <NextLink href="/" passHref>
            <Button variant="ghost" w="100%">Despre Arduino</Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button variant="ghost" w="100%">Instalare</Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button variant="ghost" w="100%">Senzori</Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button variant="ghost" w="100%">Proiecte</Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button variant="ghost" w="100%">Lectii</Button>
          </NextLink>
        </VStack>
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