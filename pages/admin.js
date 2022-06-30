import { signIn, useSession, getSession } from "next-auth/react";
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
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layouts";

export default function Index() {
  const { data: session, status } = useSession()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
      console.log("error", res.error);
    }
    // return Router.push("/");
  };
  const registerUser = async (email, password, e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    if (data.message) {
      setMessage(data.name);
    }
    if (data.message == "success") {
      let options = { redirect: false, email, password };
      const res = await signIn("credentials", options);
      // return Router.push("/");
    }
  };
  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Dashboard">
        <Center h="60%">
          <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
            <FormControl onSubmit={handleSubmit}>
              <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" type="name" name="name" />
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
                <Button mt={6} colorScheme="teal" type="submit">
                  Conecteaza-te
                </Button>
  
                <Button
                  mt={6}
                  colorScheme="teal"
                  onClick={(e) => registerUser(email, password, e)}
                >
                  Inregistreaza-te
                </Button>
              </form>
            </FormControl>
          </Container>
        </Center>
      </Layout>
    );
  }

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  )
}
