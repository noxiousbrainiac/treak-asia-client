import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const useSectionProps = ({ data, id }) => {
	const classname = cn(styles.profileCardsSection, styles[id]);

	return {
		classname,
		data
	};
};

export default useSectionProps;
