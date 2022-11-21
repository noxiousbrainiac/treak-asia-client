import styles from './styles.module.scss';

const Hamburger = ({ open, setOpen }) => {
	return (
		<button
			type="button"
			className={
				open ? `${styles.hamburger} ${styles.active}` : styles.hamburger
			}
			onClick={() => setOpen(!open)}
		>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	);
};

export default Hamburger;
