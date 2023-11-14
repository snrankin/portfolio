'use client';
import React, {
	useState,
	useRef,
	useEffect,
	createContext,
	useLayoutEffect,
} from 'react';
export const ThemeContext = createContext({
	theme: 'light',
	toggleThemeHandler: (str: string) => {},
});

function useWindowDimensions() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		if (window != undefined) {
			const listener = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};

			listener();

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

	function isLocalStorageEmpty(): boolean {
		return !localStorage.getItem('theme');
	}

	function initialThemeHandler(): void {
		if (isLocalStorageEmpty()) {
			if (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				toggleTheme('dark');
			} else {
				toggleTheme('light');
			}
		} else {
			const localTheme = localStorage.getItem('theme');

			setTheme(`${localTheme}`);
		}

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';

				toggleTheme(newColorScheme);
			});
	}

	function setValueToLocalStorage(str: string): void {
		localStorage.setItem('theme', str);
	}

	function toggleTheme(str: string) {
		setTheme(str);
		setValueToLocalStorage(str);
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