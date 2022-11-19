import React from 'react';
import Head from 'next/head';

const Meta = (props) => {
	const { title, children, locale, description, url, keyWords } = props;

	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={description} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta property="og:locale" content={locale} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			{keyWords?.map((keyWord) => (
				<meta
					key={`meta/tag/${keyWord}`}
					property="article:tag"
					content={keyWord}
				/>
			))}
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
				key="viewport"
			/>
			{/*<meta*/}
			{/*	name="google-site-verification"*/}
			{/*	content="Ou5rI476W6QK1BYTyVkJaDjTwbCFy7jdbEO5etMIi0k"*/}
			{/*/>*/}
			{children}
		</Head>
	);
};

export default Meta;
