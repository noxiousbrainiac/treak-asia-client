import React from 'react';
import Footer from 'components/ui/Footer';
import Header from 'components/ui/Header';

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
