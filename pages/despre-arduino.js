import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/layouts";
import NextLink from "next/link";

function Content() {
  return (
    <Box>
      <Accordion allowToggle display={{ base: "block", md: "none" }}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              Meniu
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Container>
              <Box mb={2}>
                <NextLink href="#">
                  <Link as="b">Ce este arduino?</Link>
                </NextLink>
              </Box>
              <Box mb={2}>
                <NextLink href="#">
                  <Link as="b">Componentele principale</Link>
                </NextLink>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Conectare USB</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Alimentare externa</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Pini de intrare analog</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Pini de intrare/iesire digitala</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Buton de reset</Link>
                  </NextLink>
                </Box>
              </Container>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Container maxW={{ base: "container.xl" }} pt={70}>
        <Flex>
          <Box flex="1" display={{ base: "none", md: "flex" }}>
            <Container>
              <Box mb={2}>
                <NextLink href="#">
                  <Link as="b">Ce este arduino?</Link>
                </NextLink>
              </Box>
              <Box mb={2}>
                <Text as="b">Componentele principale</Text>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Conectare USB</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Alimentare externa</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Pini de intrare analog</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Pini de intrare/iesire digitala</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#">
                    <Link>Buton de reset</Link>
                  </NextLink>
                </Box>
              </Container>
            </Container>
          </Box>

          <Divider
            height="321rem"
            orientation="vertical"
            display={{ base: "none", md: "flex" }}
            ml={2}
            mr={2}
          />

          <Box flex="3" mb={5}>
            <VStack align="left" spacing={5}>
              <Heading>Ce este Arduino?</Heading>
              <Text fontSize="lg">
                Arduino este o platforma open source de creare a electronicilor,
                care se bazeaza pe hardware si software gratuit, flexibil si
                usor de utilizat pentru dezvoltatori. Aceasta va permite sa
                creati diferite proiecte cu o singura placa.
              </Text>
              <Box>
                <Image src="arduino.png" alt="Arduino" />
              </Box>

              <Heading>Conectare USB</Heading>
              <Text fontSize="lg">
                Acesta este un USB port care este folosit pentru a incarca un
                program de pe aplicatia Arduino IDE in placa Arduino. De
                asemenea placa poate fi alimentata prin acest port.
              </Text>
              <Box>
                <Image src="conectare_usb.jpeg" alt="Conectare USB" />
              </Box>

              <Heading>Alimentarea externa</Heading>
              <Text fontSize="lg">
                Placa poate fi alimentata la priza sau cu o baterie. Sursa de
                curent poate fi conectata prin intrarea de 2.1mm aflata pe
                placa.
              </Text>
              <Box>
                <Image src="alimentare_externa.jpeg" alt="Alimentare Externa" />
              </Box>

              <Heading>Pini de intrare analog</Heading>
              <Text fontSize="lg">
                Placa Arduino are 6 pini de iesire analog, numerotate de la "A0"
                la "A5". Cu acesti pini putem citi semnalul de la un senzor
                analog ca de exemplu senzorul de temperatura si il putem
                converti intr-o valoare digitala pentru a putea fi citit de
                sistem.
              </Text>
              <Box>
                <Image src="pini_in_analog.jpeg" alt="Intrare analog" />
              </Box>

              <Heading>Pini de intrare/iesire digitala</Heading>
              <Text fontSize="lg">
                Acesti pini sunt numerotati de la 2 la 13 si pot fi folositi
                pentru intrare cat si pentru iesire. Cand sunt folsiti pentru
                iesire, ei au rolul de a fi o sursa de curent pentru componenta
                conectata la ei. Cand sunt folositi pentru intrare, ei au rolul
                de a citi semnalul componentei la care este conectat.
              </Text>
              <Box>
                <Image
                  src="pini_io_digitala.jpeg"
                  alt="Intrare/iesire digitala"
                />
              </Box>

              <Heading>Butonul de reset</Heading>
              <Text fontSize="lg">
                Cand acesta este apasat, ruleaza programul iara de la inceput.
                Acesta este folositor cand codul pe care il avem nu se repeta.
              </Text>
              <Box>
                <Image
                  src="buton_reset.jpeg"
                  alt="Buton Reset"
                />
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default function DespreArduino() {
  return (
    <Layout title="Despre">
      <Content />
    </Layout>
  );
}
