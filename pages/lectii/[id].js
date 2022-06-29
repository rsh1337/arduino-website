import {
    AspectRatio,
    Box,
    Container, Heading,
  } from "@chakra-ui/react";
  import Layout from "../../components/layouts";
  import dbConnect from "../../lib/dbConnect";
  import Lectii from "../../models/Lectii";
  
  export default function Index({ lectie }) {
    return (
      <Layout title="Arduino :: Lectii">
        <Container maxW={{ base: "container.xl" }} mt={10} mb={10}>
            <Heading mb={10}>{lectie.nume}</Heading>
            <Box>
                <AspectRatio ratio={16 / 9} maxW="100%">
                    <iframe src={lectie.linkteste} webkitallowfullscreen="true" mozallowfullscreen="true"/>
                </AspectRatio>
            </Box>
        </Container>
      </Layout>
    );
  }
  
  export async function getServerSideProps({ params }) {
    await dbConnect();
  
    const lectie = await Lectii.findById(params.id).lean();
    lectie._id = lectie._id.toString();
  
    return { props: { lectie } };
  }
  