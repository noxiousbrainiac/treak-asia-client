import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import get from 'lodash/get';
import { getDocumentFields } from 'utils/contentful/helper';

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
			const { file, title } = getDocumentFields(data.target);

			return (
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
			);
		}
	}
};

const useSectionProps = ({ data, id }) => {
	const { richText } = getDocumentFields(get(data, '[0]', {}));
	return { richText, options, id };
};

export default useSectionProps;
