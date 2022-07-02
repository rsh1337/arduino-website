import {
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Input,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  export default function CreateLectie() {
    const toast = useToast();
    // Data
    const [nume, setNume] = useState("");
    const [imagine, setImagine] = useState("");
    const [link, setLink] = useState("");
    //
    const createLectie = async (
      nume,
      imagine,
      link,
      e
    ) => {
      e.preventDefault();
      const res = await fetch("/api/lectii/createlectie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nume,
            imagine,
            link
        }),
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
      if (data.message == "success") {
        return (
          toast({
            title: "Lectie Creata.",
            description: "Lectia a fost creata cu succes!",
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
            <FormLabel htmlFor="imagine" mt={10}>
              Imagine
            </FormLabel>
            <Input
              id="imagine"
              type="imagine"
              name="imagine"
              value={imagine}
              onChange={(e) => setImagine(e.target.value)}
            />
            <FormLabel htmlFor="link" mt={10}>
              Link
            </FormLabel>
            <Input
              id="link"
              type="link"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Button
              mt={6}
              colorScheme="blue"
              onClick={(e) =>
                createLectie(
                    nume,
                    imagine,
                    link,
                    e
                )
              }
            >
              Creaza Lectie
            </Button>
          </FormControl>
        </Container>
      </Center>
    );
  }
  