import { Box, Center, Container, Input, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";
import Card from "../components/Card";
import Layout from "../components/layouts";
import { fetcher } from "../lib/fetcher";

function Content() {
  const [search, setSearch] = useState("");
  const { data, error } = useSWR("/api/senzori/senzori", fetcher);
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
      <Container maxW="container.sm" mb={10}>
      <Input type="text" placeholder="Cauta..." onChange={(event) => {
        setSearch(event.target.value)
      }}/>
      </Container>
      <Center>
        <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={3}>
          {data.senzori.filter((val)=>{
            if (search == "") {
              return val 
            } else if (val.nume.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map((val, key)=>{
            return(
              <Box key={key}>
              <Card
                imagine={val.imagine1}
                nume={val.nume}
                descriere={val.descrieremini}
                hlink={`senzori/${val._id}`}
              />
            </Box>
            )
          })}
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