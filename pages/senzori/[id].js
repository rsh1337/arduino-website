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
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Senzori from "../../models/Senzori";

export default function Index({ senzor }) {
  const { status } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
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
                return <Image src={senzor.imagine1} />;
              }
            })()}

            {(() => {
              if (senzor.video) {
                return (
                  <Carousel showThumbs={false}>
                    <Box>
                      <Image src={senzor.imagine1} />
                    </Box>
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={senzor.video}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Cod Utilizat</Heading>
            <Code id="foo" whiteSpace="pre-line">
              {senzor.utilizare}
            </Code>
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
                return <Image src={senzor.imagine1} />;
              }
            })()}

            {(() => {
              if (senzor.video) {
                return (
                  <Carousel showThumbs={false}>
                    <Box>
                      <Image src={senzor.imagine1} />
                    </Box>
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <iframe
                          width="100%"
                          height="100%"
                          muted={true}
                          src={senzor.video}
                        />
                      </AspectRatio>
                    </Box>
                  </Carousel>
                );
              }
            })()}
            <Heading>Cod Utilizat</Heading>
            <Code id="foo" whiteSpace="pre-line">
              {senzor.utilizare}
            </Code>
          </Stack>
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
                  Esti sigur ca vrei sa stergi senzorul '{senzor.nume}'?
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

  const senzor = await Senzori.findById(params.id).lean();
  senzor._id = senzor._id.toString();

  return { props: { senzor } };
}
