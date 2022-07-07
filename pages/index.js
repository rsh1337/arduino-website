import {
  Box,
  Container,
  Heading,
  Center,
  HStack,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/layout";
import { Button, LightMode } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import Layout from "../components/layouts";

function Content() {
  return (
    <Box>
      <Container>
        <Center pt={200}>
          <HStack>
            <Heading size={{ base: "md", sm: "lg", md: "xl", lg:"2xl" }} color="gray.600">
              INVATA ARDUINO
            </Heading>
            <Heading size={{ base: "md", sm: "lg", md: "xl", lg:"2xl" }} color="blue.500">
              USOR
            </Heading>
          </HStack>
        </Center>
        <Center>
          <Heading size={{ base: "md", sm: "lg", md: "xl", lg:"2xl" }} color="gray.600">
            IMPREUNA CU NOI
          </Heading>
        </Center>
        <Center mt={7}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            et tortor at risus viverra adipiscing at in. Scelerisque mauris
            pellentesque pulvinar pellentesque habitant. Ac turpis egestas sed
            tempus urna et. Ultricies mi eget mauris pharetra et ultrices neque
            ornare aenean.
          </Text>
        </Center>
        <NextLink href="/documentatie" passHref>
          <Center mt={10}>
            <Button colorScheme="green">Incepe acum</Button>
          </Center>
        </NextLink>
      </Container>
      <Container maxW={{ base: "container.xl" }} mt={170} mb={5}>
        <Center>
          <Stack direction={{ base: "column", lg: "row-reverse" }} spacing={10}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Heading size="md">DEZVOLTI CREATIVITATEA</Heading>
              <Center mt={6}>
                <Image src="https://blog.nexuria.ro/wp-content/uploads/2019/07/cum-iti-dezvolti-creativitatea.jpg" width={1920} height={1080}/>
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean et tortor at risus viverra adipiscing at in.
                  Scelerisque mauris pellentesque pulvinar pellentesque
                  habitant. Ac turpis egestas sed tempus urna et. Ultricies mi
                  eget mauris pharetra et ultrices neque ornare aenean.
                </Text> */}
              </Center>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Heading size="md">INVETI SA FACI ROBOTI</Heading>
              <Center mt={6}>
                <Image src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/Robot_Blog_Header_1500x750.png" width={1920} height={1080} />
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean et tortor at risus viverra adipiscing at in.
                  Scelerisque mauris pellentesque pulvinar pellentesque
                  habitant. Ac turpis egestas sed tempus urna et. Ultricies mi
                  eget mauris pharetra et ultrices neque ornare aenean.
                </Text> */}
              </Center>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Heading size="md">INVETI PROGRAMARE</Heading>
              <Center mt={6}>
                <Image src="https://makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg" width={1920} height={1080}/>
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean et tortor at risus viverra adipiscing at in.
                  Scelerisque mauris pellentesque pulvinar pellentesque
                  habitant. Ac turpis egestas sed tempus urna et. Ultricies mi
                  eget mauris pharetra et ultrices neque ornare aenean.
                </Text> */}
              </Center>
            </Box>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
      <Layout title="Arduino :: Home">
        <Content />
      </Layout>
  );
}
