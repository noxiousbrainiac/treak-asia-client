import React from 'react';
import client from '../utils/contentful';
import Meta from '../components/Meta/Meta.component';
import AboutUsScreen from '../components/screens/AboutUs';

export default function AboutUs({ locale, content, meta }) {
	const metaProps = {
		locale: locale,
		children: null,
		...meta.fields
	};

	return (
		<>
			<Meta {...metaProps} />
			<article>
				{content?.map((section) => (
					<AboutUsScreen key={section.fields.id} sectionData={section} />
				))}
			</article>
		</>
	);
}

export async function getStaticProps({ locale }) {
	const { fields = null } = await client.getEntry('2vDfqVZyM7Ty5aCuzkKtDG', {
		locale
	});

	const { pageContent, meta } = fields;

	const content = await Promise.all(
		pageContent.map((sec) => client.getEntry(`${sec.sys.id}`, { locale }))
	);

	return {
		props: { locale, content, meta }
	};
}
