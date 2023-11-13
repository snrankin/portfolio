'use client';
import React, { useState, useRef, useEffect, createContext } from 'react';
export const ThemeContext = createContext({
	theme: 'light',
	toggleThemeHandler: (str: string) => {},
});

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

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	let [theme, setTheme] = useState('light');

	const { width, height } = useWindowDimensions();
	const style = {
		'--vh': `${height * 0.01}px`,
	} as React.CSSProperties;
	useEffect(() => initialThemeHandler());

	function initialThemeHandler(): void {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	function toggleTheme(str: string) {
		setTheme(str);
	}

	return (
		<ThemeContext.Provider
			value={{ theme, toggleThemeHandler: toggleTheme }}
		>
			<div data-theme={theme} style={style}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}
