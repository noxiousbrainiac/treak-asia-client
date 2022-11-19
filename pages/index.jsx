import Meta from '../components/Meta/Meta.component';
import client from '../utils/contentful';

export default function Home({ fields, locale }) {
	const metaProps = {
		locale: locale,
		children: null,
		...fields?.meta.fields
	};

	return (
		<>
			<Meta {...metaProps} />
		</>
	);
}

export async function getStaticProps({ locale }) {
	const { fields = null } = await client.getEntry('6eGES4JHIh3PWPEBYaXLht', {
		locale
	});

	return {
		props: { fields, locale }
	};
}
