import React from 'react';
import { draftMode } from 'next/headers';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import ThemeProvider from '@/lib/context/theme';
import SectionProvider from '@/lib/context/section';
import HeaderProvider from '@/lib/context/header';
import { getItems } from '@/lib/api';
import { POST_LINKS_GRAPHQL_FIELDS, TypePostLinkFields } from '@/lib/types';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	const allProjects = await getItems<TypePostLinkFields>(
		isEnabled,
		'post',
		undefined,
		undefined,
		POST_LINKS_GRAPHQL_FIELDS
	);

	return (
		<ThemeProvider>
			<SectionProvider>
				<HeaderProvider
					headerContent={<Header projects={allProjects} />}
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
