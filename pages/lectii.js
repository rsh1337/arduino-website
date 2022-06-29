import useSWR from "swr";
import Layout from "../components/layouts";
import { fetcher } from "../lib/fetcher";
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
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function Content() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { data, error } = useSWR("/api/lectii/lectii", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return (
      <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
        <Center>
          <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={3}>
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
            <Skeleton height="20rem" width="24rem" borderRadius="lg" />
          </SimpleGrid>
        </Center>
      </Container>
    );
  }
  return (
    <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
      <Center>
        <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={3}>
          {data.lectii.map((lectie) => (
            <Box key={lectie._id} borderWidth={1} borderRadius="lg" maxW="sm" overflow="hidden">
              <Image src={lectie.imagine} alt={lectie.nume} />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {lectie.nume}
                </Box>

                <Center>
                  {(() => {
                    if (lectie.link) {
                      return (
                        <NextLink href={lectie.link}>
                          <Button colorScheme="blue" size="sm" mt={4}>
                            Deschide Pagina
                          </Button>
                        </NextLink>
                      );
                    }
                  })()}
                  {(() => {
                    if (lectie.linkteste) {
                      return (
                        <NextLink href={`lectii/${lectie._id}`}>
                          <Button colorScheme="blue" size="sm" mt={4}>
                            Deschide Pagina
                          </Button>
                        </NextLink>
                      );
                    }
                  })()}
                </Center>
              </Box>
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
