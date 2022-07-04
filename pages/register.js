import { signIn, useSession, getSession, signOut } from "next-auth/react";
import NextLink from "next/link";
import Router from "next/router";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layouts";
import Registerfunction from "../components/register";

export default function Index() {
  const toast = useToast();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Dashboard" displayy="none">
        <Registerfunction/>
      </Layout>
    );
  }

  if (status === "authenticated") {
    return (
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        mt="15%"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Esti deja conectat.
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Esti deja conectat pe un cont, apasa click pe butonul de mai jos pentru a fi redirectionat.
        </AlertDescription>
        <NextLink href="/admin" passhref>
          <Button
            colorScheme="blue"
            mt={2}
            onClick={() =>
              toast({
                title: "Esti deja conectat.",
                description: "Ai fost redirectionat pe pagina de administratori",
                duration: 5000,
                isClosable: true,
              })
            }
          >
            Admin Page
          </Button>
        </NextLink>
      </Alert>
    );
  }
}
