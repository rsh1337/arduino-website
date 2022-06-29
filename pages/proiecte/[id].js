import {
  AspectRatio,
  Box,
  Button,
  Code,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Proiecte from "../../models/Proiecte";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Index({ proiect }) {
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
                    <Box>
                      <AspectRatio key={index} ratio={16 / 9} maxW="100%">
                        <Image src={data} />
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
                    <Box>
                      <AspectRatio ratio={16 / 9} maxW="100%">
                        <Image src={data} />
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

export async function getServerSideProps({ params }) {
  await dbConnect();

  const proiect = await Proiecte.findById(params.id).lean();
  proiect._id = proiect._id.toString();

  return { props: { proiect } };
}
