import { Button, Center, Container, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Signinfuncton(){
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      let options = { redirect: false, email, password, name };
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
    };
    return (
          <Center >
            <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
              <FormControl>
                <form onSubmit={handleSubmit}>
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
                  <Button mt={6} colorScheme="green" type="submit">
                    Conecteaza-te
                  </Button>
                </form>
              </FormControl>
            </Container>
          </Center>
      );
}