import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const Menu = ({ list }) => {
	const router = useRouter();
	const { locale } = router;

	return (
		<ul className={styles.menu}>
			{Object.keys(list).length !== 0
				? list[locale].map((item, i) => (
						<li key={i}>
							<Link
								href={item.url}
								className={router.pathname === item.url ? styles.checked : ''}
							>
								{item.title}
							</Link>
						</li>
				  ))
				: null}
		</ul>
	);
};

export default Menu;
