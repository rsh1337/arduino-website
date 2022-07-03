import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CreateProiecte() {
  const toast = useToast();
  // Data
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [descrieremini, setDescrieremini] = useState("");
  const [utilizare, setUtilizare] = useState("");
  const [imagini, setImagini] = useState("");
  const [video, setVideo] = useState("");
  const [cod_folosit, setCod_folosit] = useState("");
  //
  const createProiect = async (
    nume,
    descriere,
    descrieremini,
    utilizare,
    imagini,
    video,
    cod_folosit,
    e
  ) => {
    e.preventDefault();
    const res = await fetch("/api/proiecte/createproiecte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nume,
        descriere,
        descrieremini,
        utilizare,
        imagini,
        video,
        cod_folosit
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
    if (data.messagee == "success") {
      return (
        toast({
          title: "Proiect Creat.",
          description: "Proiectul a fost creat cu succes!",
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
          <FormLabel htmlFor="descriere" mt={10}>
            descriere
          </FormLabel>
          <Textarea
            id="descriere"
            type="descriere"
            name="descriere"
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
          <FormLabel htmlFor="descrieremini" mt={10}>
            descrieremini
          </FormLabel>
          <Textarea
            id="descrieremini"
            type="descrieremini"
            name="descrieremini"
            value={descrieremini}
            onChange={(e) => setDescrieremini(e.target.value)}
          />
          <FormLabel htmlFor="utilizare" mt={10}>
            utilizare
          </FormLabel>
          <Textarea
            id="utilizare"
            type="utilizare"
            name="utilizare"
            value={utilizare}
            onChange={(e) => setUtilizare(e.target.value)}
          />
          <FormLabel htmlFor="imagini" mt={10}>
            imagini
          </FormLabel>
          <Textarea
            id="imagini"
            type="imagini"
            name="imagini"
            value={imagini}
            onChange={(e) => setImagini(e.target.value.split(","))}
          />
          <FormLabel htmlFor="video" mt={10}>
            video
          </FormLabel>
          <Input
            id="video"
            type="video"
            name="video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
          <FormLabel htmlFor="cod_folosit" mt={10}>
            Cod Folosit
          </FormLabel>
          <Textarea
            id="cod_folosit"
            type="cod_folosit"
            name="cod_folosit"
            value={cod_folosit}
            onChange={(e) => setCod_folosit(e.target.value)}
          />
          <Button
            mt={6}
            colorScheme="blue"
            onClick={(e) =>
              createProiect(
                nume,
                descriere,
                descrieremini,
                utilizare,
                imagini,
                video,
                cod_folosit,
                e
              )
            }
          >
            Creaza Proiect
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}
