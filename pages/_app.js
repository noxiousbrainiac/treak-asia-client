import '../app/utils/styles/globals.scss';
import Layout from '../app/components/Layout/Layout.component';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
