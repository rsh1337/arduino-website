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

export default function CreateSenzor() {
  const toast = useToast();
  // Data
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [descrieremini, setDescrieremini] = useState("");
  const [utilizare, setUtilizare] = useState("");
  const [video, setVideo] = useState("");
  const [imagine1, setImagine1] = useState("");
  const [imagine2, setImagine2] = useState("");
  const [imagine3, setImagine3] = useState("");
  //
  const createSenzor = async (
    nume,
    descriere,
    descrieremini,
    utilizare,
    imagine1,
    video,
    imagine2,
    imagine3,
    e
  ) => {
    e.preventDefault();
    const res = await fetch("/api/senzori/createsenzor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nume,
        descriere,
        descrieremini,
        utilizare,
        imagine1,
        video,
        imagine2,
        imagine3,
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
      return toast({
        title: "Senzor Creat.",
        description: "Senzorul a fost creat cu succes!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
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
          <Input
            id="descriere"
            type="descriere"
            name="descriere"
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
          <FormLabel htmlFor="descrieremini" mt={10}>
            descrieremini
          </FormLabel>
          <Input
            id="descrieremini"
            type="descrieremini"
            name="descrieremini"
            value={descrieremini}
            onChange={(e) => setDescrieremini(e.target.value)}
          />
          <FormLabel htmlFor="utilizare" mt={10}>
            utilizare
          </FormLabel>
          <Input
            id="utilizare"
            type="utilizare"
            name="utilizare"
            value={utilizare}
            onChange={(e) => setUtilizare(e.target.value)}
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
          <FormLabel htmlFor="imagine1" mt={10}>
            imagine1
          </FormLabel>
          <Input
            id="imagine1"
            type="imagine1"
            name="imagine1"
            value={imagine1}
            onChange={(e) => setImagine1(e.target.value)}
          />
          <FormLabel htmlFor="imagine2" mt={10}>
            imagine2
          </FormLabel>
          <Input
            id="imagine2"
            type="imagine2"
            name="imagine2"
            value={imagine2}
            onChange={(e) => setImagine2(e.target.value)}
          />
          <FormLabel htmlFor="imagine3" mt={10}>
            imagine3
          </FormLabel>
          <Input
            id="imagine3"
            type="imagine3"
            name="imagine3"
            value={imagine3}
            onChange={(e) => setImagine3(e.target.value)}
          />
          <Button
            mt={6}
            colorScheme="blue"
            onClick={(e) =>
              createSenzor(
                nume,
                descriere,
                descrieremini,
                utilizare,
                imagine1,
                video,
                imagine2,
                imagine3,
                e
              )
            }
          >
            Creaza Senzor
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}
