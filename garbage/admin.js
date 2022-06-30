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
  return (
    <Layout title="Arduino :: Dashboard">
      <Center h="60%">
        <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
          <FormControl>
            <form action="api/users/register" method="post">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="name" name="name"/>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" name="email"/>
            <FormLabel htmlFor="password" mt={10}>Password</FormLabel>
            <Input id="password" type="password" name="password"/>
            <FormHelperText>Parolele sunt 100% criptate.</FormHelperText>
            <Button
            mt={6}
            colorScheme='teal'
            type='submit'
            >
            Conecteaza-te
          </Button>
          </form>
          </FormControl>
        </Container>
      </Center>
    </Layout>
  );
}
