import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ChakraProvider>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
}
export default MyApp;
