import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import loadable from '@loadable/component';
const PWAPrompt = loadable(() => import('react-ios-pwa-prompt'));

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ChakraProvider>
			<SessionProvider session={session}>
				<Component {...pageProps} />
				<PWAPrompt
					copyTitle="Adauga pe ecranul principal"
					copyBody="Acest website are functionabilitati ca o aplicatie. Adaug-o pe ecranul principal pentru a te bucura de o experienta mai imersiva!"
					copyShareButtonLabel="1) Apasa pe butonul de 'share'/'distribuire'"
					copyAddHomeButtonLabel="2) Apasa pe butonul 'Add to homescreen'/'Adauga pe ecranul principal'"
					copyClosePrompt="Inchide"
				/>
			</SessionProvider>
		</ChakraProvider>
	);
}
export default MyApp;
