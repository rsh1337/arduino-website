import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Container,
  CircularProgress,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Layout from "../components/layouts";
import { fetcher } from "../lib/fetcher";

function Card({ id, imagine, nume, descriere }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <Box borderWidth={1} borderRadius="lg" maxW="sm" overflow="hidden" key={id}>
      <Image src={imagine} alt={nume} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {nume}
        </Box>
        <Center>
          <ButtonGroup variant="outline" spacing="6">
            {/* Mobile */}
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              motionPreset="slideInBottom"
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {nume}
                  </AlertDialogHeader>

                  <AlertDialogBody>{descriere}</AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Inchide
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>

            {/* Desktop */}
            <Box display={{ base: "none", md: "flex" }}>
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="green" size="sm" mt={4}>
                    Mini Descriere
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>{nume}</PopoverHeader>
                  <PopoverBody>{descriere}</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Button
              colorScheme="green"
              size="sm"
              mt={4}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
            >
              Mini Descriere
            </Button>

            <Button colorScheme="blue" size="sm" mt={4}>
              Deschide Pagina
            </Button>
          </ButtonGroup>
        </Center>
      </Box>
    </Box>
  );
}

function Content() {
  const { data, error } = useSWR("/api/senzori", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return (
      <Center h="full">
        <CircularProgress isIndeterminate />
      </Center>
    );
  }
  return (
    <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
      <Center>
      <SimpleGrid columns={{base: "1", md: "2", lg: "3"}} spacing={3}>
        {data.senzori.map((senzor) => (
          <Box>
            <Card
              id={senzor.id}
              imagine={senzor.imagine1}
              nume={senzor.nume}
              descriere={senzor.descrieremini}
            />
          </Box>
        ))}
      </SimpleGrid>
      </Center>
    </Container>
  );
}

export default function Index() {
  return (
    <Layout title="Arduino :: Senzori">
      <Content />
    </Layout>
  );
}
