import React from 'react';
import { Inconsolata, Poppins, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { getItem, getItems, getItemsExcept, preloadItem } from '@/lib/api';
import { Analytics } from '@vercel/analytics/react';
import { SITE_GRAPHQL_FIELDS, TypeSiteFields } from '@/lib/types';
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
	let site = await getItem<TypeSiteFields>(
		true,
		'site',
		'sam-rankin',
		SITE_GRAPHQL_FIELDS
	);
	let url = site?.url ?? process.env.VERCEL_CUSTOM_DOMAIN;
	return {
		metadataBase: new URL(`${url}`),
		alternates: {
			canonical: '/',
		},

		title: {
			default: site?.seoTitle,
			template: `%s | ${site?.title}`,
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
			title: `${site?.author?.name}`,
			statusBarStyle: 'black-translucent',
		},
		authors: [
			{
				name: `${site?.author?.name}`,
				url: `${url}`,
			},
		],
		creator: `${site?.author?.name}`,
		publisher: `${site?.author?.name}`,
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
		<>
			<Analytics />
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
		</>
	);
}
