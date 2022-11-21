import 'utils/styles/globals.scss';
import Layout from 'components/ui/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
