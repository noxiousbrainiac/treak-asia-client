import React from 'react';
import Footer from 'components/ui/Footer/Footer.component';
import Header from 'components/ui/Header/Header.component';

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
