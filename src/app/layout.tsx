import React from 'react';
import { Inconsolata, Poppins, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import '@/css/style.css';
export const poppins = Poppins({
	weight: ['400', '600', '700', '900'],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	display: 'swap',
	variable: '--font-poppins',
});

export const dmsans = DM_Sans({
	weight: ['400', '700'],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	display: 'swap',
	variable: '--font-dm-sans',
});

export const inconsolata = Inconsolata({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inconsolata',
});

const customDev = localFont({
	src: '../font/devicons-custom/devicons-custom.woff',
	display: 'swap',
	variable: '--font-devicons',
	fallback: ['var(--font-devicons-ttf)'],
});
const customDevTTF = localFont({
	src: '../font/devicons-custom/devicons-custom.ttf',
	display: 'swap',
	variable: '--font-devicons-ttf',
});
export async function generateMetadata() {
	return {
		robots: {
			index: false,
			follow: false,
			nocache: true,
		},
		title: {
			default: 'Portfolio',
			template: `%s | Sam Rankin`,
		},
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
				name: `Sam Rankin`,
				url: 'https://samrankin.dev',
			},
		],
		creator: `Sam Rankin`,
		publisher: `Sam Rankin`,
	};
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#111827' },
	],
};
export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			data-theme="light"
			className={`${customDevTTF.variable} ${customDev.variable} ${poppins.variable} ${inconsolata.variable} ${dmsans.variable} font-sans`}
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
