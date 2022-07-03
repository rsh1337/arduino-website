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
import { useSession } from "next-auth/react";
import Router from "next/router";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Senzori from "../../models/Senzori";

function EditSenzor({
  numeSenzor,
  descriereSenzor,
  descriereminiSenzor,
  utilizareSenzor,
  videoSenzor,
  imagine1Senzor,
  imagine2Senzor,
  imagine3Senzor,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  // Data
  const [nume, setNume] = useState(numeSenzor);
  const [descriere, setDescriere] = useState(descriereSenzor);
  const [descrieremini, setDescrieremini] = useState(descriereminiSenzor);
  const [utilizare, setUtilizare] = useState(utilizareSenzor);
  const [video, setVideo] = useState(videoSenzor);
  const [imagine1, setImagine1] = useState(imagine1Senzor);
  const [imagine2, setImagine2] = useState(imagine2Senzor);
  const [imagine3, setImagine3] = useState(imagine3Senzor);
  //
  const editSenzor = async (
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
    const senzorID = Router.query.id;
    const res = await fetch(`/api/senzori/${senzorID}`, {
      method: "PUT",
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
    if (data.messagee == "success") {
      Router.push(`/senzori/${senzorID}`);
      return toast({
        title: "Senzor Editat.",
        description: "Senzorul a fost editat cu succes!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue" mt={10}>
        Editeaza Senzorul
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editeaza Senzorul</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={(e) =>
                editSenzor(
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
              Editeaza Senzorul
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function DeleteSenzor({ numeSenzor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDelete = async () => {
    const senzorID = Router.query.id;

    try {
      await fetch(`/api/senzori/${senzorID}`, {
        method: "Delete",
      });
      Router.push("/senzori");
    } catch (error) {
      console.log("Failed to delete the senzor.");
    }
  };
  return (
    <Box>
      <Button colorScheme="red" onClick={onOpen} mt={10}>
        Delete Senzor
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Senzor
            </AlertDialogHeader>

            <AlertDialogBody>
              Esti sigur ca vrei sa stergi senzorul {numeSenzor}?
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

export default function Index({ senzor }) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Senzori">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Stack direction="column" spacing={10}>
            <Heading>Descriere</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {senzor.descriere}
            </Text>

            {(() => {
              if (!senzor.video) {
                return <Image src={senzor.imagine1} alt={senzor.nume} />;
              }
            })()}

            {(() => {
              if (senzor.video) {
                return (
                  <Carousel showThumbs={false}>
                    <Box>
                      <Image src={senzor.imagine1} alt={senzor.nume} />
                    </Box>
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={senzor.video}
                          alt={senzor.nume}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Cod Utilizat</Heading>
            <Code whiteSpace="pre-line">
              <Collapse startingHeight={100} in={show}>
                {senzor.utilizare}
              </Collapse>
            </Code>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Afiseaza Mai {show ? "Putin" : "Mult"}
            </Button>
          </Stack>
        </Container>
      </Layout>
    );
  }
  if (status === "authenticated") {
    return (
      <Layout title="Arduino :: Senzori">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Stack direction="column" spacing={10}>
            <Heading>Descriere</Heading>
            <Text fontSize="xl" whiteSpace="pre-line">
              {senzor.descriere}
            </Text>

            {(() => {
              if (!senzor.video) {
                return <Image src={senzor.imagine1} alt={senzor.nume} />;
              }
            })()}

            {(() => {
              if (senzor.video) {
                return (
                  <Carousel showThumbs={false}>
                    <Box>
                      <Image src={senzor.imagine1} alt={senzor.nume} />
                    </Box>
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={senzor.video}
                          alt={senzor.nume}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Cod Utilizat</Heading>
            <Code whiteSpace="pre-line">
              <Collapse startingHeight={100} in={show}>
                {senzor.utilizare}
              </Collapse>
            </Code>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Afiseaza Mai {show ? "Putin" : "Mult"}
            </Button>
          </Stack>
          <HStack>
            <DeleteSenzor numeSenzor={senzor.nume} />
            <EditSenzor
              numeSenzor={senzor.nume}
              descriereSenzor={senzor.descriere}
              descriereminiSenzor={senzor.descrieremini}
              utilizareSenzor={senzor.utilizare}
              videoSenzor={senzor.video}
              imagine1Senzor={senzor.imagine1}
              imagine2Senzor={senzor.imagine2}
              imagine3Senzor={senzor.imagine3}
            />
          </HStack>
        </Container>
      </Layout>
    );
  }
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const senzor = await Senzori.findById(params.id).lean();
  senzor._id = senzor._id.toString();

  return { props: { senzor } };
}
