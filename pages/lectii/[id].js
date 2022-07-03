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
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import React, { useState } from "react";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Lectii from "../../models/Lectii";

function EditModal({ numeLectie, imagineLectie, linkLectie }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  // Data
  const [nume, setNume] = useState( numeLectie );
  const [imagine, setImagine] = useState( imagineLectie );
  const [link, setLink] = useState( linkLectie );
  //
  const editLectie = async (nume, imagine, link, e) => {
    const lectieID = Router.query.id;
    e.preventDefault();
    const res = await fetch(`/api/lectii/${lectieID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nume,
        imagine,
        link,
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
      return toast({
        title: "Lectie Editata.",
        description: "Lectia a fost editata cu succes!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue" mt={10}>
        Editeaza Lectia
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editeaza Lectia</ModalHeader>
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
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={(e) => editLectie(nume, imagine, link, e)}
            >
              Editeaza Lectia
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function DeleteAlert({ lectieNume }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDelete = async () => {
    const lectieID = Router.query.id;

    try {
      await fetch(`/api/lectii/${lectieID}`, {
        method: "Delete",
      });
      Router.push("/lectii");
    } catch (error) {
      console.log("Failed to delete the lectie.");
    }
  };
  return (
    <Box>
      <Button colorScheme="red" onClick={onOpen} mt={10}>
        Delete Lectie
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Lectie
            </AlertDialogHeader>

            <AlertDialogBody>
              Esti sigur ca vrei sa stergi lectia {lectieNume}?
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

export default function Index({ lectie }) {
  const { status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Lectii">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Heading mb={10}>{lectie.nume}</Heading>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <iframe
                src={lectie.link}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </AspectRatio>
          </Box>
        </Container>
      </Layout>
    );
  }
  if (status === "authenticated") {
    return (
      <Layout title="Arduino :: Lectii">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
          <Heading mb={10}>{lectie.nume}</Heading>
          <Box>
            <AspectRatio ratio={16 / 9} maxW="100%">
              <iframe
                src={lectie.link}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </AspectRatio>
          </Box>
          <HStack>
            <DeleteAlert lectieNume={lectie.nume} />
            <EditModal numeLectie={lectie.nume} imagineLectie={lectie.imagine} linkLectie={lectie.link}/>
          </HStack>
        </Container>
      </Layout>
    );
  }
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const lectie = await Lectii.findById(params.id).lean();
  lectie._id = lectie._id.toString();

  return { props: { lectie } };
}
