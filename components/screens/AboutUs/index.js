import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useScreenProps from './utils/useScreenProps';

const AboutUsScreen = (props) => {
	const { id, editorText, options } = useScreenProps(props);

	return (
		<section id={id}>
			<div className="container mx-auto px-4">
				{documentToReactComponents(editorText, options)}
			</div>
		</section>
	);
};

export default AboutUsScreen;
