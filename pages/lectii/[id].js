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
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import React from "react";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Lectii from "../../models/Lectii";

export default function Index({ lectie }) {
  const { status } = useSession();
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
                  Esti sigur ca vrei sa stergi lectia '{lectie.nume}'?
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
