import React from 'react';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import ThemeProvider from '@/lib/theme-context';
import { getAllProjects } from '@/lib/api/projects';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const allProjects = await getAllProjects(false);

	return (
		<ThemeProvider>
			<Header projects={allProjects} />
			<main className="flex min-h-screen flex-col w-full overflow-y-none">
				{children}
			</main>
			<Footer />
		</ThemeProvider>
	);
}
