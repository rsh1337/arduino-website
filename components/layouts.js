import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
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
  Flex,
  Divider,
} from "@chakra-ui/layout";
import {
  DarkMode,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  LightMode,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/transition";
import Head from "next/head";
import NextLink from "next/link";
import React, { useState } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mt={3}>
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
              <NextLink href="/despre-arduino" passHref>
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
          <Tooltip label="Beta Feature!" aria-label="A tooltip">
              <IconButton
                aria-label={colorMode}
                size="lg"
                mr={2}
                icon={<MoonIcon />}
                onClick={() => toggleColorMode()}
              />
          </Tooltip>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            ref={btnRef}
            onClick={onOpen}
          />
        </Stack>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} mt={5}>
              <NextLink href="/" passHref>
                <Button variant="ghost" w="100%" _hover={{ bg: "#88a2bc" }}>
                  Despre Arduino
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button variant="ghost" w="100%" _hover={{ bg: "#88a2bc" }}>
                  Instalare
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button variant="ghost" w="100%" _hover={{ bg: "#88a2bc" }}>
                  Senzori
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button variant="ghost" w="100%" _hover={{ bg: "#88a2bc" }}>
                  Proiecte
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button variant="ghost" w="100%" _hover={{ bg: "#88a2bc" }}>
                  Lectii
                </Button>
              </NextLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>Arduino :: {title}</title>
      </Head>
      <Grid minH="100vh">
        <VStack align="stretch" w="full" spacing={3}>
          <Navbar />
          <Divider />
          <Box as="main" h="full">
            {children}
          </Box>
        </VStack>
      </Grid>
    </>
  );
}

{
  /* <Box
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
      </Box> */
}
