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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../../components/layouts";
import dbConnect from "../../lib/dbConnect";
import Senzori from "../../models/Senzori";

export default function Index({ senzor }) {
  return (
    <Layout title="Arduino :: Senzori">
      <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
        <Stack direction="column" spacing={10}>
          <Heading>Descriere</Heading>
          <Text fontSize="xl" whiteSpace="pre-line">{senzor.descriere}</Text>

          {(() => {
            if (!senzor.video) {
              return <Image src={senzor.imagine1} />;
            }
          })()}

          {(() => {
            if (senzor.video) {
              return (
                <Carousel showThumbs={false}>
                  <Box>
                    <Image src={senzor.imagine1} />
                  </Box>
                  <Box>
                    <AspectRatio ratio={16 / 9} maxW="100%">
                      <iframe
                        width="100%"
                        height="100%"
                        muted={true}
                        src={senzor.video}
                      />
                    </AspectRatio>
                  </Box>
                </Carousel>
              );
            }
          })()}
          <Heading>Cod Utilizat</Heading>
            <Code id="foo" whiteSpace="pre-line">{senzor.utilizare}</Code>
        </Stack>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const senzor = await Senzori.findById(params.id).lean();
  senzor._id = senzor._id.toString();

  return { props: { senzor } };
}
