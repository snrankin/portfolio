// import 'file:https://assets.calendly.com/assets/external/widget.css';

import { draftMode } from 'next/headers';
import React from 'react';

import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import SocialLinks from '@/components/social/group';
import { getItem } from '@/lib/api';
import HeaderProvider from '@/lib/context/header';
import SectionProvider from '@/lib/context/section';
import ThemeProvider from '@/lib/context/theme';
import { SITE_GRAPHQL_FIELDS, TypeSiteFields } from '@/lib/types';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	let site = await getItem<TypeSiteFields>(
		isEnabled,
		'site',
		'sam-rankin',
		SITE_GRAPHQL_FIELDS
	);

	return (
		<ThemeProvider>
			<SectionProvider>
				<HeaderProvider
					headerContent={<Header links={site?.navLinks} />}
				>
					<main className="flex min-h-screen flex-col w-full overflow-y-none">
						{children}
					</main>
					<Footer author={site?.author} />
					<SocialLinks
						className="print:hidden btm-nav bg-primary divide-x divide-slate-900 lg:w-max lg:divide-x-0 lg:divide-y lg:flex-col lg:left-auto lg:right-0 lg:bottom-16 !h-auto lg:rounded-l z-40"
						author={site?.author}
						iconProps={{
							className:
								'tooltip-top lg:tooltip-left block !lg:h-auto p-3 !p-3 lg:text-xl flex items-center justify-center',
							titleDisplay: 'popover',
							iconClasses: 'stroke-2 text-slate-900',
						}}
					/>
				</HeaderProvider>
			</SectionProvider>
		</ThemeProvider>
	);
}
