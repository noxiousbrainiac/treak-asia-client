import styles from '../app/utils/styles/Home.module.scss';

export default function Home() {
	return <div className={styles.container}></div>;
}

// export const getStaticProps = async ({ locale }) => {
// 	// const home = await client.getEntries({
// 	// 	content_type: 'home',
// 	// 	limit: 1,
// 	// 	locale: locale
// 	// });
//
// 	return { props: {} };
// };
