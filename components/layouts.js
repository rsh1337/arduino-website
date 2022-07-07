import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Spacer,
  Stack,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/layout";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      direction="column"
      position="sticky"
      top="0px"
      bg="white"
      zIndex="dropdown"
    >
      <Box mt={3}>
        <Container maxW={{ base: "container.xl" }}>
          <Stack spacing={4} direction="row">
            <NextLink href="/">
              <Button variant="ghost">
                <Heading>Arduino</Heading>
              </Button>
            </NextLink>
            <Spacer />
            <Stack
              spacing={4}
              direction="row"
              display={{ base: "none", md: "flex" }}
            >
              <Center>
                <NextLink href="/documentatie" passHref>
                  <Button variant="ghost">Documentatie</Button>
                </NextLink>
              </Center>
              <Center>
                <NextLink href="/senzori" passHref>
                  <Button variant="ghost">Senzori</Button>
                </NextLink>
              </Center>
              <Center>
                <NextLink href="/proiecte" passHref>
                  <Button variant="ghost">Proiecte</Button>
                </NextLink>
              </Center>
              <Center>
                <NextLink href="/lectii" passHref>
                  <Button variant="ghost">Lectii/Teste</Button>
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
                <NextLink href="/documentatie" passHref>
                  <Button variant="outline" w="100%">
                    Documentatie
                  </Button>
                </NextLink>
                <NextLink href="/senzori" passHref>
                  <Button variant="outline" w="100%">
                    Senzori
                  </Button>
                </NextLink>
                <NextLink href="/proiecte" passHref>
                  <Button variant="outline" w="100%">
                    Proiecte
                  </Button>
                </NextLink>
                <NextLink href="/lectii" passHref>
                  <Button variant="outline" w="100%">
                    Lectii/Teste
                  </Button>
                </NextLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Divider mt="0.75rem" />
    </Flex>
  );
}

export default function Layout({ title, children, displayy }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid minH="100vh">
        <VStack align="stretch" w="full" spacing={3}>
          <Navbar />
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
