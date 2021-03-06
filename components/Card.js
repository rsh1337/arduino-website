import {
	Box,
	Button,
	ButtonGroup,
	Center,
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
	AlertDialogOverlay
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

export default function Card({ imagine, nume, descriere, hlink }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();

	return (
		<Box borderWidth={1} borderRadius="lg" maxW="sm" overflow="hidden">
			<Image
				src={imagine}
				alt={nume}
				width={1024}
				height={720}
				layout="responsive"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${imagine}&w=16&q=1`}
				quality={30}
			/>

			<Box p="6">
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					noOfLines={1}
				>
					{nume}
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
									<AlertDialogHeader
										fontSize="lg"
										fontWeight="bold"
									>
										{nume}
									</AlertDialogHeader>

									<AlertDialogBody>
										{descriere}
									</AlertDialogBody>

									<AlertDialogFooter>
										<Button
											ref={cancelRef}
											onClick={onClose}
										>
											Inchide
										</Button>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialogOverlay>
						</AlertDialog>

						{/* Desktop */}
						<Box display={{ base: 'none', md: 'flex' }}>
							<Popover>
								<PopoverTrigger>
									<Button
										colorScheme="green"
										size="sm"
										mt={4}
									>
										Mini Descriere
									</Button>
								</PopoverTrigger>
								<PopoverContent>
									<PopoverArrow />
									<PopoverCloseButton />
									<PopoverHeader>{nume}</PopoverHeader>
									<PopoverBody>{descriere}</PopoverBody>
								</PopoverContent>
							</Popover>
						</Box>

						<Button
							colorScheme="green"
							size="sm"
							mt={4}
							display={{ base: 'flex', md: 'none' }}
							onClick={onOpen}
						>
							Mini Descriere
						</Button>

						<NextLink href={`/${hlink}`} passHref>
							<Button colorScheme="blue" size="sm" mt={4}>
								Deschide Pagina
							</Button>
						</NextLink>
					</ButtonGroup>
				</Center>
			</Box>
		</Box>
	);
}
