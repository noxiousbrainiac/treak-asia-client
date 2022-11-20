import React from 'react';
import { getDocumentFields } from '../../../utils/contentful/helper';
import SectionRichText from '../../ui/Sections/SectionRichText';

const PageScreen = ({ sectionData }) => {
	const { type, data } = getDocumentFields(sectionData);

	switch (type) {
		case 'RICH':
			return <SectionRichText data={data} />;

		default:
			return null;
	}
};

export default PageScreen;
