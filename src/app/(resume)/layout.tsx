import React from 'react';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { getItem, getItems, getItemsExcept, preloadItem } from '@/lib/api';

import { TypeResumePageFields, TypeSiteFields } from '@/lib/types';
import { set } from 'lodash';
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { isEnabled } = draftMode();
	let site = await getItem<TypeSiteFields>(isEnabled, 'site', 'sam-rankin');
	preloadItem(isEnabled, 'post', params.slug);
	const page = await getItem<TypeResumePageFields>(
		isEnabled,
		'resumePage',
		'resume'
	);
	let title = page?.seoTitle ? page?.seoTitle : page?.title;
	let description = page?.seoDescription
		? page?.seoDescription
		: page?.summary;
	let url = site?.url ?? process.env.VERCEL_CUSTOM_DOMAIN;
	const meta = {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			siteName: site?.seoTitle ?? process.env.VERCEL_SEO_SITE_NAME,
			locale: 'en_US',
			type: 'website',
		},
	};

	if (!!page?.seoImage) {
		set(meta, 'openGraph.images[0]', {
			url: page?.seoImage?.url,
			width: page?.seoImage?.width,
			height: page?.seoImage?.height,
			alt: page?.seoImage?.description,
		});
	}
	return meta;
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col w-full overflow-y-none">
			{children}
		</main>
	);
}
