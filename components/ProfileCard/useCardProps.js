import React from 'react';
import { getDocumentFields } from 'utils/contentful/helper';

const useCardProps = ({ profileData }) => {
	const { role, description, title, image } = getDocumentFields(profileData);
	const imageUrl = getDocumentFields(image);

	return { role, description, title, imageUrl };
};

export default useCardProps;
