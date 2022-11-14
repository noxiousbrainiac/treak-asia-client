import React from 'react';
import Footer from '../Footer/Footer.component';
import Header from '../Header/Header.component';

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
