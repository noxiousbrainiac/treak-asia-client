import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const LoadingScreen = () => {
	return (
		<div
			className={cn(styles.loadingWrapper, 'flex justify-center items-center')}
		>
			<div className={cn(styles.dot1, 'rounded-2xl m-2')}></div>
			<div className={cn(styles.dot2, 'rounded-2xl m-2')}></div>
			<div className={cn(styles.dot3, 'rounded-2xl m-2')}></div>
		</div>
	);
};

export default LoadingScreen;
