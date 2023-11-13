import React from 'react';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import type { Metadata } from 'next';
import { Inconsolata, Poppins, DM_Sans } from 'next/font/google';
import { Me } from '@/lib/me';
import localFont from 'next/font/local';
import ThemeProvider from '@/lib/theme-context';
import { getAllProjects } from '@/lib/api/projects';

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

const customDev = localFont({
	src: '../../font/devicons-custom/devicons-custom.woff',
	display: 'swap',
	variable: '--font-devicons',
	fallback: ['var(--font-devicons-ttf)'],
});
const customDevTTF = localFont({
	src: '../../font/devicons-custom/devicons-custom.ttf',
	display: 'swap',
	variable: '--font-devicons-ttf',
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
export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const allProjects = await getAllProjects(false);

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
				<ThemeProvider>
					<Header projects={allProjects} />
					<main className="flex min-h-screen flex-col w-full overflow-y-none">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
