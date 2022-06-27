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
} from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layouts";

function Card(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return(
    <Box borderWidth={1} borderRadius="lg" maxW="sm" overflow="hidden">
        <Image
          src="https://content.instructables.com/ORIG/FDD/HYSX/IOSPAVJY/FDDHYSXIOSPAVJY.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=b72286c93e5d218e938205bcbc94228cJoyStick%20este%20un%20senzor%20analog%20care%20poate%20fi%20folosit%20pentru%20a%20vă%20controla%20arduino.%20JoyStick-urile%20analogice%20sunt%20practic%20potențiometre,%20deci%20returnează%20valori%20care%20pot%20fi%20făcute%20vizibile%20folosind%20codul%20furnizat"
          alt="test"
        />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            JoyStick
          </Box>
          <Center>
            <ButtonGroup variant="outline" spacing="6">
              {/* Mobile */}
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                motionPreset="slideInBottom"
                isCentered
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>

                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      JoyStick
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      JoyStick este un senzor analog care poate fi folosit
                      pentru a vă controla arduino.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Inchide
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>

              {/* Desktop */}
              <Box display={{ base: "none", md: "flex" }}>
                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme="green" size="sm" mt={4}>
                      Mini Descriere
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>JoyStick</PopoverHeader>
                    <PopoverBody>
                      JoyStick este un senzor analog care poate fi folosit
                      pentru a vă controla arduino.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>

              <Button
                colorScheme="green"
                size="sm"
                mt={4}
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
              >
                Mini Descriere
              </Button>

              <Button colorScheme="blue" size="sm" mt={4}>
                Deschide Pagina
              </Button>
            </ButtonGroup>
          </Center>
        </Box>
      </Box>
  )
}

function Content() {
  return (
    <Center>
      
    </Center>
  );
}

export default function Senzori() {
  return (
    <Layout title="Arduino :: Senzori">
      <Content />
    </Layout>
  );
}
