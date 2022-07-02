import {
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default function CreateInvitatie() {
  const toast = useToast();
  const { data: session } = useSession();
  // Data
  const [createdBy, setCreatedBy] = useState(session.user.email);
  const [invitation, setInvitation] = useState(makeid());
  //
  const createInvitation = async (invitation,createdBy, e) => {
    e.preventDefault();
    const res = await fetch("/api/createinvitation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invitation,
        createdBy
      }),
    });
    let data = await res.json();
    if (data.message) {
      console.log(data.message);
      return toast({
        title: "Eroare",
        description: data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (data.msgsg == "success") {
      return toast({
        title: "Invitatie Creata.",
        description: "Invitatia a fost creata cu succes!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Center>
      <Container maxW={{ base: "container.sm" }} mt={10} mb={10}>
        <FormControl>
          <FormLabel htmlFor="invitation" mt={10}>
            Creare Invitatie
          </FormLabel>
          <Input
            id="invitation"
            type="invitation"
            name="invitation"
            value={invitation}
          />
          <FormHelperText>
            Copiaza codul de invitatie generat automat si apasa creaza invitatie.
          </FormHelperText>
          <Button
            mt={6}
            colorScheme="blue"
            onClick={(e) => createInvitation(invitation,createdBy, e)}
          >
            Creaza Invitatie
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}
