import React from 'react';
import useSectionProps from './useSectionProps';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Index = (props) => {
	const { richText, options } = useSectionProps(props);

	return (
		<section>
			<div className="container mx-auto p-4">
				{documentToReactComponents(richText, options)}
			</div>
		</section>
	);
};

export default Index;
