import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'components/ui/Container';
import useSectionProps from './useSectionProps';

const SectionRichText = (props) => {
	const { richText, options, className } = useSectionProps(props);

	return (
		<section className={className}>
			<Container>{documentToReactComponents(richText, options)}</Container>
		</section>
	);
};

export default SectionRichText;
