import type { Metadata } from 'next';
import { Inconsolata, Poppins } from 'next/font/google';
import classNames from 'classnames';

import './globals.css';
const poppins = Poppins({ weight: ['400', '600', '800'], style: ['italic', 'normal'], subsets: ['latin'], display: 'swap', variable: '--font-poppins' });
const inconsolata = Inconsolata({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-inconsolata' });

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
	manifest: '/site.webmanifest',
	icons: {
		// icon: [
		// 	{ url: '/favicon.svg', type: 'image/svg+xml' },
		// 	{ url: '/favicon.png', type: 'image/png' },
		// 	{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		// 	{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		// ],
		// shortcut: ['/favicon.ico'],
		// apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#1fb2a6',
			},
		],
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	appleWebApp: {
		title: 'Sam Rankin',
		statusBarStyle: 'black-translucent',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		viewportFit: 'cover',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="light" className={`${poppins.variable} ${inconsolata.variable}`} suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
