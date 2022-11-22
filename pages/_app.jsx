import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/ui/Layout';
import LoadingScreen from 'components/LoadingScreen';
import 'utils/styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	});

	return loading ? (
		<LoadingScreen />
	) : (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
