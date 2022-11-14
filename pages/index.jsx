import styles from '../utils/styles/Home.module.scss';
import client from '../utils/contentful';

export default function Home({ locations }) {
	return <div className={styles.container}></div>;
}

export async function getStaticProps({ locale }) {
	const locations = await client.getEntries({
		content_type: 'location',
		locale
	});

	return {
		props: { locations }
	};
}
