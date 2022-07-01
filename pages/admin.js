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
  const [nume, setNume] = useState("");
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      return toast({
        title: "Error",
        description: res.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    // return Router.push("/");
  };

  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Dashboard">
        <Center >
          <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
            <FormControl>
              <form onSubmit={handleSubmit}>
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
                <Button mt={6} colorScheme="teal" type="submit">
                  Conecteaza-te
                </Button>
              </form>
            </FormControl>
          </Container>
        </Center>
      </Layout>
    );
  }

  if (status === "authenticated") {
    return (
      <Layout title="Arduino :: Admin">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Center mb={10}>
            <Heading>Admin Page</Heading>
          </Center>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Create senzor</Tab>
              <Tab>Create Proiect</Tab>
              <Tab>Create Lectie</Tab>
              <Tab>Create Notification</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Center>
            <Button mt={6} colorScheme="teal" onClick={() => signOut()}>
              SignOut
            </Button>
          </Center>
        </Container>
      </Layout>
    );
  }
}
