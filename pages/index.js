import {
	Box,
	Container,
	Heading,
	Center,
	HStack,
	Text,
	Stack,
	Flex,
	VStack
} from '@chakra-ui/layout';
import { Button, LightMode } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

import Layout from '../components/layouts';

function Content() {
	return (
		<Box>
			<Container>
				<Center pt={200}>
					<HStack>
						<Heading
							size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
							color="blue.500"
						>
							INVATA
						</Heading>
						<Heading
							size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
							color="blue.500"
						>
							ARDUINO
						</Heading>
						<Heading
							size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
							color="blue.500"
						>
							USOR
						</Heading>
					</HStack>
				</Center>
				<Center>
					<Heading
						size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
						color="gray.600"
					>
						IMPREUNA CU NOI
					</Heading>
				</Center>
					<Text mt={7}>
						Bine ai venit!
					</Text>
					<Text>
						Te invităm să intri în lumea unică
						Arduino pentru a învăţa elementele de bază ale acestei platforme, utilizata in intreaga lume.
					</Text>
				<Text>Vei învăţa:</Text>
				<Text> - ce este Arduino</Text>
				<Text> - cum se conectează</Text>
				<Text> - cum se instalează</Text>
				<Text> - cum se folosesc senzorii</Text>
				<Text> - vei putea studia exemple de proiecte</Text>
				<Text> - iti vei putea verifica cunostiintele acumulate utilizand testele pe care le-am pregatit pentru tine</Text>
				<NextLink href="/documentatie" passHref>
					<Center mt={10}>
						<Button colorScheme="green">Incepe acum</Button>
					</Center>
				</NextLink>
			</Container>
			<Container maxW={{ base: 'container.xl' }} mt={170} mb={5}>
				<Center>
					<Stack
						direction={{ base: 'column', lg: 'row-reverse' }}
						spacing={10}
					>
						<NextLink href="/proiecte" passHref>
							<Box
								maxW="sm"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								p={4}
							>
								<Heading size="md">
									DEZVOLTI CREATIVITATEA
								</Heading>
								<Center mt={6}>
									<Image
										src="/dezvolti-creativitatea.jpeg"
										width={1920}
										height={1080}
										alt="dezvolti creativitatea"
										placeholder="blur"
										blurDataURL={`/_next/image?url=/dezvolti-creativitatea.jpeg&w=16&q=1`}
									/>
								</Center>
							</Box>
						</NextLink>
						<NextLink href="/senzori" passHref>
							<Box
								maxW="sm"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								p={4}
							>
								<Heading size="md">
									INVETI SA FACI ROBOTI
								</Heading>
								<Center mt={6}>
									<Image
										src="/inveti-sa-faci-roboti.jpeg"
										width={1920}
										height={1080}
										alt="Faci roboti"
										placeholder="blur"
										blurDataURL={`/_next/image?url=/inveti-sa-faci-roboti.jpeg&w=16&q=1`}
									/>
								</Center>
							</Box>
						</NextLink>
						<NextLink href="/documentatie" passHref>
							<Box
								maxW="sm"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								p={4}
							>
								<Heading size="md">INVETI PROGRAMARE</Heading>
								<Center mt={6}>
									<Image
										src="/inveti-programare.png"
										width={1920}
										height={1080}
										alt="programezi"
										placeholder="blur"
										blurDataURL={`/_next/image?url=/inveti-programare.png&w=16&q=1`}
									/>
								</Center>
							</Box>
						</NextLink>
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
