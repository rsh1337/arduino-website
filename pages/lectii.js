import {
    Box,
    Center,
    Container,
    CircularProgress,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import useSWR from "swr";
  import Card from "../components/Card";
  import Layout from "../components/layouts";
  import { fetcher } from "../lib/fetcher";
  
  function Content() {
    const { data, error } = useSWR("/api/lectii", fetcher);
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
          {data.lectii.map((lectie) => (
            <Box key={lectie._id}>
              <Card
                imagine={lectie.imagine}
                nume={lectie.nume}
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
  