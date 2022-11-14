import styles from '../app/utils/styles/Home.module.scss';
import client from '../app/utils/contentful';

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
