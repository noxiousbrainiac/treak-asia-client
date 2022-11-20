import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import get from 'lodash/get';
import { getDocumentFields } from '../../../../utils/contentful/helper';

const options = {
	renderNode: {
		[BLOCKS.HEADING_1]: (node, children) => (
			<h1 className="text-center">{children}</h1>
		),
		[BLOCKS.HEADING_2]: (node, children) => (
			<h2 className="text-center">{children}</h2>
		),
		[BLOCKS.HEADING_3]: (node, children) => (
			<h3 className="text-center">{children}</h3>
		),
		[BLOCKS.HEADING_4]: (node, children) => (
			<h4 className="text-center">{children}</h4>
		),
		[BLOCKS.HEADING_5]: (node, children) => (
			<h5 className="text-center">{children}</h5>
		),
		[BLOCKS.HEADING_6]: (node, children) => (
			<h6 className="text-center">{children}</h6>
		),
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
		[BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
			const asset = data.target.fields;

			return (
				<div className="max-w-md mx-auto my-4">
					<Image
						priority
						alt={asset.title}
						width="1500"
						height="1000"
						quality={100}
						src={`https:${asset.file.url}`}
					/>
				</div>
			);
		}
	}
};

const useSectionProps = ({ data }) => {
	const { richText } = getDocumentFields(get(data, '[0]', {}));

	return { richText, options };
};

export default useSectionProps;
