import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'components/ui/Container';
import useSectionProps from './useSectionProps';
import styles from './styles.module.scss';

const SectionRichText = (props) => {
	const { richText, options, id } = useSectionProps(props);

	return (
		<section id={id} className={styles.richTextSection}>
			<Container>{documentToReactComponents(richText, options)}</Container>
		</section>
	);
};

export default SectionRichText;
