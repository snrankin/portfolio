import React from 'react';
import { draftMode } from 'next/headers';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import ThemeProvider from '@/lib/context/theme';
import SectionProvider from '@/lib/context/section';
import HeaderProvider from '@/lib/context/header';
import { getItem } from '@/lib/api';
import { SITE_GRAPHQL_FIELDS, TypeSiteFields } from '@/lib/types';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	let site = await getItem<TypeSiteFields>(
		true,
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
					<Footer />
				</HeaderProvider>
			</SectionProvider>
		</ThemeProvider>
	);
}
