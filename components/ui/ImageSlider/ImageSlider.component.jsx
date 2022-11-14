import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';

const images = [
	'https://www.kirghizasia.com/img/pdn1/01.jpg',
	'https://www.kirghizasia.com/img/pdn1/03.jpg',
	'https://www.kirghizasia.com/img/pdn1/04.jpg',
	'https://www.kirghizasia.com/img/pdn1/05.jpg',
	'https://www.kirghizasia.com/img/pdn1/02.jpg'
];

const ImageSlider = () => {
	const [current, setCurrent] = useState(0);
	const { length } = images;

	const nextImage = () => setCurrent(current === length - 1 ? 0 : current + 1);

	const prevImage = () => setCurrent(current === 0 ? length - 1 : current - 1);

	if (!Array.isArray(images) || images.length <= 0) return null;

	return (
		<div className={styles.slider}>
			{length > 1 ? (
				<>
					<IoIosArrowBack className={styles.left_arrow} onClick={prevImage} />
					<IoIosArrowForward
						className={styles.right_arrow}
						onClick={nextImage}
					/>
					<div className={styles.dots}>
						{images.map((dot, index) => (
							<BsDot
								key={index}
								className={
									index === current ? styles['dot--active'] : styles.dot
								}
								onClick={() => setCurrent(index)}
							/>
						))}
					</div>
				</>
			) : null}

			{images.map((src, index) => {
				return (
					<div
						key={index}
						className={
							index === current ? styles['slide--active'] : styles.slide
						}
					>
						{index === current && (
							<Image
								priority
								alt="alt"
								width="1500"
								height="1000"
								quality={100}
								src={src}
								className={styles.image}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;
