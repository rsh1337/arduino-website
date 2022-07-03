import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AspectRatio,
  Box,
  Button,
  Code,
  Collapse,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Proiecte from "../../models/Proiecte";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Router from "next/router";

function EditProiect({
  numeProiect,
  descriereProiect,
  descriereminiProiect,
  utilizareProiect,
  imaginiProiect,
  videoProiect,
  cod_folositProiect,
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Data
  const [nume, setNume] = useState(numeProiect);
  const [descriere, setDescriere] = useState(descriereProiect);
  const [descrieremini, setDescrieremini] = useState(descriereminiProiect);
  const [utilizare, setUtilizare] = useState(utilizareProiect);
  const [imagini, setImagini] = useState(imaginiProiect);
  const [video, setVideo] = useState(videoProiect);
  const [cod_folosit, setCod_folosit] = useState(cod_folositProiect);
  //
  const editProiect = async (
    nume,
    descriere,
    descrieremini,
    utilizare,
    imagini,
    video,
    cod_folosit,
    e
  ) => {
    const proiectID = Router.query.id;
    e.preventDefault();
    const res = await fetch(`/api/proiecte/${proiectID}`, {
      method: "PUT",
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
        cod_folosit,
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
      Router.push(`/proiecte/${proiectID}`);
      return toast({
        title: "Proiect Editat.",
        description: "Proiectul a fost editat cu succes!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue" mt={10}>
        Editeaza Proiectul
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editeaza Proiectul</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto">
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
              <Input
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
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={(e) =>
                editProiect(
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
              Editeaza Proiectul
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function DeleteProiect({ numeProiect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDelete = async () => {
    const proiectID = Router.query.id;

    try {
      await fetch(`/api/proiecte/${proiectID}`, {
        method: "Delete",
      });
      Router.push("/proiecte");
    } catch (error) {
      console.log("Failed to delete the proiect.");
    }
  };
  return (
    <Box>
      <Button colorScheme="red" onClick={onOpen} mt={10}>
        Delete Proiect
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Proiect
            </AlertDialogHeader>

            <AlertDialogBody>
              Esti sigur ca vrei sa stergi proiectul {numeProiect}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default function Index({ proiect }) {
  const { status } = useSession();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Proiecte">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Stack direction="column" spacing={10}>
            <Heading>Descriere</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {proiect.descriere}
            </Text>

            {(() => {
              if (!proiect.video) {
                return (
                  <Carousel showThumbs={false}>
                    {proiect.imagini.map((data, index) => (
                      <Box key={index}>
                        <AspectRatio ratio={16 / 9} maxW="100%">
                          <Image src={data} alt={proiect.nume} />
                        </AspectRatio>
                      </Box>
                    ))}
                  </Carousel>
                );
              }
            })()}

            {(() => {
              if (proiect.video) {
                return (
                  <Carousel>
                    {proiect.imagini.map((data, index) => (
                      <Box key={index}>
                        <AspectRatio ratio={16 / 9} maxW="100%">
                          <Image src={data} alt={proiect.nume} />
                        </AspectRatio>
                      </Box>
                    ))}
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={proiect.video}
                          alt={proiect.nume}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Utilizare</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {proiect.utilizare}
            </Text>
            {(() => {
              if (proiect.cod_folosit) {
                return (
                  <>
                    <Heading>Cod Utilizat</Heading>
                    <Code whiteSpace="pre-line">
                      <Collapse startingHeight={100} in={show}>
                        {proiect.cod_folosit}
                      </Collapse>
                    </Code>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Afiseaza Mai {show ? "Putin" : "Mult"}
                    </Button>
                  </>
                );
              }
            })()}
          </Stack>
        </Container>
      </Layout>
    );
  }

  if (status === "authenticated") {
    return (
      <Layout title="Arduino :: Proiecte">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Stack direction="column" spacing={10}>
            <Heading>Descriere</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {proiect.descriere}
            </Text>

            {(() => {
              if (!proiect.video) {
                return (
                  <Carousel showThumbs={false}>
                    {proiect.imagini.map((data, index) => (
                      <Box key={index}>
                        <AspectRatio ratio={16 / 9} maxW="100%">
                          <Image src={data} alt={proiect.nume} />
                        </AspectRatio>
                      </Box>
                    ))}
                  </Carousel>
                );
              }
            })()}

            {(() => {
              if (proiect.video) {
                return (
                  <Carousel>
                    {proiect.imagini.map((data, index) => (
                      <Box key={index}>
                        <AspectRatio ratio={16 / 9} maxW="100%">
                          <Image src={data} alt={proiect.nume} />
                        </AspectRatio>
                      </Box>
                    ))}
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={proiect.video}
                          alt={proiect.nume}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Utilizare</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {proiect.utilizare}
            </Text>
            {(() => {
              if (proiect.cod_folosit) {
                return (
                  <>
                    <Heading>Cod Utilizat</Heading>
                    <Code whiteSpace="pre-line">
                      <Collapse startingHeight={100} in={show}>
                        {proiect.cod_folosit}
                      </Collapse>
                    </Code>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Afiseaza Mai {show ? "Putin" : "Mult"}
                    </Button>
                  </>
                );
              }
            })()}
          </Stack>
          <HStack>
            <DeleteProiect numeProiect={proiect.nume} />
            <EditProiect
              numeProiect={proiect.nume}
              descriereProiect={proiect.descriere}
              descriereminiProiect={proiect.descrieremini}
              utilizareProiect={proiect.utilizare}
              imaginiProiect={proiect.imagini}
              videoProiect={proiect.video}
              cod_folositProiect={proiect.cod_folosit}
            />
          </HStack>
        </Container>
      </Layout>
    );
  }
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const proiect = await Proiecte.findById(params.id).lean();
  proiect._id = proiect._id.toString();

  return { props: { proiect } };
}
