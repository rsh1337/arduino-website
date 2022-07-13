import {
	Box,
	Container,
	Heading,
	Center,
	HStack,
	Text,
	Stack,
	Flex
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
							color="gray.600"
						>
							INVATA
						</Heading>
						<Heading
							size={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
							color="gray.600"
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
				<Center mt={7}>
					<Text>
						Vă invităm să intraţi în lumea unică Arduino pentru a
						învăţa elementele de bază ale modului în care
						funcţionează senzorii şi cum se poate realiza un proiect
						rapid.
					</Text>
				</Center>
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
							<Heading size="md">DEZVOLTI CREATIVITATEA</Heading>
							<Center mt={6}>
								<Image
									src="/dezvolti-creativitatea.jpeg"
									width={1920}
									height={1080}
									alt="dezvolti creativitatea"
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
							<Heading size="md">INVETI SA FACI ROBOTI</Heading>
							<Center mt={6}>
								<Image
									src="/inveti-sa-faci-roboti.jpeg"
									width={1920}
									height={1080}
									alt="Faci roboti"
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
