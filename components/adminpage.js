import {
  Button,
  Center,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

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
  );
}
