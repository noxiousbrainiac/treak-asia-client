import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import get from 'lodash/get';
import { getDocumentFields } from 'utils/contentful/helper';

const options = {
	renderNode: {
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

const useSectionProps = ({ data, id }) => {
	const { richText } = getDocumentFields(get(data, '[0]', {}));
	return { richText, options, id };
};

export default useSectionProps;
