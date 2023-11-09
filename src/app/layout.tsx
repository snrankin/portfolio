import React, { useState, createContext } from 'react';

import type { Metadata } from 'next';
import { Inconsolata, Poppins, DM_Sans, Anonymous_Pro } from 'next/font/google';
import Script from 'next/script';
import { Me } from './lib/me';
import localFont from 'next/font/local';

import '@/css/style.css';
const poppins = Poppins({
	weight: ['400', '600', '700', '900'],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	display: 'swap',
	variable: '--font-poppins',
});

const dmsans = DM_Sans({
	weight: ['400', '700'],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	display: 'swap',
	variable: '--font-dm-sans',
});

const inconsolata = Inconsolata({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inconsolata',
});

const anonymous = Anonymous_Pro({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-anonymous',
});

const customDev = localFont({
	src: '../font/devicons-custom/devicons-custom.woff',
	display: 'swap',
	variable: '--font-devicons',
});

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: {
		default: 'Portfolio',
		template: '%s | Sam Rankin',
	},
	description: 'Portfolio for Phoenix, AZ Based Web Developer',
	icons: {
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#1fb2a6',
			},
		],
	},
	appleWebApp: {
		title: 'Sam Rankin',
		statusBarStyle: 'black-translucent',
	},
	authors: [
		{
			name: `${Me.firstName} ${Me.lastName}`,
			url: 'https://samrankin.dev',
		},
	],
	creator: `${Me.firstName} ${Me.lastName}`,
	publisher: `${Me.firstName} ${Me.lastName}`,
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#111827' },
	],
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			data-theme="light"
			className={`${customDev.variable} ${poppins.variable} ${inconsolata.variable} ${dmsans.variable} ${anonymous.variable} font-sans`}
			suppressHydrationWarning={true}
		>
			<body
				className="max-w-screen overscroll-x-none"
				suppressHydrationWarning={true}
			>
				{children}
			</body>
		</html>
	);
}
