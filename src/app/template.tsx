'use client';
import React, { useState, createContext } from 'react';
import Header from '@/app/components/global/header';
import Footer from '@/app/components/global/footer';
import { ThemeContext } from '@/app/lib/context';

export default function Template({ children }: { children: React.ReactNode }) {
	let [theme, setTheme] = useState('light');
	return (
		<ThemeContext.Provider value={theme}>
			<div data-theme={theme}>
				<Header setTheme={setTheme} />
				<main className="flex min-h-screen flex-col w-full overflow-y-none">
					{children}
				</main>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}
