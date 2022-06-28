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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
            if (!proiect.imagine2 && !proiect.video && !proiect.imagine3) {
              return <Image src={proiect.imagine1} />;
            }
          })()}
          <Swiper navigation>
            <SwiperSlide>
              <Box>
                <AspectRatio ratio={16 / 9} maxW="100%">
                  <Image src={proiect.imagine1} />
                </AspectRatio>
              </Box>
            </SwiperSlide>
            <Box display="none">
              <SwiperSlide display="none">
                <Box>
                  <AspectRatio ratio={16 / 9} maxW="100%">
                    <Image src={proiect.imagine2} />
                  </AspectRatio>
                </Box>
              </SwiperSlide>
            </Box>
            <SwiperSlide>
              <Box>
                <AspectRatio ratio={16 / 9} maxW="100%">
                  <Image src={proiect.imagine3} />
                </AspectRatio>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
          <Heading>Utilizare</Heading>
          <Text fontSize="xl" whiteSpace="pre-line">
            {proiect.utilizare}
          </Text>
          <Heading>Cod Utilizat</Heading>
          <Code whiteSpace="pre-line">{proiect.cod_folosit}</Code>
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
