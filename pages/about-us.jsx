import React from 'react';
import client from '../utils/contentful';
import Meta from '../components/Meta/Meta.component';
import AboutUsScreen from '../components/screens/AboutUs';

export default function AboutUs({ fields, locale }) {
	const metaProps = {
		locale: locale,
		children: null,
		...fields?.meta.fields
	};

	return (
		<>
			<Meta {...metaProps} />
			<AboutUsScreen {...fields} />
		</>
	);
}

export async function getStaticProps({ locale }) {
	const { fields = null } = await client.getEntry('2vDfqVZyM7Ty5aCuzkKtDG', {
		locale
	});

	return {
		props: { fields, locale }
	};
}
