import React from 'react';
import ImageSlider from 'components/ui/ImageSlider';
import styles from './styles.module.scss';

const LocationCard = ({ location }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<ImageSlider />
			</div>
			<div className={styles.card__body}>
				<h3 className={styles.card__body__title}>{location.title}</h3>

				<p className={styles.card__body__description}>{location.description}</p>
			</div>
		</div>
	);
};

export default LocationCard;
