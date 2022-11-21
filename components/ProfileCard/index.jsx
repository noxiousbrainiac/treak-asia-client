import React from 'react';
import Image from 'next/image';
import useCardProps from './useCardProps';
import styles from './styles.module.scss';

const ProfileCard = (props) => {
	const { title, description, role, imageUrl } = useCardProps(props);

	return (
		<div className={styles.card}>
			<Image
				className={styles.image}
				priority
				alt="alt"
				width="1500"
				height="1000"
				quality={100}
				src={`https:${imageUrl.file.url}`}
			/>
			<div className={styles.cardBody}>
				<p className={styles.title}>{title}</p>
				<p className={styles.role}>{role}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
