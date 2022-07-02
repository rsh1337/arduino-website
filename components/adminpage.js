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
import CreateInvitatie from "./create_invitatie";
import CreateLectie from "./create_lectie";
import CreateProiecte from "./create_proiecte";
import CreateSenzor from "./create_senzor";

export default function Adminpage() {
  return (
      <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
        <Center mb={10}>
          <Heading>Admin Page</Heading>
        </Center>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Creaza senzor</Tab>
            <Tab>Creaza Proiect</Tab>
            <Tab>Creaza Lectie</Tab>
            <Tab>Creaza Invitatie</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CreateSenzor/>
            </TabPanel>
            <TabPanel>
              <CreateProiecte/>
            </TabPanel>
            <TabPanel>
              <CreateLectie />
            </TabPanel>
            <TabPanel>
              <CreateInvitatie />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Center>
          <Button mt={6} colorScheme="teal" onClick={() => signOut()}>
            Deconecteaza-te
          </Button>
        </Center>
      </Container>
  );
}
