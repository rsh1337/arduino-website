import {
  Box,
  Center,
  Container,
  CircularProgress,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Card from "../components/Card";
import Layout from "../components/layouts";
import { fetcher } from "../lib/fetcher";

function Content() {
  const { data, error } = useSWR("/api/proiecte", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return (
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
        <Center>
          <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={3}>
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
            <Skeleton height='20rem' width="24rem" />
          </SimpleGrid>
        </Center>
      </Container>
    );
  }
  return (
    <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
      <Center>
        <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={3}>
          {data.proiecte.map((proiect) => (
            <Box key={proiect._id}>
              <Card
                imagine={proiect.imagine1}
                nume={proiect.nume}
                descriere={proiect.descrieremini}
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
    <Layout title="Arduino :: Proiecte">
      <Content />
    </Layout>
  );
}
