import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles.module.scss';

const SwitchLocale = ({ color, className }) => {
	const router = useRouter();
	const { locale } = router;
	const [value, setValue] = useState(locale === 'en');

	const handleChange = () => {
		setValue(!value);

		if (value) {
			router.push(router.pathname, '', { locale: 'fr' });
		} else {
			router.push(router.pathname, '', { locale: 'en' });
		}
	};

	return (
		<div className={className}>
			<input
				checked={value}
				onChange={handleChange}
				className={`${styles.tgl} ${styles.skewed}`}
				id="cb3"
				type="checkbox"
			/>
			<label
				className={color ? `${styles.btn} ${styles.bg}` : styles.btn}
				data-tg-off="FR"
				data-tg-on="EN"
				htmlFor="cb3"
			></label>
		</div>
	);
};

export default SwitchLocale;
