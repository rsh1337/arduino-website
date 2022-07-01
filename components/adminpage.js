import {
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
import { signOut } from "next-auth/react";
import { useState } from "react";

function CreateProiecte() {
    const toast = useToast();
    // Data
    const [nume, setNume] = useState("");
    const [descriere, setDescriere] = useState("");
    const [descrieremini, setDescrieremini] = useState("");
    const [utilizare, setUtilizare] = useState("");
    const [imagini, setImagini] = useState("");
    const [imagini2, setImagini2] = useState("");
    // 

    const [message, setMessage] = useState(null);
    const registerUser = async (nume, descriere, descrieremini, utilizare, imagini, e) => {
      e.preventDefault();
      const res = await fetch("/api/proiecte/createproiecte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nume, descriere, descrieremini, utilizare, imagini }),
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
        return (
          Router.push("/admin"),
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
          <FormLabel htmlFor="imagini" mt={10}>
          imagini
          </FormLabel>
          <Input
            id="imagini"
            type="imagini"
            name="imagini"
            value={imagini}
            onChange={(e) => setImagini(e.target.value.split(','))}
          />

          <Button
            mt={6}
            colorScheme="teal"
            onClick={(e) => registerUser(nume, descriere, descrieremini, utilizare, imagini, e)}
          >
            Inregistreaza-te
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}

export default function Adminpage() {
  return (
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
            <TabPanel></TabPanel>
            <TabPanel>
              <CreateProiecte/>
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
  );
}
