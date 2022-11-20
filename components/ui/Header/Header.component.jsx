import { useEffect, useState } from 'react';
import { navMenuList } from 'utils/lists/lists';
import DropDownMenu from './DropDownMenu/DropDownMenu.component';
import Hamburger from './Hamburger/Hamburger.component';
import styles from './Header.module.scss';
import Menu from './Menu/Menu.component';
import SwitchLocale from './SwitchLocale/SwitchLocale.component';

const Header = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [open]);

	return (
		<header className={open ? styles['header--open'] : styles.header}>
			<nav className={`${styles.header__nav__top} container`}>
				<Hamburger open={open} setOpen={setOpen} />
				<Menu list={navMenuList} />
				<SwitchLocale />
			</nav>

			<nav className={styles.header__nav__bottom}>
				<DropDownMenu list={navMenuList} setOpen={setOpen} />
			</nav>
		</header>
	);
};

export default Header;
