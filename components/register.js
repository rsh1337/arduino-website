import { Button, Center, Container, FormControl, FormHelperText, FormLabel, Input, useToast } from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";

export default function Registerfunction() {
    const toast = useToast();
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
          title: "Eroare",
          description: data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      if (data.msgsg == "success") {
        Router.push("/admin");
        return (
          toast({
            title: "Cont Creat.",
            description: "Contul tau a fost creat cu succes.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        );
      }
    };
  return (
    <Center>
      <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
        <FormControl>
          <FormLabel htmlFor="nume" mt={10}>
            Nume
          </FormLabel>
          <Input
            id="nume"
            type="nume"
            name="nume"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
          <FormLabel htmlFor="email" mt={10}>
            Adresa Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel htmlFor="invitation" mt={10}>
            Cod De Invitatie
          </FormLabel>
          <Input
            id="invitation"
            type="invitation"
            name="invitation"
            value={invitation}
            onChange={(e) => setInvitation(e.target.value)}
          />
          <FormHelperText>
            Codul de invitatie este generat de catre un admin.
          </FormHelperText>
          <FormLabel htmlFor="password" mt={10}>
            Parola
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
            colorScheme="green"
            onClick={(e) => registerUser(email, password, nume, invitation, e)}
          >
            Inregistreaza-te
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}
