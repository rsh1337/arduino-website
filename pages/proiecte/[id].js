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
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Proiecte from "../../models/Proiecte";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSession } from "next-auth/react";
import React from "react";
import Router from "next/router";

export default function Index({ proiect }) {
  const { status } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
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
                        <Image src={data} alt={proiect.nume}/>
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
                        <Image src={data} alt={proiect.nume}/>
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
                  <Code whiteSpace="pre-line">{proiect.cod_folosit}</Code>
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
                        <Image src={data} alt={proiect.nume}/>
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
                        <Image src={data} alt={proiect.nume}/>
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
                  <Code whiteSpace="pre-line">{proiect.cod_folosit}</Code>
                </>
              );
            }
          })()}
        </Stack>
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
                  Esti sigur ca vrei sa stergi proiectul {proiect.nume}?
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

  const proiect = await Proiecte.findById(params.id).lean();
  proiect._id = proiect._id.toString();

  return { props: { proiect } };
}
