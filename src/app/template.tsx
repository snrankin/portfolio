'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/app/components/global/header';
import Footer from '@/app/components/global/footer';
import { ThemeContext } from '@/app/lib/context';

function useWindowDimensions() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (window != undefined) {
			const listener = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};

			window.addEventListener('resize', listener);

			return () => {
				window.removeEventListener('resize', listener);
			};
		}
	});

	return {
		width,
		height,
	};
}

export default function Template({ children }: { children: React.ReactNode }) {
	let [theme, setTheme] = useState('light');

	const { width, height } = useWindowDimensions();
	const style = {
		'--vh': `${height * 0.01}px`,
	} as React.CSSProperties;
	return (
		<ThemeContext.Provider value={theme}>
			<div data-theme={theme} style={style}>
				<Header setTheme={setTheme} />
				<main className="flex min-h-screen flex-col w-full overflow-y-none">
					{children}
				</main>
			</div>
		</ThemeContext.Provider>
	);
}
