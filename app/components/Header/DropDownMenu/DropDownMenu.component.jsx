import { useRouter } from 'next/router';
import styles from './DropDownMenu.module.scss';

const DropDownMenu = ({ list, setOpen }) => {
	const router = useRouter();
	const { locale } = router;

	const handleClick = (item) => {
		if (router.pathname === item.url) return null;
		router.push(item.url);
		setOpen(false);
	};

	return (
		<ul className={styles.menu}>
			{Object.keys(list).length !== 0
				? list[locale === 'fr' ? 'fr' : locale === 'en' ? 'en' : 'fr'].map(
						(item, i) => (
							<li
								key={i}
								onClick={() => handleClick(item)}
								className={
									router.pathname === item.url
										? styles['menu__item--checked']
										: styles.menu__item
								}
							>
								{item.title}
							</li>
						)
				  )
				: null}
		</ul>
	);
};

export default DropDownMenu;
