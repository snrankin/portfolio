import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Resume',
	description: 'Printable resume for Sam Rankin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col w-full overflow-y-none">
			{children}
		</main>
	);
}
