import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import get from 'lodash/get';
import cn from 'classnames';
import AnimatedWrapper from 'components/AnimatedWrapper';
import { getDocumentFields } from 'utils/contentful/helper';
import styles from './styles.module.scss';
import { yOptions } from 'utils/constants';

const options = {
	renderNode: {
		[BLOCKS.HEADING_1]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h1>{children}</h1>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.HEADING_2]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h2>{children}</h2>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.HEADING_3]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h3>{children}</h3>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.HEADING_4]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h4>{children}</h4>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.HEADING_5]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h5>{children}</h5>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.HEADING_6]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<h6>{children}</h6>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return (
				<AnimatedWrapper options={yOptions}>
					<p>{children}</p>
				</AnimatedWrapper>
			);
		},
		[BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
			const { file, title } = getDocumentFields(data.target);

			return (
				<AnimatedWrapper options={yOptions}>
					<div className="max-w-sm mx-auto my-4">
						<Image
							priority
							alt={title}
							width="1500"
							height="1000"
							quality={100}
							src={`https:${file.url}`}
						/>
					</div>
				</AnimatedWrapper>
			);
		}
	}
};

const useSectionProps = ({ data, id }) => {
	const { richText } = getDocumentFields(get(data, '[0]', {}));

	const className = cn(styles.richTextSection, styles[id]);

	return { richText, options, className };
};

export default useSectionProps;
