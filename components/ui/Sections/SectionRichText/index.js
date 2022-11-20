import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'components/ui/Container/Container.component';
import useSectionProps from './useSectionProps';

const SectionRichText = (props) => {
	const { richText, options } = useSectionProps(props);

	return (
		<section>
			<Container>{documentToReactComponents(richText, options)}</Container>
		</section>
	);
};

export default SectionRichText;
