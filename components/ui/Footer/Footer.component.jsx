import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.col}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae
						est!
					</div>
					<div className={styles.col}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae
						est!
					</div>
					<div className={styles.col}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						quidem autem voluptatem.
					</div>
					<div className={styles.col}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						quidem autem voluptatem.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
