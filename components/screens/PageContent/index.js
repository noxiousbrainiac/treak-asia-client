import React from 'react';
import { getDocumentFields } from 'utils/contentful/helper';
import SectionRichText from 'components/ui/Sections/SectionRichText';

const PageContent = ({ sectionData }) => {
	const { type, data, id } = getDocumentFields(sectionData);

	switch (type) {
		case 'RICH':
			return <SectionRichText data={data} id={id} />;

		default:
			return null;
	}
};

export default PageContent;