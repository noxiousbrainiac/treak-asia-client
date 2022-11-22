import React from 'react';
import dynamic from 'next/dynamic';
import { getDocumentFields } from 'utils/contentful/helper';

const SectionRichText = dynamic(() =>
	import('components/ui/Sections/SectionRichText')
);

const SectionProfilesCards = dynamic(() =>
	import('components/ui/Sections/SectionProfilesCards')
);

const PageContent = ({ sectionData }) => {
	const { type, data, id } = getDocumentFields(sectionData);

	switch (type) {
		case 'RICH':
			return <SectionRichText data={data} id={id} />;
		case 'PROFILE_CARDS':
			return <SectionProfilesCards data={data} id={id} />;
		default:
			return null;
	}
};

export default PageContent;
