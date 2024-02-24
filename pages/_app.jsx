import { AuthContextProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
//import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Component {...pageProps} />
		</AuthContextProvider>
	);
}
