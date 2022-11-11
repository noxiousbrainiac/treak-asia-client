import React from 'react';

import styles from './LocationCard.module.scss';
import ImageSlider from '../ImageSlider/ImageSlider.component';

const LocationCard = ({ location, locale }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<ImageSlider />
			</div>
			<div className={styles.card__body}>
				<h3 className={styles.card__body__title}>{location[locale].title}</h3>

				<p className={styles.card__body__description}>
					{location[locale].description}
				</p>
			</div>
		</div>
	);
};

export default LocationCard;
