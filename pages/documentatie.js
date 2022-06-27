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
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/layouts";
import NextLink from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Content() {
  return (
    <Box id="ce-este-arduino">
      <Accordion
        allowToggle
        display={{ base: "block", lg: "none" }}
        position="fixed"
        width="100%"
        bg="white"
        top="65px"
        zIndex="dropdown"
      >
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
                <NextLink href="#ce-este-arduino">
                  <Link as="b">Ce este arduino?</Link>
                </NextLink>
              </Box>
              <Box mb={2}>
                <Text as="b">Componentele principale</Text>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#conectare-usb">
                    <Link>Conectare USB</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#alimentare-externa">
                    <Link>Alimentare externa</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#pini-de-intrare-analog">
                    <Link>Pini de intrare analog</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#pini-de-intrare-iesire-digitala">
                    <Link>Pini de intrare/iesire digitala</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#buton-de-reset">
                    <Link>Buton de reset</Link>
                  </NextLink>
                </Box>
              </Container>
              <Box mb={2} mt={2}>
                <Text as="b">Instalare</Text>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#instalare-arduino-ide">
                    <Link>Instalare Arduino IDE</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#instalare-driver-clona">
                    <Link>Instalare Driver</Link>
                  </NextLink>
                </Box>
              </Container>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Container maxW={{ base: "container.xl" }} pt={70}>
        <Flex>
          <Box flex="1" display={{ base: "none", lg: "flex" }} position="fixed">
            <Container>
              <Box mb={2}>
                <NextLink href="#ce-este-arduino">
                  <Link as="b">Ce este arduino?</Link>
                </NextLink>
              </Box>
              <Box mb={2}>
                <Text as="b">Componentele principale</Text>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#conectare-usb">
                    <Link>Conectare USB</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#alimentare-externa">
                    <Link>Alimentare externa</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#pini-de-intrare-analog">
                    <Link>Pini de intrare analog</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#pini-de-intrare-iesire-digitala">
                    <Link>Pini de intrare/iesire digitala</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#buton-de-reset">
                    <Link>Buton de reset</Link>
                  </NextLink>
                </Box>
              </Container>
              <Box mb={2} mt={2}>
                <Text as="b">Instalare</Text>
              </Box>
              <Container maxW="container.sm">
                <Box mb={1}>
                  <NextLink href="#instalare-arduino-ide">
                    <Link>Instalare Arduino IDE</Link>
                  </NextLink>
                </Box>
                <Box mb={1}>
                  <NextLink href="#instalare-driver-clona">
                    <Link>Instalare Driver</Link>
                  </NextLink>
                </Box>
              </Container>
            </Container>
          </Box>
        </Flex>

        <Flex>
          <Box flex="1" display={{ base: "none", lg: "flex" }}></Box>
          <Divider
            height="419rem"
            orientation="vertical"
            display={{ base: "none", lg: "flex" }}
            ml={2}
            mr={2}
            zIndex="hide"
          />
          <Box flex={{ base: "3", lg: "3" }} overflowY="auto" mb={5}>
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

              <Heading id="conectare-usb">Conectare USB</Heading>
              <Text fontSize="lg">
                Acesta este un USB port care este folosit pentru a incarca un
                program de pe aplicatia Arduino IDE in placa Arduino. De
                asemenea placa poate fi alimentata prin acest port.
              </Text>
              <Box>
                <Image src="conectare_usb.jpeg" alt="Conectare USB" />
              </Box>

              <Heading id="alimentare-externa">Alimentarea externa</Heading>
              <Text fontSize="lg">
                Placa poate fi alimentata la priza sau cu o baterie. Sursa de
                curent poate fi conectata prin intrarea de 2.1mm aflata pe
                placa.
              </Text>
              <Box>
                <Image src="alimentare_externa.jpeg" alt="Alimentare Externa" />
              </Box>

              <Heading id="pini-de-intrare-analog">
                Pini de intrare analog
              </Heading>
              <Text fontSize="lg">
                Placa Arduino are 6 pini de iesire analog, numerotate de la A0
                la A5. Cu acesti pini putem citi semnalul de la un senzor analog
                ca de exemplu senzorul de temperatura si il putem converti
                intr-o valoare digitala pentru a putea fi citit de sistem.
              </Text>
              <Box>
                <Image src="pini_in_analog.jpeg" alt="Intrare analog" />
              </Box>

              <Heading id="pini-de-intrare-iesire-digitala">
                Pini de intrare/iesire digitala
              </Heading>
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

              <Heading id="buton-de-reset">Butonul de reset</Heading>
              <Text fontSize="lg">
                Cand acesta este apasat, ruleaza programul iara de la inceput.
                Acesta este folositor cand codul pe care il avem nu se repeta.
              </Text>
              <Box>
                <Image src="buton_reset.jpeg" alt="Buton Reset" />
              </Box>

              <Divider zIndex="hide"/>
              <Heading id="instalare-arduino-ide">
                Instalare Arduino IDE
              </Heading>

              <Text fontSize="lg">
                Mai jos o sa ai un mini tutorial cum sa instalezi software-ul
                Arduino IDE pas cu pas.
              </Text>
              <Link href="https://www.arduino.cc/en/software" isExternal>
                Link catre site-ul Arduino <ExternalLinkIcon mx="2px" />
              </Link>
              <Carousel showThumbs={false}>
                <Box>
                  <Image src="ide-1.jpeg" alt="Instalare IDE Pasul 1"/>
                  <Text className="legend">Apasam pe butonul SOFTWARE</Text>
                </Box>
                <Box>
                  <Image src="ide-2.jpeg" alt="Instalare IDE Pasul 2"/>
                  <Text className="legend">
                    Apasam click pe prima optiune de download
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-3.jpeg" alt="Instalare IDE Pasul 3"/>
                  <Text className="legend">
                    Apasam pe butonul unde scrie JUST DOWNLOAD si dechidem
                    aplicatia
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-4.jpeg" alt="Instalare IDE Pasul 4"/>
                  <Text className="legend">
                    Acceptam termenii si conditiile apasand pe butonul I Agree
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-5.jpeg" alt="Instalare IDE Pasul 5"/>
                  <Text className="legend">Apasam pe butonul Next</Text>
                </Box>
                <Box>
                  <Image src="ide-6.jpeg" alt="Instalare IDE Pasul 6"/>
                  <Text className="legend">Apasam pe butonul Install</Text>
                </Box>
                <Box>
                  <Image src="ide-7.jpeg" alt="Instalare IDE Pasul 7"/>
                  <Text className="legend">
                    Apasam pe butonul Install pentru a instala driverele
                    necesare
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-8.jpeg" alt="Instalare IDE Pasul 8"/>
                  <Text className="legend">
                    Apasam pe butonul Install pentru a instala driverele
                    necesare
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-9.jpeg" alt="Instalare IDE Pasul 9"/>
                  <Text className="legend">
                    Apasam pe butonul Install pentru a instala driverele
                    necesare
                  </Text>
                </Box>
                <Box>
                  <Image src="ide-10.jpeg" alt="Instalare IDE Pasul 10"/>
                  <Text className="legend">
                    Apasam pe butonul close si o sa gasim aplicatia pe desktop
                  </Text>
                </Box>
              </Carousel>

              <Heading id="instalare-driver-clona">
                Instalare Driver Pentru Clona Arduino
              </Heading>
              <Text fontSize="lg">
                Acest driver este pentru cei care folosesc o clona arduino
                pentru a face posibila utilizarea aplicatiei Arduino IDE cu
                aceasta
              </Text>
              <Link href="https://www.win-rar.com/download.html?&L=0" isExternal>
                In acest tutorial a mai fost folosita aplicatia WinRAR
                <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="https://sparks.gogo.co.nz/ch340.html" isExternal>
                Link Descarcare Driver (Recomandat)
                <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="/driver/Driver_Arduino_Fake.zip" isExternal>
                Link Descarcare Driver <ExternalLinkIcon mx="2px" />
              </Link>
              <Carousel showThumbs={false}>
                <Box>
                  <Image src="driver-1.jpeg" alt="Instalare Driver Clona Arduino Pasul 1"/>
                  <Text className="legend">
                    Apasam click pe textul albastru unde scrie Windows CH340
                    Driver
                  </Text>
                </Box>
                <Box>
                  <Image src="driver-2.jpeg" alt="Instalare Driver Clona Arduino Pasul 2"/>
                  <Text className="legend">Apasam click pe Extract to</Text>
                </Box>
                <Box>
                  <Image src="driver-3.jpeg" alt="Instalare Driver Clona Arduino Pasul 3"/>
                  <Text className="legend">
                    Apasam pe ok si mergem in folderul de downloads
                  </Text>
                </Box>
                <Box>
                  <Image src="driver-4.jpeg" alt="Instalare Driver Clona Arduino Pasul 4"/>
                  <Text className="legend">
                    Intram in folderul care a fost extras din fisier
                  </Text>
                </Box>
                <Box>
                  <Image src="driver-5.jpeg" alt="Instalare Driver Clona Arduino Pasul 5"/>
                  <Text className="legend">
                    Apasam dublu click pe aplicatie
                  </Text>
                </Box>
                <Box>
                  <Image src="driver-6.jpeg" alt="Instalare Driver Clona Arduino Pasul 6"/>
                  <Text className="legend">Apasam pe butonul Install</Text>
                </Box>
                <Box>
                  <Image src="driver-7.jpeg" alt="Instalare Driver Clona Arduino Pasul 7"/>
                  <Text className="legend">
                    Apasam pe OK si iesim din aplicatie apasand butonul X
                  </Text>
                </Box>
              </Carousel>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default function Documentatie() {
  return (
    <Layout title="Arduino :: Documentatie">
      <Content />
    </Layout>
  );
}
