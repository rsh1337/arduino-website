import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp