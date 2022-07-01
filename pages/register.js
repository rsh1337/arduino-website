import { signIn, useSession, getSession, signOut } from "next-auth/react";
import Router from "next/router";
import {
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

export default function Index() {
  const toast = useToast();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitation, setInvitation] = useState("");
  const [nume, setNume] = useState("");
  const [message, setMessage] = useState(null);
  const registerUser = async (email, password, nume, invitation, e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, nume, invitation }),
    });
    let data = await res.json();
    if (data.message) {
      console.log(data.message);
      return toast({
        title: "Error",
        description: data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (data.msgsg == "success") {
      //   let options = { redirect: false, email, password };
      //   await signIn("credentials", options);
      return (
        Router.push("/admin"),
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      );
    }
  };

  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Dashboard">
        <Center>
          <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
            <FormControl>
              <FormLabel htmlFor="nume" mt={10}>
                Name
              </FormLabel>
              <Input
                id="nume"
                type="nume"
                name="nume"
                value={nume}
                onChange={(e) => setNume(e.target.value)}
              />
              <FormLabel htmlFor="email" mt={10}>
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="invitation" mt={10}>
                Invitation Code
              </FormLabel>
              <Input
                id="invitation"
                type="invitation"
                name="invitation"
                value={invitation}
                onChange={(e) => setInvitation(e.target.value)}
              />
              <FormHelperText>Invitatia generata de owner.</FormHelperText>
              <FormLabel htmlFor="password" mt={10}>
                Password
              </FormLabel>
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>Parolele sunt 100% criptate.</FormHelperText>

              <Button
                mt={6}
                colorScheme="teal"
                onClick={(e) =>
                  registerUser(email, password, nume, invitation, e)
                }
              >
                Inregistreaza-te
              </Button>
            </FormControl>
          </Container>
        </Center>
      </Layout>
    );
  }

  if (status === "authenticated") {
    return (
      Router.push("/admin"),
      toast({
        title: "Already SignedIn.",
        description: "You are redirected to admin page.",
        duration: 9000,
        isClosable: true,
      })
    );
  }
}
