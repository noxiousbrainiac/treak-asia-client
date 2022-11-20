import React from 'react';
import client from 'utils/contentful';
import { getDocumentFields } from 'utils/contentful/helper';
import Meta from 'components/Meta/Meta.component';
import PageContent from 'components/screens/PageContent';

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
					<PageContent key={section.fields.id} sectionData={section} />
				))}
			</article>
		</>
	);
}

export async function getServerSideProps({ locale }) {
	const data = await client.getEntry('2vDfqVZyM7Ty5aCuzkKtDG', {
		locale
	});

	const { pageContent, meta } = getDocumentFields(data);

	const content = await Promise.all(
		pageContent?.map((sec) => client.getEntry(`${sec.sys.id}`, { locale }))
	);

	return {
		props: { locale, content, meta }
	};
}
